function compile
    ~/Scripts/gccfilter -c -a -p -w -n -cf white -cnm magenta -cnk magenta -cc black   g++ -Weffc++ -Wall -std=c++11 -o "$argv" | egrep "error|^"
end
