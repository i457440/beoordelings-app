import { Head, useForm, Link } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('register'));
  };

  return (
    <div className="flex min-h-screen">
      {/* Linkerkant: illustratie of branding */}
      {/* Linkerhelft (info) */}
      <div className="hidden md:flex w-[55%] flex-col items-stretch bg-[#F2B423] text-white">
            <img
                src="/images/leftside-boot.png"
                alt="Aanbesteding illustratie"
                className="w-full h-auto object-fill"
            />
     </div>

      {/* Rechterkant: formulier */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <Head title="Register" />

        {/* Logo bovenaan */}
        <div className="mb-8 text-center">
          <img
            src="/images/logo-Contractables.png"
            alt="Contractables logo"
            className="h-12 mx-auto"
          />
        </div>

        {/* Formuliertitel */}
        <div className="w-full max-w-sm mb-4 text-left">
          <h2
            className="text-2xl font-bold"
            style={{ color: '#F2B423', fontFamily: 'Titillium Web' }}
          >
            Registreren
          </h2>
          <p
            className="text-base"
            style={{ color: '#28424F', fontFamily: 'Roboto' }}
          >
            Vul de gegevens van de beoordelaar in om een account aan te maken
          </p>
        </div>

        {/* Formulier */}
        <form onSubmit={submit} className="w-full max-w-sm space-y-3">
          <div>
            <Label htmlFor="name" className="text-[#28424F]">Naam</Label>
            <Input
              id="name"
              type="text"
              required
              autoComplete="name"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
            />
            <InputError message={errors.name} />
          </div>

          <div>
            <Label htmlFor="email" className="text-[#28424F]">E-mailadres</Label>
            <Input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
            />
            <InputError message={errors.email} />
          </div>

          <div>
            <Label htmlFor="password" className="text-[#28424F]">Wachtwoord</Label>
            <Input
              id="password"
              type="password"
              required
              autoComplete="new-password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
            />
            <InputError message={errors.password} />
          </div>

          <div>
            <Label htmlFor="password_confirmation" className="text-[#28424F]">Bevestig wachtwoord</Label>
            <Input
              id="password_confirmation"
              type="password"
              required
              autoComplete="new-password"
              value={data.password_confirmation}
              onChange={(e) => setData('password_confirmation', e.target.value)}
            />
            <InputError message={errors.password_confirmation} />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#F2B423] text-white hover:bg-[#e0a91f] transition"
            disabled={processing}
          >
            {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
            Registreren
          </Button>
        </form>
      </div>
    </div>
  );
}
