#!/bin/bash

SSID_NAME=$(iwgetid -r | cut -c -11)
SSID_STRENGHT=$(sudo iwconfig wlp2s0 | grep -E "Quality=" | cut -d "=" -f2 | cut -c -5 )

if [[ "${SSID_NAME}" != "" ]]; then
  echo " ${SSID_STRENGHT}"
else
  echo "NO NETWORK"
fi