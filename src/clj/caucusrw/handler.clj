(ns caucusrw.handler
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET defroutes]]
            [ring.util.response :refer [resource-response response]]
            [ring.middleware.json :as middleware]))


(defroutes app-routes
  (GET  "/" [] (resource-response "index.html" {:root "public"}))
  (GET  "/widgets" [] (response [{:name "Widget 1"} {:name "Widget 2"}]))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (-> (handler/api app-routes)
      (middleware/wrap-json-body)
      (middleware/wrap-json-response)))
