# -*- coding: utf-8 -*-
import inspect
import datetime
import proxy

advices = {};

# AOP代理 查找advice 并执行
def aopHandler(func,*args,**kwargs):
    result=None;
    for pattern in advices:
        if str.startswith(func.func_name,pattern):
            # 调用advice
            result = advices[pattern](func,*args,**kwargs)
    return result;

# 获取AOP代理
def getProxy(func):
    return proxy.getProxy(func,aopHandler)

# 注册advice
def registeAdvice(pattern,advice):
    advices[pattern] = advice;