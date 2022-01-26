;; Auto-generated. Do not edit!


(when (boundp 'web_lecture::StringStamp)
  (if (not (find-package "WEB_LECTURE"))
    (make-package "WEB_LECTURE"))
  (shadow 'StringStamp (find-package "WEB_LECTURE")))
(unless (find-package "WEB_LECTURE::STRINGSTAMP")
  (make-package "WEB_LECTURE::STRINGSTAMP"))

(in-package "ROS")
;;//! \htmlinclude StringStamp.msg.html


(defclass web_lecture::StringStamp
  :super ros::object
  :slots (_stamp _data ))

(defmethod web_lecture::StringStamp
  (:init
   (&key
    ((:stamp __stamp) (instance ros::time :init))
    ((:data __data) "")
    )
   (send-super :init)
   (setq _stamp __stamp)
   (setq _data (string __data))
   self)
  (:stamp
   (&optional __stamp)
   (if __stamp (setq _stamp __stamp)) _stamp)
  (:data
   (&optional __data)
   (if __data (setq _data __data)) _data)
  (:serialization-length
   ()
   (+
    ;; time _stamp
    8
    ;; string _data
    4 (length _data)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; time _stamp
       (write-long (send _stamp :sec) s) (write-long (send _stamp :nsec) s)
     ;; string _data
       (write-long (length _data) s) (princ _data s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; time _stamp
     (send _stamp :sec (sys::peek buf ptr- :integer)) (incf ptr- 4)  (send _stamp :nsec (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; string _data
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _data (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;;
   self)
  )

(setf (get web_lecture::StringStamp :md5sum-) "37670eed6af64f24a40b9b9fc1cb861e")
(setf (get web_lecture::StringStamp :datatype-) "web_lecture/StringStamp")
(setf (get web_lecture::StringStamp :definition-)
      "time stamp
string data
")



(provide :web_lecture/StringStamp "37670eed6af64f24a40b9b9fc1cb861e")


