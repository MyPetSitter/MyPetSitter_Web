import { DadosPetsitterComponent } from './components/views/dados-petsitter/dados-petsitter/dados-petsitter.component';
import { ServicoPetsitterComponent } from './components/views/servico-petsitter/servico-petsitter/servico-petsitter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoFuncionaComponent } from './components/views/como-funciona/como-funciona.component';
import { CriarContaComponent } from './components/views/criar-conta/criar-conta.component';
import { EntrarComponent } from './components/views/entrar/entrar/entrar.component';
import { HomeComponent } from './components/views/home/home.component';
import { PetsitterPerfilComponent } from './components/views/petsitter-perfil/petsitter-perfil.component';
import { QueroSerPetsitterComponent } from './components/views/quero-ser-petsitter/quero-ser-petsitter.component';
import { SobrenosComponent } from './components/views/sobrenos/sobrenos.component';
import { ComoCriarUmaContaComponent } from './components/views/como-criar-uma-conta/como-criar-uma-conta.component';
import { RecuperarContaComponent } from './components/views/recuperar-conta/recuperar-conta.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'entrar',
    component: EntrarComponent
  },
  {
    path: 'criarconta',
    component: CriarContaComponent
  },
  {
    path: 'comofunciona',
    component: ComoFuncionaComponent
  },
  {
    path: 'queroserpetsitter',
    component: QueroSerPetsitterComponent
  },
  {
    path: 'dashboard',
    component: PetsitterPerfilComponent
  },
  {
    path: 'meusservicos',
    component: ServicoPetsitterComponent
  },
  {
    path: 'meusdados',
    component: DadosPetsitterComponent
  },
  {
    path: 'sobrenos',
    component: SobrenosComponent
  },
  {
    path: 'comocriarumaconta',
    component: ComoCriarUmaContaComponent
  },
  {
    path: 'recuperarconta',
    component: RecuperarContaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }