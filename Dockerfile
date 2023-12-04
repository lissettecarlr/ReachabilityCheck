# 使用一个基础的nginx镜像作为基础
FROM nginx:latest

# 将静态页面复制到nginx的默认网站目录
COPY ./src /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动nginx服务
CMD ["nginx", "-g", "daemon off;"]
