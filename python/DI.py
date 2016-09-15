# -*- coding: utf-8 -*-
import inspect
import datetime

# 这是一个依赖注入的原型

# 上下文
context = {}

# 注入
def inject(func):
    def wrapper(*args, **kwargs):
        # 获取函数的参数名
        argsName=inspect.getargspec(func).args
        # 根据参数名，从context获取实例
        args=map(lambda name,value: context[name] if value is None else value,argsName,func.__defaults__)
        # 获取返回值
        result = func(*args, **kwargs)
        return result
    return wrapper

# 注册对象到上下文容器           
def register(name,value):
    context[name]=value
 
@inject
def welcome(username=None,date=None):
    print ("hello %s,time is %s"%(username,date))
 
# 注册对象到容器
register('date', datetime.datetime.today())
register('username','suntao')

welcome()