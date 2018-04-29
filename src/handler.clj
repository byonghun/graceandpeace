(ns handler
  (:require [org.httpkit.server :refer
             [run-server]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure
             [core :refer :all]
             [route :as route]]
            [clj-time.core :as t]))

(defn show-ui [request]
  {:status 200
   :headers {}
   :body (str (t/now))})

(defroutes gp-routes
  (GET "/" [] show-ui)
  (route/resources "/")
  (route/not-found "Page not found"))

(defn handler [routes]
  (-> routes
      (wrap-restful-format :formats [:json :transit-json])
      (wrap-reload {:dirs ["src"]})))

(def app-handler
  (handler #'gp-routes))

(defn -main [& args]
  (run-server app-handler {:port 9002})
  (println "Server is running on port 9002"))
