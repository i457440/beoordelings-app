import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PasswordModal from '@/components/password-modal';

type LoginForm = {
  email: string;
  password: string;
  remember: boolean;
};

interface LoginProps {
  status?: string;
  canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
  const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
    email: '',
    password: '',
    remember: false,
  });

  const [showModal, setShowModal] = useState(false);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Linkerhelft (info) */}
      <div className="hidden md:flex w-[55%] flex-col justify-center items-center bg-[#F2B423] text-white p-10">
        <div className="flex justify-center mb-8">
          <img
            src="/images/leftside-image.png"
            alt="Aanbesteding illustratie"
            className="w-full max-w-[350px] h-auto mx-auto"
          />
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Titillium Web, sans-serif' }}>
            Eerlijk. Efficiënt. Overzichtelijk.
          </h1>
          <p className="text-base" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Dit platform helpt je bij het beoordelen van inschrijvingen voor aanbestedingen in het onderwijs.<br />
            Stap voor stap, duidelijk en samen met je team.
          </p>
        </div>
      </div>

      {/* Rechterhelft (login) */}
      <div className="w-full md:w-[45%] flex flex-col justify-center items-center bg-white p-8">
        <div className="w-full flex justify-center mb-8">
          <img src="/images/logo-Contractables.png" alt="Contractables logo" className="h-14" />
        </div>

        <div className="w-full max-w-sm mb-4">
          <h2 className="text-2xl font-bold mb-1" style={{ color: '#F2B423', fontFamily: 'Titillium Web, sans-serif' }}>
            Login
          </h2>
          <p className="text-base" style={{ color: '#28424F', fontFamily: 'Roboto, sans-serif' }}>
            Welkom terug! Vul uw gegevens in
          </p>
        </div>

        <form className="w-full max-w-sm space-y-3" onSubmit={submit}>
          <div>
            <Label htmlFor="email" style={{ color: '#28424F' }}>E-mailadres</Label>
            <Input
              id="email"
              type="email"
              required
              autoFocus
              autoComplete="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              placeholder="email@example.com"
            />
            <InputError message={errors.email} />
          </div>

          <div>
            <Label htmlFor="password" style={{ color: '#28424F' }}>Wachtwoord</Label>
            <Input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              placeholder="Wachtwoord"
            />
            <InputError message={errors.password} />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                id="remember"
                name="remember"
                checked={data.remember}
                className="cursor-pointer"
                onClick={() => setData('remember', !data.remember)}
              />
              <span style={{ color: '#28424F' }}>Herinner mij</span>
            </label>

            {canResetPassword && (
              <button
                type="button"
                onClick={() => setShowModal(true)}
                style={{ color: '#28424F', opacity: 0.5 }}
                className="cursor-pointer underline"
              >
                Wachtwoord vergeten?
              </button>
            )}
          </div>

          <Button
            type="submit"
            className="w-full mt-4 bg-[#F2B423] text-white hover:bg-[#e0a91f] transition cursor-pointer"
            disabled={processing}
          >
            {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
            Log in
          </Button>

          <p className="text-xs text-left" style={{ color: '#28424F', fontFamily: 'Roboto, sans-serif' }}>
            <span className="text-[#2AAFCB] font-semibold">Let op:</span> Je kunt alleen inloggen met een account van [Contractables].
          </p>
        </form>

        {status && (
          <div className="mt-4 text-center text-sm font-medium text-green-600">{status}</div>
        )}

        {showModal && <PasswordModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}
