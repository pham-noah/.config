#!/bin/bash
# /* ---- 💫 https://github.com/JaKooLit 💫 ---- */  ##
# Playerctl

music_icon="$HOME/.config/swaync/icons/music.png"

# Play the next track
play_next() {
  playerctl next
  notify-send -e -u low -i $music_icon "Next Song"
}

# Play the previous track
play_previous() {
  playerctl previous
  notify-send -e -u low -i $music_icon "Previous Song"
}

# Toggle play/pause
toggle_play_pause() {
  playerctl play-pause
  toggle_pp_notif
}

# Stop playback
stop_playback() {
  playerctl stop
  notify-send -e -u low -i $music_icon "Stopped"
}

# Notif for Toggle play-pause
toggle_pp_notif() {
  status=$(playerctl status)
  if [[ "$status" == "Playing" ]]; then
    notify-send -e -u low -i $music_icon " Playing"
  elif [[ "$status" == "Paused" ]]; then
    notify-send -e -u low -i $music_icon " Paused"
  fi
}

# Display notification with song information
show_music_notification() {
  status=$(playerctl status)
  if [[ "$status" == "Playing" ]]; then
    song_title=$(playerctl metadata title)
    song_artist=$(playerctl metadata artist)
    notify-send -e -u low -i $music_icon "Now Playing:" "$song_title by $song_artist"
  elif [[ "$status" == "Paused" ]]; then
    notify-send -e -u low -i $music_icon " Playback:" " Paused"
  fi
}

# Get media control action from command line argument
case "$1" in
"--nxt")
  play_next
  ;;
"--prv")
  play_previous
  ;;
"--pause")
  toggle_play_pause
  ;;
"--stop")
  stop_playback
  ;;
*)
  echo "Usage: $0 [--nxt|--prv|--pause|--stop]"
  exit 1
  ;;
esac
