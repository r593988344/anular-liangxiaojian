
#coding:utf-8

import sqlite3

def GetData(type):
    if type == "sensorList":
        return GetListData()


def GetListData():
    # create db where the workspace root dir is 
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    # c.execute("alter table SensorList add id int not null primary key AUTO_INCREMENT")
    # c.execute("UPDATE SensorList SET CreateTime='2019-05-14 13:21:35'")
    # conn.commit()
    curosr = c.execute("select * from SensorList")  
    data = {
        "sensorList":[
        ]
    }
    for i in curosr:
        data['sensorList'].append(
            {
                "collectorNumber": i[0],
                "sensorNumber": i[1],
                "vibrationThreshold": i[2],
                "cycle": i[3],
                "temperature": i[4],
                "humidity": i[5],
                "longitude": i[6],
                "latitude":  i[7],
                "sectionId": i[8],
                "creatTime":  i[9],
                "status": i[10],
            }
        )
    c.close()
    conn.close()
    return data

def CreateListTable():
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    c.execute(
        "CREATE TABLE SensorList(\
            collectorNumber TEXT not NULL,\
            sensorNumber string TEXT null,\
            vibrationThreshold int,\
            cycle TEXT,\
            temperature TEXT,\
            humidity TEXT,\
            longitude int,\
            latitude int,\
            sectionId TEXT,\
            createTime TEXT, \
            status TEXT\
        )"
    )
    c.close()
    conn.close()

def CreateMessageTable():
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    c.execute(
        "CREATE TABLE Message(\
            phoneNumber TEXT not NULL,\
            messageContent TEXT not null,\
            sendTime TEXT not null,\
            sendStatus TEXT not null,\
            resule TEXT not null\
        )"
    )
    c.close()
    conn.close()

def CreateAlarmTable():
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    c.execute(
        "CREATE TABLE AlarmRecord(\
            alarmTime TEXT not NULL,\
            alarmLevel TEXT not null,\
            sectionId int not null,\
            managerId int not null,\
            sensorId int not null,\
            netId int not null\
        )"
    )
    c.close()
    conn.close()

if __name__ == "__main__":
    CreateAlarmTable()
    CreateMessageTable()
    # print(GetListData())
    # data structure dict -> list -> dict
    # createTable()
