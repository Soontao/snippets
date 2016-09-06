# -*- coding: utf-8 -*-

import aop
import datetime


def printDate(time):
    print(time)

def add(num1,num2):
    return num1+num2

def log(func,*args,**kwargs):
    funcreturn = func(*args,**kwargs)
    print("func %s be invoke"%func.func_name)
    print 'param is ',args 
    return funcreturn;

# 注册log advice到所有方法
aop.registeAdvice('',log);

# 获取代理并调用printdate方法
aop.getProxy(printDate)(datetime.datetime.today())

# 获取代理并调用add方法
print aop.getProxy(add)(1,3)