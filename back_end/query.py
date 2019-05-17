
#coding:utf-8

import sqlite3
import time
def GetData(type):
    if type == "sensorList":
        return GetListData()


def GetListData():
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
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



def GetAlarmData():
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    curosr = c.execute("select * from AlarmRecord")  
    data = {
        "AlarmRecord":[
        ]
    }
    for i in curosr:
        data['AlarmRecord'].append(
            {
                "alarmingTIme": i[0],
                "alarmLevel": i[1],
                "sectionId": i[2],
                "manageId": i[3],
                "collectorNumber": i[4],
                "sensorNumber": i[5],
            }
        )
    c.close()
    conn.close()
    return data

def GetMessageData():
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    curosr = c.execute("select * from Message")  
    data = {
        "historyData":[
        ]
    }
    for i in curosr:
        data['historyData'].append(
            {
                "phoneNumber" :i[0],
                "sendMessage" :i[1],
                "sendTime" :i[2],
                "sendStatus" :i[3],
                "result" :i[4],
            }
        )
    c.close()
    conn.close()
    return data


def WriteListToTable(collectorNumber,sensorNumber,vibrationThreshold=0,cycle='',temperature='',humidity='',longitude=0,latitude=0,sectionId='',creatTime='',status=''):
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    project = (collectorNumber,sensorNumber,vibrationThreshold,cycle,temperature,humidity,longitude,latitude,sectionId,creatTime,status)
    c.execute("INSERT INTO SensorList (collectorNumber ,sensorNumber,vibrationThreshold ,cycle ,temperature ,humidity ,longitude ,latitude ,sectionId ,createTime ,status) VALUES (?,?,?,?,?,?,?,?,?,?,?)",project)
    conn.commit()
    c.close()
    conn.close()


def WriteAlarmToTable(alarmTime,alarmLevel,sectionId,manageId,sensorId,netId):
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    project = (alarmTime,alarmLevel,sectionId,manageId,sensorId,netId)
    c.execute("INSERT INTO AlarmRecord (alarmTime,alarmLevel,sectionId,managerId,sensorId,netId) VALUES (?,?,?,?,?,?)",project)
    conn.commit()
    c.close()
    conn.close()


def WriteMessageToTable(phoneNumber,messageContent,sendTime,sendStatus,result):
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    project = (phoneNumber,messageContent,sendTime,sendStatus,result)
    c.execute("INSERT INTO Message (phoneNumber,messageContent,sendTime,sendStatus,result) VALUES (?,?,?,?,?)",project)
    conn.commit()
    c.close()
    conn.close()



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
            result TEXT not null\
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
            sectionId TEXT not null,\
            managerId TEXT not null,\
            sensorId TEXT not null,\
            netId TEXT not null\
        )"
    )
    c.close()
    conn.close()


def LookTable():
    
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    cursor = c.execute("select * from sqlite_master")

    print(next(cursor))
    c.close()
    conn.close()


if __name__ == "__main__": 
    # LookTable()
    # WriteListToTable(collectorNumber='10',sensorNumber='100',creatTime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),status='closed')

    # WriteAlarmToTable(alarmTime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),alarmLevel='5',sectionId='10',manageId='2',sensorId='10',netId="20")
   
    # WriteMessageToTable(phoneNumber='131****2243',messageContent='test',sendTime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),sendStatus='1',result="success")
    print(GetListData())
    print('\n')
    print(GetAlarmData())
    print('\n')
    print(GetMessageData())
    # data structure dict -> list -> dict
    # createTable()
