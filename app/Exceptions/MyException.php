<?php

namespace App\Exceptions;

use Exception;

class MyException extends Exception
{
    public function report()
    {
       
    }

    public function render($request)
    {
        return "This user isn't existed";
    }
}
