(defproject caucusrw "0.1.0-SNAPSHOT"
  :description "Caucus is an open-source, web-based eLearning and discussion platform."
  :url "http://caucus.com/"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [org.clojure/tools.reader "0.8.2"]
                 [compojure "1.1.6"]
                 [korma "0.3.0-RC6"]
                 [mysql/mysql-connector-java "5.1.25"]
                 [ring/ring-core "1.2.1"]
                 [ring/ring-json "0.2.0"]
                 [cljs-http "0.1.2"]
                 [om "0.5.0"]
                 [com.facebook/react "0.8.0.1"]]


  :plugins [[lein-cljsbuild "1.0.2"]
            [lein-ring "0.8.10"]
            [lein-pdo "0.1.1"]]

  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}

  :min-lein-version "2.0.0"
  :uberjar-name "caucusrw-standalone.jar"

  :ring {:handler caucusrw.handler/app
         :init caucusrw.handler/init}

  :source-paths ["src/clj"]

  :hooks [leiningen.cljsbuild]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/caucusrw.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/caucusrw.js"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})



