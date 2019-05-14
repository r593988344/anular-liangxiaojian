
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

def createTable():
    conn = sqlite3.connect('./db.sqlite3')
    c = conn.cursor()
    c.execute(
        "CREATE TABLE SensorList(\
            collectorNumber varchar(200) not NULL,\
            sensorNumber string varchar(200) null,\
            vibrationThreshold int,\
            cycle varchar(200),\
            temperature varchar(200),\
            humidity varchar(200),\
            longitude int,\
            latitude int,\
            sectionId varchar(200),\
            createTime varchar(200), \
            status varchar(200)\
        )"
    )
    c.close()
    conn.close()


if __name__ == "__main__":

    print(GetListData())
    # data structure dict -> list -> dict
    # createTable()
