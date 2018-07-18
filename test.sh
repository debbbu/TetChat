apt-get --assume-yes install iproute2
perl -i.oldip -nle 'my $localip=$ENV{"REDIS_LOCAL_IPADDR"}; my $l=$_; if (/myself/) {
   $l =~ s/^\w+\s+\K(?:\d+\.){3}(?:\d+):/$localip:/} print $l;
   ' "/data/nodes.conf"
