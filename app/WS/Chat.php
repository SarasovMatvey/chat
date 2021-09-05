<?php

namespace App\WS;

use Ratchet\MessageComponentInterface;
use SplObjectStorage;

class Chat implements MessageComponentInterface
{
    protected SplObjectStorage $clients;

    public function __construct()
    {
        $this->clients = new SplObjectStorage();
    }

    public function onOpen($conn)
    {
        echo 'open' . PHP_EOL;

        $this->clients->attach($conn);
    }

    public function onClose($conn)
    {
        echo 'close' . PHP_EOL;

        $this->clients->detach($conn);
    }

    public function onMessage($conn, $msg)
    {
        echo $msg . PHP_EOL;

        foreach ($this->clients as $client) {
            $resp = [
                'text' => $msg,
                'type' => $client === $conn ? 'sent' : 'received'
            ];
            $client->send(json_encode($resp));
        }
    }

    public function onError($conn, $err)
    {
    }
}
