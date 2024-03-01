// Login.tsx

import React from 'react';

const Login: React.FC = () => {
      
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 className="mt-10 text-center text-6xl font-bold leading-9 tracking-tight text-blue-800">
          สุขาภิบาล
        </h1>
        <p className="mt-5 mb-5 text-center text-sm text-gray-600">
          ระบบติดตามผลการอบรม
        </p>
        </div>
      <div className="bg-white p-8 rounded-md shadow-lg flex w-full max-w-screen-md">
        {/* EkoApp Login */}
        <div className="w-1/2 pr-4">
          
          {/* Login with Google/GitHub */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">เข้าสู่ระบบด้วย EkoApp</h3>
            <button
              className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 py-2 px-4 rounded w-full"
              onClick={() => console.log('Login with EkoApp')}
            >
              เข้าสู่ระบบด้วย EkoApp
            </button>
            <button
              className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 py-2 px-4 rounded w-full mt-2"
              onClick={() => console.log('Login with GitHub')}
            >
              เข้าสู่ระบบด้วย GitHub
            </button>
            <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-r border-gray-300 mx-4"></div>

        {/* Username/Password Login */}
        <div className="w-1/2 pl-4">
          <h3 className="text-lg font-semibold mb-2">เข้าสู่ระบบด้วย Username/Password</h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="border rounded w-full py-2 px-3"
                placeholder="Password"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
              onClick={() => console.log('Login with Username/Password')}
            >
              เข้าสู่ระบบ
            </button>
          </form>
          <div className="mt-2 text-right">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => console.log('Forgot Password')}
            >
              ลืมรหัสผ่าน?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
