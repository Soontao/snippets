# -*- coding: utf-8 -*-
import inspect
import datetime

# 默认处理
def defaultHandler(func,*args,**kwargs):
    print("function %s has been invoked "%func.__name__)
    result = func(*args,**kwargs)
    return result

# 获取代理
def getProxy(func,handler=defaultHandler):
    def proxy(*args, **kwargs):
        result = handler(func,*args,**kwargs)
        return result
    return proxy


