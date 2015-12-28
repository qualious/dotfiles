function fish_prompt
	and set retc red; or set retc magenta
    tty|grep -q tty; and set tty tty; or set tty pts

    set_color $retc
    if [ $tty = tty ]
        echo -n .-
    else
        echo -n '┌─'
    end
    set_color -o white
    echo -n [
    if test $USER = root -o $USER = toor
        set_color -o white
    else
        set_color -o white
    end
    echo -n $USER
    if [ -z "$SSH_CLIENT" ]
        set_color -o blue
    else
        set_color -o red
    end
    set_color -o blue
    #echo -n     (prompt_pwd)
    echo -n \ (pwd|sed "s=$HOME=~=")
    set_color -o blue
    echo -n ']'
    set_color normal
    set_color $retc
    if [ $tty = tty ]
        echo -n '-'
    else
    end
    
    
    echo
    set_color normal
    for job in (jobs)
        set_color $retc
        if [ $tty = tty ]
            echo -n '; '
        else
            echo -n '│ '
        end
        set_color brown
        echo $job
    end
    set_color normal
    set_color $retc
    if [ $tty = tty ]
        echo -n "'->"
    else
        echo -n '└─▪ '
    end
    set_color normal
end
