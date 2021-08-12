<?php
  
namespace App\Http\Middleware;
  
use Closure;
use Illuminate\Support\Facades\Auth;
use Session;
  
class AutoLogout
{
    protected $timeout = 150000; //15 minutes
    public function __construct()
    {
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!Session::has('lastActivityTime')) {
            Session::put('lastActivityTime', time());
        } else if (time() - Session::get('lastActivityTime') > $this->timeout) {
            Session::forget('lastActivityTime');
            Auth::logout();
        }
        Session::put('lastActivityTime', time());//f5 browser
        return $next($request);
    }
}