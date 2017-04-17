#!/bin/bash
## Remember to run as root!
bdaddr -i hci0 $1
hciconfig hci0 reset
