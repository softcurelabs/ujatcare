<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PDFSignController extends Controller
{
    public function index()
    {
        return redirect()->away("https://secure.echosign.com/public/oauth/v2?redirect_uri=https://softcuretechlab.com/callback&response_type=code&client_id=CBJCHBCAABAAIl2MbMVVpoVhw2s_ixXLP2RmtfMHH5T5&state=NH7peiZ9io8yrXRyIfwfA6kQfa-31fD2&scope=user_read:account+user_write:account+user_login:account+agreement_read:account+agreement_write:account+agreement_send:account+widget_read:account+widget_write:account+library_read:account+library_write:account+workflow_read:account+workflow_write:account");
    }

    public function callback(Request $request)
    {

        "CBSCTBABDUAAABACAABAAHqloLOm2yi1dzJvk0stp68o_8zq60O8TWOR45DBJHPiKQKRoRFV9V8YAXYvcrs9qgogzYJvQQBBJkvwwk8fLYrAxsUm6hA7YdpWnNcbaE9DjUWgc63aMzzjD6EKUd2kfNZdTqjeUfsgZNfQ7MxrMxLOBNxRGGbAI21gpmPfBj_9g1JX0nRspj54bmqEXXeCkFgjN7HZhC7LHUw4zLjwxOI48M53731w3SnkcAcjybyyCb3Xuc2nCBGewzqIVTjFTb8NpEGAv55ZupLf4m9wpUy-RN1vqnYPM-Z5Y4qnAlfUhln3ZAWcCxHnxeQgvzadWoAWNV1ATWnSo4Ec2i2xDmm29dV4wdUadSaMBCAg60-4*"
        code=CBNCKBAAHBCAABAACL8PdXASChrEmloCF91XihRZMWZrUYjo&state=NH7peiZ9io8yrXRyIfwfA6kQfa-31fD2

        $request->get("code");
        exit;
    }
}


// {
//     "fileInfos": [{
//         "transientDocumentId": "CBSCTBABDUAAABACAABAAHqloLOm2yi1dzJvk0stp68o_8zq60O8TWOR45DBJHPiKQKRoRFV9V8YAXYvcrs9qgogzYJvQQBBJkvwwk8fLYrAxsUm6hA7YdpWnNcbaE9DjUWgc63aMzzjD6EKUd2kfNZdTqjeUfsgZNfQ7MxrMxLOBNxRGGbAI21gpmPfBj_9g1JX0nRspj54bmqEXXeCkFgjN7HZhC7LHUw4zLjwxOI48M53731w3SnkcAcjybyyCb3Xuc2nCBGewzqIVTjFTb8NpEGAv55ZupLf4m9wpUy-RN1vqnYPM-Z5Y4qnAlfUhln3ZAWcCxHnxeQgvzadWoAWNV1ATWnSo4Ec2i2xDmm29dV4wdUadSaMBCAg60-4*"
//     }],
//     "name": "MyTestAgreement",
//     "participantSetsInfo": [{
//         "memberInfos": [{
//             "email": "bookkeeping@ujatcare.com"
//         }],
//         "order": 1,
//         "role": "SIGNER"
//     }],
//     "signatureType": "ESIGN",
//     "state": "IN_PROCESS"
// }


//CBJCHBCAABAAduMi0B9f6Grj86iN0V5YQc_KT_0ieNsX
