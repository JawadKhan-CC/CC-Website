import { Component } from '@angular/core';
import { BlockComponent } from "../common/block/block.component"; import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
;

@Component({
  selector: 'app-technology',
  imports: [BlockComponent, CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  data: any = [
    {
      title: 'Development',
      items: [
        {
          name: "Java",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968231.png",
          content: ``
        },
        {
          name: "Node",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
          content: ""
        },
        {
          name: "Angular",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/16511/16511234.png",
          content: ""
        },
        {
          name: "Vue",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/16511/16511176.png",
          content: ""
        },
        {
          name: "Python",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968544.png",
          content: ""
        },
        {
          name: "Aws",
          imageUrl: "data:image/png;base64,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",
          content: ""
        },
        {
          name: "Zscaler",
          imageUrl: "data:image/png;base64,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",
          content: ""
        },
        {
          name: "SalesForce",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968936.png",
          content: ""
        },
        {
          name: "Flutter",
          imageUrl: "https://img.icons8.com/?size=256&id=7I3BjCqe9rjG&format=png",
          content: ""
        },
      ]
    },
    {
      title: 'Microsoft 365',
      items: [
        {
          name: "DLP",
          imageUrl: "https://static.wixstatic.com/media/c997f4_1e966bbee09941ea8c2f36d710d1165c~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DLP.png",
          content: "Preventing Data Breaches with Advanced Data Loss Prevention",
        },
        {
          name: "ATP",
          imageUrl: "https://static.wixstatic.com/media/c997f4_e2b5098f0c694a6cb4de016ece8073ce~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/defender%202.png",
          content: "Advanced Threat Protection (ATP) ",
        },
        {
          name: "MIP",
          imageUrl: "https://static.wixstatic.com/media/c997f4_86d70025178e45718d2c543e62c3c87f~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/casby.png",
          content: "Advanced Solutions for Protecting and Managing Sensitive Information",
        },
        {
          name: "PIM",
          imageUrl: "https://static.wixstatic.com/media/c997f4_4f9d515feffc45ec9da9da42aaf8979e~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PIM.png",
          content: "Managing Privileged Access Effectively and Securely",
        },
        {
          name: "Casby",
          imageUrl: "https://static.wixstatic.com/media/c997f4_86d70025178e45718d2c543e62c3c87f~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/casby.png",
          content: "Revolutionize Your Cloud App Security Landscape",
        },
        {
          name: "Intune",
          imageUrl: "https://static.wixstatic.com/media/c997f4_a58a1c43fccd479e992eb4a565cacc24~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/purview.png",
          content: "Unifying Device Management and Security in One Platform",
        },
        {
          name: "Copilot",
          imageUrl: "https://static.wixstatic.com/media/c997f4_1fd8b85248da4f8b8103bc985d7028b0~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/copilot.png",
          content: "Harness AI to Drive Efficiency and Innovation",
        },
        {
          name: "Purview",
          imageUrl: "https://static.wixstatic.com/media/c997f4_a58a1c43fccd479e992eb4a565cacc24~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/purview.png",
          content: "Comprehensive Data Management and Compliance Solutions",
        },
        {
          name: "Azure AD",
          imageUrl: "https://static.wixstatic.com/media/c997f4_8515552d220d4899a30d7fcf221c8f4b~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/azure%20synapse.png",
          content: "Secure and Simplify Access with Advanced Identity Solutions",
        },
        {
          name: "Cloud Security",
          imageUrl: "https://static.wixstatic.com/media/c997f4_c61520ad0fff477ab5381bc9c26054b9~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cloud%20app%20security.png",
          content: "Securing Your Cloud Applications and Services",
        },
        {
          name: "Compliance Manager",
          imageUrl: "https://static.wixstatic.com/media/c997f4_de6e0ac4840349349d32be650928c698~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/compliance%20manager.png",
          content: "Efficiently Manage Your Compliance Posture",
        },
      ]
    },
    {
      title: 'Cyber Security & SOC',
      items: [
        {
          name: "SOC Advisory",
          imageUrl: "https://static.wixstatic.com/media/c997f4_1d1b10079be04b66924c2ec2ba556909~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sentinel.png",
          content: "Deploy, optimize, and innovate with our white-label Azure Synapse solutions.",
        },
        {
          name: "Threat Detection",
          imageUrl: "https://static.wixstatic.com/media/c997f4_f20ff87fda1b4d5b9aad0b3d11d96ba5~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/247%20support.png",
          content: "Offer your clients round-the-clock support services under your brand name.",
        },
        {
          name: "Threat and Vulnerability",
          imageUrl: "https://static.wixstatic.com/media/c997f4_e5a38c012365425e9494a2623d41fb61~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/network%20security.png",
          content: "Deliver robust network security solutions, white-labeled for your business needs.",
        },
        {
          name: "Advance Incident Response",
          imageUrl: "https://static.wixstatic.com/media/c997f4_9382c13ae6b244bdbf5e7f7286e09c38~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/defender%201.png",
          content: "Offer advanced identity protection services under your brand to enhance client security",
        },
        {
          name: "Threat Intelligence",
          imageUrl: "https://static.wixstatic.com/media/c997f4_e2b5098f0c694a6cb4de016ece8073ce~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/defender%202.png",
          content: "Deliver top-tier endpoint security solutions, customized and branded for your client's needs.",
        },
      ]
    },
  ];

}
