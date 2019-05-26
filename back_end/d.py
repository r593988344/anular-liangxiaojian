
import struct


from ctypes import *

import time

def double_to_hex(f):
    return hex(struct.unpack('<I', struct.pack('<d', f))[0])

def float_to_hex(f):
    return hex(struct.unpack('<I', struct.pack('<f', f))[0])

def trans(s):
    return "b'%s'" % ''.join('\\x%.2x' % x for x in s)

'''
b'\xfc\xfc\x01\x00\x01\x00\x00\x64\x42\xd0\x42\x8f\x42\x0f\x1e\xb8\x00\xf1\xf1
    
\x00\x00\x00\x00\x5c\xe9\x6d\xda 时间戳
'''
if __name__ == "__main__":
    x = round(struct.unpack('>f', bytes([0x42,0xcb,0x57,0x0a]))[0],2)
    print(x)
    print(float_to_hex(23.34))
    x = round(struct.unpack('>i', bytes([0x5c,0xe9,0x6d,0xda]))[0],0)
    print((x))
    print(time.localtime(x))

    
    times  =struct.unpack('i', bytes([0x5c,0xe9,0x6d,0xda]))[0] 
    print(times)
    print (time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))