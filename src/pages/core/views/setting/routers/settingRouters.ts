import React from 'react'
import { FcConferenceCall, FcDonate } from 'react-icons/fc'

export const settingRouters = [
    {
      name: "Servicios",
      path: "setting/services/",
      icon: FcDonate,
      show: true,
      children: null,
    },
    {
      name: "Usuarios",
      path: "setting/users/",
      icon: FcConferenceCall,
      show: true,
      children: null,
    },
  ]