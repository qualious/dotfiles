source ~/.ioup_token

set -g -x LC_ALL en_US.utf8
set -g -x LC_LANG en_US.utf8
set -g -x LANG en_US.utf8
echo -e -n "\x1b[\x35 q" # changes to blinking bar
set fish_greeting
alias c++ "~/Scripts/gccfilter -c -a -cf white -cnm magenta -cnk magenta g++ -Weffc++ -Wall -std=c++11 -o"
alias fetch "Scripts/fetch.sh --gap -10 --info_color 15 --title qual --title_color 1 --subtitle_color 1 --crop_mode fill --line_wrap off --font_width 6"
alias pacman "sudo pacman"
alias matrix "cmatrix -b -C cyan"
alias f "find ~ -type f -name"
eval (thefuck --alias | tr '\n' ';')
alias lsa "ls -a"
alias yaourtup "yaourt -Syu --aur"
alias pacman "sudo pacman"
alias telegram "cd ~/Downloads/Telegram/ COMMAND ./Telegram COMMAND ...."
alias ys "yaourt -S"
alias dm "sudo gparted"
alias st "sudo thunar"
alias .. "cd .."
alias ... "cd ../.."
alias .... "cd ../../.."
alias h "history"
alias c "clear"
alias pipes "~/Dotfiles/Scripts/pipes.sh -p 5 -f 60 -R -r 0 -t 2"
alias q "exit"
alias yolo "yaourt --noconfirm -Syuu --aur COMMAND; yaourt -Qmc"
alias merge "xrdb -merge ~/.Xresources"
alias color3 "~/Scripts/color.sh"
alias inf "~/Scripts/screenfetch -t COMMAND; ~/Scripts/color4"
alias screenlol "screenfetch -t | lolcat"
alias color2 "~/Scripts/color2.sh"
alias color "~/Scripts/color3.sh"
alias ud "~/Scripts/dropbox.sh"
alias livestreamer "~/livestreamer-twitch-gui/livestreamer-twitch-gui"
alias up "~/Scripts/teknik.sh"
alias unlock "sudo rm /var/lib/pacman/db.lck"
alias host "subl3 /etc/hosts COMMAND; firefox http://www.hcidata.info/host2ip.cgi"
alias pacupg "sudo pacman -Syu"		# Synchronize with repositories and then upgrade packages that are out of date on the local system.
alias pacdl "pacman -Sw"		# Download specified package(s) as .tar.xz ball
alias pacin "sudo pacman -S"		# Install specific package(s) from the repositories
alias pacins "sudo pacman -U"		# Install specific package not from the repositories but from a file
alias pacre "sudo pacman -R"		# Remove the specified package(s), retaining its configuration(s) and required dependencies
alias pacrem "sudo pacman -Rns"		# Remove the specified package(s), its configuration(s) and unneeded dependencies
alias pacrep "pacman -Si"		# Display information about a given package in the repositories
alias pacreps "pacman -Ss"		# Search for package(s) in the repositories
alias pacloc "pacman -Qi"		# Display information about a given package in the local database
alias pacqen "pacman -Qen"		# Display explicitly installed packages available in the official repositories
alias paclocs "pacman -Qs"		# Search for package(s) in the local database
alias paclo "pacman -Qdt"		# List all packages which are orphaned
alias burnorphans "pacman -Rsn (pacman -Qqdt)" #remove orphans that installed as dep.
alias pacc "sudo pacman -Scc"		# Clean cache - delete all the package files in the cache
alias paclf "pacman -Ql"		# List all files installed by a given package
alias pacown "pacman -Qo"		# Show package(s) owning the specified file(s)
alias pacexpl "pacman -D --asexp"	# Mark one or more installed packages as explicitly installed
alias pacimpl "pacman -D --asdep"	# Mark one or more installed packages as non explicitly installed

# Additional pacman alias examples
alias pacupd "sudo pacman -Sy COMMAND; sudo abs"         # Update and refresh the local package and ABS databases against repositories
alias pacinsd "sudo pacman -S --asdeps"            # Install given package(s) as dependencies
