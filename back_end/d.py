
import struct


from ctypes import *




def float_to_hex(f):
    return hex(struct.unpack('<I', struct.pack('<f', f))[0])


if __name__ == "__main__":
    x = round(struct.unpack('f', bytes(reversed([0x42,0xcb,0x57,0x0a])))[0],2)
    print(x)
    print(float_to_hex(101.67))

