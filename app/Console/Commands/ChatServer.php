<?php

namespace App\Console\Commands;

use App\WS\Chat;
use Illuminate\Console\Command;
use Ratchet\Http\HttpServer;
use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;

class ChatServer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'chat:run';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'run chat web socket server';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Server started!');

        $server = IoServer::factory(new HttpServer(new WsServer(new Chat())), 8888);
        $server->run();
    }
}
