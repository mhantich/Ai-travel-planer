'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';



export default function Login() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get('email'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      photo: formData.get('photo'),
    };
    console.log(data)

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const result = await response.json();
      console.log(result)
      login(result);
    //   router.push('/dashboard');
      toast.success('Registration successful!');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div style={{
     'backgroundImage':'url(https://i.pinimg.com/originals/a0/ea/4c/a0ea4ce1b166c0a6a7cac0d785e35868.gif)',
     'backgroundRepeat':'no-repeat',
     'backgroundSize':'cover'
    }} className="min-h-screen flex items-center relative justify-center bg-gray-50">
      <div className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black/50'></div>
      <Card className="w-full relative max-w-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login to Account</h1>
        <form onSubmit={onSubmit} className="space-y-4">
    
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
            />
          </div>
      
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'login to account...' : 'Login'}
          </Button>
        </form>
      </Card>
    </div>
  );
}