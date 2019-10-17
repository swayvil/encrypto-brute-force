#!/bin/bash

x=1
while [ $x -le 10 ]
do
  automator findPwd-run.workflow 
  x=$(( $x + 1 ))
done
