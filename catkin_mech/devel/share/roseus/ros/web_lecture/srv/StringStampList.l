;; Auto-generated. Do not edit!


(when (boundp 'web_lecture::StringStampList)
  (if (not (find-package "WEB_LECTURE"))
    (make-package "WEB_LECTURE"))
  (shadow 'StringStampList (find-package "WEB_LECTURE")))
(unless (find-package "WEB_LECTURE::STRINGSTAMPLIST")
  (make-package "WEB_LECTURE::STRINGSTAMPLIST"))
(unless (find-package "WEB_LECTURE::STRINGSTAMPLISTREQUEST")
  (make-package "WEB_LECTURE::STRINGSTAMPLISTREQUEST"))
(unless (find-package "WEB_LECTURE::STRINGSTAMPLISTRESPONSE")
  (make-package "WEB_LECTURE::STRINGSTAMPLISTRESPONSE"))

(in-package "ROS")





(defclass web_lecture::StringStampListRequest
  :super ros::object
  :slots ())

(defmethod web_lecture::StringStampListRequest
  (:init
   (&key
    )
   (send-super :init)
   self)
  (:serialization-length
   ()
   (+
    0
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;;
   self)
  )

(defclass web_lecture::StringStampListResponse
  :super ros::object
  :slots (_list ))

(defmethod web_lecture::StringStampListResponse
  (:init
   (&key
    ((:list __list) (let (r) (dotimes (i 0) (push (instance web_lecture::StringStamp :init) r)) r))
    )
   (send-super :init)
   (setq _list __list)
   self)
  (:list
   (&rest __list)
   (if (keywordp (car __list))
       (send* _list __list)
     (progn
       (if __list (setq _list (car __list)))
       _list)))
  (:serialization-length
   ()
   (+
    ;; web_lecture/StringStamp[] _list
    (apply #'+ (send-all _list :serialization-length)) 4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; web_lecture/StringStamp[] _list
     (write-long (length _list) s)
     (dolist (elem _list)
       (send elem :serialize s)
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; web_lecture/StringStamp[] _list
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _list (let (r) (dotimes (i n) (push (instance web_lecture::StringStamp :init) r)) r))
     (dolist (elem- _list)
     (send elem- :deserialize buf ptr-) (incf ptr- (send elem- :serialization-length))
     ))
   ;;
   self)
  )

(defclass web_lecture::StringStampList
  :super ros::object
  :slots ())

(setf (get web_lecture::StringStampList :md5sum-) "2e57eb5ee95c0a584fb520d98705f88b")
(setf (get web_lecture::StringStampList :datatype-) "web_lecture/StringStampList")
(setf (get web_lecture::StringStampList :request) web_lecture::StringStampListRequest)
(setf (get web_lecture::StringStampList :response) web_lecture::StringStampListResponse)

(defmethod web_lecture::StringStampListRequest
  (:response () (instance web_lecture::StringStampListResponse :init)))

(setf (get web_lecture::StringStampListRequest :md5sum-) "2e57eb5ee95c0a584fb520d98705f88b")
(setf (get web_lecture::StringStampListRequest :datatype-) "web_lecture/StringStampListRequest")
(setf (get web_lecture::StringStampListRequest :definition-)
      "---
web_lecture/StringStamp[] list

================================================================================
MSG: web_lecture/StringStamp
time stamp
")

(setf (get web_lecture::StringStampListResponse :md5sum-) "2e57eb5ee95c0a584fb520d98705f88b")
(setf (get web_lecture::StringStampListResponse :datatype-) "web_lecture/StringStampListResponse")
(setf (get web_lecture::StringStampListResponse :definition-)
      "---
web_lecture/StringStamp[] list

================================================================================
MSG: web_lecture/StringStamp
time stamp
")



(provide :web_lecture/StringStampList "2e57eb5ee95c0a584fb520d98705f88b")


