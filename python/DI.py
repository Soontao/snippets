# -*- coding: utf-8 -*-
import inspect
import datetime

# 这是一个依赖注入的原型

# 上下文
context = {}

# 注入
def inject(func):
    def wrapper(*args, **kwargs):
        argsName=inspect.getargspec(func).args
        args=map(lambda name,value: context[name] if value==None else value,argsName,args);
        result = func(*args, **kwargs)
        return result
    return wrapper

# 注册对象到上下文容器
def register(name,value):
    context[name]=value;
 
@inject
def welcome(username,date):
    print "hello %s,time is %s"%(username,date)
 
# 注册对象
register('date', datetime.datetime.today())
register('username','suntao')

welcome(None,None)