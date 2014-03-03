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



;; ************
;; SELECTORS


(select assignments)
(select conf_has_items)
(select confhidden)
(select configuration)
(select conforder)
(select confs)
(select events)
(select grade_scores)
(select grade_tasks)
(select grouprules)
(select groups)
(select items)
(select name_cascade)
(select nums)
(select quiz)
(select quizanswers)
(select quizmap)
(select quizproblems)
(select quizscore)
(select resps)
(select resps_seen)
(select site_data)
(select task_cats)
(select task_links)
(select tasks)
(select user_columns)
(select user_data)
(select user_iface)
(select user_in_conf)
(select user_info)


;; SELECT USERS

(select user_info
  (fields :userid :lname :fname))
;; executes: SELECT users.usersname, users.id FROM user_info





;; ************
;; Retreival

(defn get-user [userid]
  (first (select user_info
                 (where {:userid userid})
                 (limit 1))))



;; CREATE

(defn create-user [user]
  (insert user_info
          (values user)))
