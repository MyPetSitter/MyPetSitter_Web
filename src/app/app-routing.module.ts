import { ServicosDeleteAllComponent } from './components/views/servicos-delete-all/servicos-delete-all/servicos-delete-all.component';
import { ServicoUpdateAllComponent } from './components/views/servico-update-all/servico-update-all/servico-update-all.component';
import { ServicoCreateAllComponent } from './components/views/servico-create-all/servico-create-all/servico-create-all.component';
import { UsuariosReadAllComponent } from './components/views/usuarios-read-all/usuarios-read-all/usuarios-read-all.component';
import { ServicosReadAllComponent } from './components/views/servicos-read-all/servicos-read-all/servicos-read-all.component';
import { SolicitacaoservicoCreateComponent } from './components/views/solicitacaoservico-create/solicitacaoservico-create/solicitacaoservico-create.component';
import { DetalhesSolicitacaoservicoComponent } from './components/views/detalhes-solicitacaoservico/detalhes-solicitacaoservico/detalhes-solicitacaoservico.component';
import { BuscarServicopetsitterComponent } from './components/views/buscar-servicopetsitter/buscar-servicopetsitter/buscar-servicopetsitter.component';
import { PerfilClienteComponent } from './components/views/perfil-cliente/perfil-cliente/perfil-cliente.component';
import { DeleteServicopetsitterComponent } from './components/views/delete-servicopetsitter/delete-servicopetsitter/delete-servicopetsitter.component';
import { UpdateServicopetsitterComponent } from './components/views/update-servicopetsitter/update-servicopetsitter/update-servicopetsitter.component';
import { ServicopetsitterCreateComponent } from './components/views/servicopetsitter-create/servicopetsitter-create/servicopetsitter-create.component';
import { ServicosdisponiveisComponent } from './components/views/servicosdisponiveis/servicosdisponiveis/servicosdisponiveis.component';
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
import { SobrenosComponent } from './components/views/sobrenos/sobrenos/sobrenos.component';
import { ComoCriarUmaContaComponent } from './components/views/como-criar-uma-conta/como-criar-uma-conta.component';
import { RecuperarContaComponent } from './components/views/recuperar-conta/recuperar-conta/recuperar-conta.component';
import { AdmPerfilComponent } from './components/views/adm-perfil/adm-perfil/adm-perfil.component';
import { EntrarAdmComponent } from './components/views/entrar-adm/entrar-adm/entrar-adm.component';
import { ServicosCreateAllComponent } from './components/views/servicos-create-all/servicos-create-all/servicos-create-all.component';


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
    path: 'servicosdisponiveis/:id',
    component: ServicosdisponiveisComponent
  },
  {
    path: `servicosdisponiveis/:id/servicos/:id_servico/incluir`,
    component: ServicopetsitterCreateComponent
  },
  {
    path: 'servicopetsitter/:id/servico/:id_servicoPetSitter/update',
    component: UpdateServicopetsitterComponent
  },
  {
    path: 'servicopetsitter/:id/servico/:id_servicoPetSitter/delete',
    component: DeleteServicopetsitterComponent
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
  {
    path: 'adm',
    component: AdmPerfilComponent
  },
  {
    path: 'cliente',
    component: PerfilClienteComponent
  },
  {
    path: 'servicos/:id/cidade/:city/busca',
    component: BuscarServicopetsitterComponent
  },
  {
    path: 'solicitacaodetails/:id_petsitter/servico/:id_servico/periodo',
    component: DetalhesSolicitacaoservicoComponent
  },
  {
    path:'solicitacao/:id/servico/:id_servico/preco/:p/datainicio/:data_inicio/datafim/:data_fim/petsitter/:id_petsitter/create',
    component: SolicitacaoservicoCreateComponent
  },
  {
    path: 'auth',
    component: EntrarAdmComponent
  },
  {
    path: 'servicos/all',
    component: ServicosReadAllComponent
  },
  {
    path: 'usuarios/all',
    component: UsuariosReadAllComponent
  },
  {
    path: 'novoServico',
    component: ServicosCreateAllComponent
  },
  {
    path: 'servico/:id/update',
    component: ServicoUpdateAllComponent
  },
  {
    path: 'servico/:id/delete',
    component: ServicosDeleteAllComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }