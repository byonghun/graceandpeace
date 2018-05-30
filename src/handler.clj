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
            [clj-time.core :as t]
            [taika.core :as taika]
            [taika.auth :as taika-auth])
  (:import java.util.UUID))

(selmer.parser/cache-off!)
(selmer.parser/set-resource-path! (clojure.java.io/resource "react"))

;; (def user-auth-token
;;   (let [token-generator (taika-auth/token-generator "SECRET-KEY")
;;         admin? false]
;;     (taika-auth/create-token token-generator auth-data admin?)))

(defn post-sermon [req]
  (clojure.pprint/pprint req))

(defn store-and-redirect [request]
  (redirect (str "/?r=" (:uri request))))

(defn show-ui [request]
  (let [response (render-file "index.html" {})]
    {:status 200
     :headers {}
     :body response}))

(defroutes gp-routes
  (GET "/app.js" []
       (redirect "http://localhost:8080/build/app.js"))
  (GET "/home" [] store-and-redirect)
  (GET "/sermons" [] store-and-redirect)
  (POST "/sermons" [] post-sermon)
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
