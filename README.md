
![image](https://github.com/evervault/evervault-starter-kit/assets/43811706/b48b10bf-a1c6-41f2-aecf-b94693002ac2)

# Evervault + Next.js Starter Kit

## Overview

[Evervault](https://evervault.com/) is an encryption and data security platform for developers. Using Evervault allows you to keep sensitive data encrypted at all times, without compromising your ability to use that data. 

This repository is a Next.js template that can be deployed with Vercel. During the deployment process, you’ll be asked to install Vercel’s Evervault integration, which will create the following Evervault products and inject them into the project as environment variables. Each page of the deployed app explores a different Evervault product to help you get up to speed with the platform.

## What’s included

| Product | Description | Sandbox |
| --- | --- | --- |
| Evervault SDK | Language-specific tools for performing encryption operations and workflows from your code.  | We’ll use the Evervault React SDK to encrypt some sensitive data in the browser.  |
| Inbound Relay | An encryption proxy which automatically intercepts and encrypts selected sensitive fields before they touch your server. | The template includes an Inbound Relay to automatically encrypt some sensitive data between the browser and a Next.js Route Handler.  |
| Outbound Relay | A decryption proxy that allows you to share Evervault-encrypted data from your server to third-party APIs. | We’ll send some encrypted data from a Next.js Route Handler to a third-party weather API. |
| Functions | Secure serverless functions that allow you to run workflows, logic and processing on encrypted data. | We’ll run some logic on encrypted data within an Evervault Function to determine your distance to New York. |
| Inputs | Embeddable forms which minimise your compliance burden by allowing you to collect and encrypt cardholder data. | We’ll collect and encrypt sample cardholder data using the Evervault Inputs iframe.  |

To get started, [deploy the Evervault template on Vercel](https://vercel.com/templates).
