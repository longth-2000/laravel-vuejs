<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [  
            'username' => 'min:6|alpha_dash',
            'password' => 'min:8|alpha_dash',
        ];
    }
    public function messages()
    {
        return [
            'username.alpha_dash' => 'Tên đăng nhập chỉ bao gồm chữ, số, dấu -, _ ',
            'password.alpha_dash' => 'Mật khẩu chỉ bao gồm chữ, số, -, _',
            'username.min' => 'Tên đăng nhập phải có ít nhất 6 kí tự',
            'password.min' => 'Mật khẩu phải có ít nhất 8 kí tự',
        ];
    }
}
