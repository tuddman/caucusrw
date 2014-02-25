(ns caucusrw.models.db
  (:use korma.core
        [korma.db]))


(defdb mysql-db-korma (mysql {:db "caucus_test"
                              :user "caucus"
                              :password "caucuspw"}))
;; defentities

(defentity assignments)
(defentity conf_has_items)
(defentity confhidden)
(defentity configuration)
(defentity conforder)
(defentity confs)
(defentity events)
(defentity grade_scores)
(defentity grade_tasks)
(defentity grouprules)
(defentity groups)
(defentity items)
(defentity name_cascade)
(defentity nums)
(defentity quiz)
(defentity quizanswers)
(defentity quizmap)
(defentity quizproblems)
(defentity quizscore)
(defentity resps)
(defentity resps_seen)
(defentity site_data)
(defentity task_cats)
(defentity task_links)
(defentity tasks)
(defentity user_columns)
(defentity user_data)
(defentity user_iface)
(defentity user_in_conf)
(defentity user_info)


;; SELECTORS

(select user_info)


(defn get-user [userid]
  (first (select user_info
                 (where {:userid userid})
                 (limit 1))))

#_(get-user "studd")


;; CREATE

(defn create-user [user]
  (insert user_info
          (values user)))
