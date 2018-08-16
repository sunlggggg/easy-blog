# vim 插件管理
## Vundle 插件管理器
``` 
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/vundle
```
## 配置 Vundle
从vundle的test文件夹中复制 vimrc 到 ~/.vimrc 中 
```
mv ~/.vim/bundle/vundle/test/vimrc ~/.vimrc
```
或者 
粘贴以下的内容到~/.vimrc
```
set nocompatible              " be iMproved, required
filetype off                  " required

" 启用vundle来管理vim插件
set rtp+=~/.vim/bundle/vundle
call vundle#begin()
" 安装插件写在这之后

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" 安装插件写在这之前
call vundle#end()            " required
filetype plugin on    " required

" 常用命令
" :PluginList       - 查看已经安装的插件
" :PluginInstall    - 安装插件
" :PluginUpdate     - 更新插件
" :PluginSearch     - 搜索插件，例如 :PluginSearch xml就能搜到xml相关的插件
" :PluginClean      - 删除插件，把安装插件对应行删除，然后执行这个命令即可

" h: vundle         - 获取帮助

" vundle的配置到此结束，下面是你自己的配置
``` 
这里只保留了 Plugin 'VundleVim/Vundle.vim' 

## 安装插件
```
vim 
```
进入命令模式
```
:PluginInstall
```
## 后续只需要编辑 vimrc 来添加插件
添加 json 插件 
```
...
Plugin 'JSON.vim'
Plugin 'VundleVim/Vundle.vim'
...
```

## 常用插件
Plugin 'scrooloose/nerdtree'
:NERDTree 打开文件树木

