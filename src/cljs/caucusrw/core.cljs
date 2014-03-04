(ns caucusrw.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.data :as data]
            [clojure.string :as string]))
;            [cljs-http.client :as http]))

(enable-console-print!)

(def app-state
  (atom
    {:contacts
     [{:first "Ben" :last "Bitdiddle" :email "benb@mit.edu" :grade 12 :school "NOAA"}
      {:first "Alyssa" :middle-initial "P" :last "Hacker" :email "aphacker@mit.edu" :grade 12 :school "NOAA"}
      {:first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu" :grade 12 :school "NOAA"}
      {:first "Louis" :last "Reasoner" :email "prolog@mit.edu" :grade 12 :school "NOAA"}
      {:first "Cy" :middle-initial "D" :last "Effect" :email "bugs@mit.edu" :grade 12 :school "NOAA"}
      {:first "Lem" :middle-initial "E" :last "Tweakit" :email "morebugs@mit.edu" :grade 12 :school "NOAA"}]}))



(defn middle-name [{:keys [middle middle-initial]}]
  (cond
    middle (str " " middle)
    middle-initial (str " " middle-initial ".")))


(defn display-name [{:keys [first last] :as contact}]
  (str last ", " first (middle-name contact)))


(defn parse-contact [contact-str]
  (let [[first middle last :as parts] (string/split contact-str #"\s+")
        [first last middle] (if (nil? last) [first middle] [first last middle])
        middle (when middle (string/replace middle "." ""))
        c (if middle (count middle) 0)]
    (when (>= (count parts) 2)
      (cond-> {:first first :last last}
        (== c 1) (assoc :middle-initial middle)
        (>= c 2) (assoc :middle middle)))))


(defn add-contact [app owner]
  (let [new-contact (-> (om/get-node owner "new-contact")
                        .-value
                        parse-contact)]
    (when new-contact
      (om/transact! app :contacts #(conj % new-contact)))))


(defn contact-view [contact owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [delete]}]
      (dom/li nil
        (dom/span nil (display-name contact))
        (dom/button #js {:onClick (fn [e] (put! delete @contact))} "Delete")))))


(defn contacts-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:delete (chan)})
    om/IWillMount
    (will-mount [_]
      (let [delete (om/get-state owner :delete)]
        (go (loop []
              (let [contact (<! delete)]
                (om/transact! app :contacts
                  (fn [xs] (vec (remove #(= contact %) xs))))
                (recur))))))
    om/IRenderState
    (render-state [this state]
      (dom/div nil
        (dom/h2 nil "Contact list")
        (apply dom/ul nil
          (om/build-all contact-view (:contacts app)
            {:init-state state}))
        (dom/div nil
          (dom/input #js {:type "text" :ref "new-contact"})
          (dom/button #js {:onClick #(add-contact app owner)} "Add contact"))))))






#_(defn contacts-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h2 nil "Contact list")
        (apply dom/ul nil
          (om/build-all contact-view (:contacts app)))))))






(om/root contacts-view app-state
  {:target (. js/document (getElementById "contacts"))})


#_(om/root
  (fn [app owner]
    (apply dom/ul #js {:className "animals"}
      (map stripe (:list app) (cycle ["#ff0" "#fff"]))))
  app-state
  {:target (. js/document (getElementById "app0"))})




#_(om/root app-state om-app (.getElementById js/document "content"))

#_(defn om-app [app owner]
  (om/component
   (dom/div nil
            (om/build widget-box app
                      {:opts {:url "/widgets"
                              :poll-interval 2000}}))))


#_(defn fetch-widgets
  [url]
  (let [c (chan)]
    (go (let [{widgets :body} (<! (http/get url))]
          (>! c (vec widgets))))
    c))



#_(defn widget-box [app owner opts]
  (reify
    om/IInitState
    (init-state [_]
                (om/transact! app [:widgets] (fn [] [])))
    om/IWillMount
    (will-mount [_]
                (go (while true
                      (let [widgets (<! (fetch-widgets (:url opts)))]
                        (.log js/console (pr-str widgets))
                        (om/update! app #(assoc % :widgets widgets)))
                      (<! (timeout (:poll-interval opts))))))
    om/IRender
    (render [_]
            (dom/h1 nil "Widgets")
            (om/build widget-list app))))

#_(defn widget [{:keys [name]} owner opts]
  (om/component
   (dom/li nil name)))


#_(defn widget-list [{:keys [widgets]}]
  (om/component
   (apply dom/ul nil
          (om/build-all widget widgets))))
#_(def app-state (atom {:text "Hello world!"}))


#_(def app-state (atom {:list ["Lion" "Zebras" "Booffalo" "Antelope"]}))


#_(defn stripe [text bgc]
  (let [st #js {:backgroundColor bgc}]
    (dom/li #js {:style st} text)))
