(ns handler
  (:require [org.httpkit.server :refer
             [run-server]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :refer [redirect]]
            [selmer.parser :refer :all]
            [compojure
             [core :refer :all]
             [route :as route]]
            [clj-time.core :as t]))

(selmer.parser/cache-off!)
(selmer.parser/set-resource-path! (clojure.java.io/resource "react"))

(defn show-ui [request]
  (let [response (render-file "index.html" {})]
    {:status 200
     :headers {}
     :body response}))

(defroutes gp-routes
  (GET "/app.js" []
       (redirect "http://localhost:8080/build/app.js"))
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
