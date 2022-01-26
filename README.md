# webton
メカエン用に作成

LAN内のwebサイトから遠隔操作するためのもの

sensor_msgs/Joyでキーボードの押された処理を送る

rowwwを使用

http://wiki.ros.org/roswww

ROSパッケージのインストール(melodicの場合)
```
sudo apt-get install ros-melodic-roswww
```

# 起動
カメラ
```
roslaunch web_lecture camera_stream.launch
```

web
```
roslaunch web_lecture bridge.launch
```
起動するhtml
```
http://localhost:8085/web_lecture/Webtoon_1.html
```

# 参考
roswww部分 https://qiita.com/srs/items/f01f1a6732f49163a772


gamepad部分ここのソースコードを書き換えた気がする https://qiita.com/srs/items/ab2261cfd20ba661ef3a
