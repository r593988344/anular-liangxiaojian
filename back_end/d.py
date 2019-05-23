
import struct


from ctypes import *




def float_to_hex(f):
    return hex(struct.unpack('<I', struct.pack('<f', f))[0])

def trans(s):
    return "b'%s'" % ''.join('\\x%.2x' % x for x in s)

'''
b'\xfc\xfc\x01\x00\x01\x00\x00\x64\x42\xd0\x42\x8f\x42\x0f\x1e\xb8\x00\xf1\xf1
'''
if __name__ == "__main__":
    x = round(struct.unpack('f', bytes(reversed([0x42,0xcb,0x57,0x0a])))[0],2)
    print(x)
    print(type(trans(b'x\23')))

