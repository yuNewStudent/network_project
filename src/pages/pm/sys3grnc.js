const sys3grnc = [
  {
    id: 'ManagedElement',
    label: 'ManagedElement',
    children: [
      {
        id: 'ManagedElement_Equipment',
        label: 'Equipment',
        children: [
          {
            id: 'ManagedElement_Equipment_SpDevicePool',
            label: 'SpDevicePool',
            children: [
              {
                id: 'ManagedElement_Equipment_SpDevicePool_CcDevice',
                label: 'CcDevice'
              },
              {
                id: 'ManagedElement_Equipment_SpDevicePool_DcDevice',
                label: 'DcDevice'
              },
              {
                id: 'ManagedElement_Equipment_SpDevicePool_PdrDevice',
                label: 'PdrDevice',
                children: [
                  {
                    id:
                      'ManagedElement_Equipment_SpDevicePool_PdrDevice_IpEthPacketDataRouter',
                    label: 'IpEthPacketDataRouter'
                  },
                  {
                    id:
                      'ManagedElement_Equipment_SpDevicePool_PdrDevice_PacketDataRouter',
                    label: 'PacketDataRouter'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_Equipment_Subrack',
            label: 'Subrack',
            children: [
              {
                id: 'ManagedElement_Equipment_Subrack_Slot',
                label: 'Slot',
                children: [
                  {
                    id: 'ManagedElement_Equipment_Subrack_Slot_PlugInUnit',
                    label: 'PlugInUnit',
                    children: [
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu',
                        label: 'Cbu',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal',
                            label: 'ExchangeTerminal',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_E1PhysPathTerm',
                                label: 'E1PhysPathTerm'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_E3PhysPathTerm',
                                label: 'E3PhysPathTerm'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_J1PhysPathTerm',
                                label: 'J1PhysPathTerm'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp',
                                label: 'Os155SpiTtp',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp',
                                    label: 'Sts1SpeTtp',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp_Vt15Ttp',
                                        label: 'Vt15Ttp',
                                        children: [
                                          {
                                            id:
                                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp_Vt15Ttp_T1Ttp',
                                            label: 'T1Ttp'
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Sts3CspeTtp',
                                    label: 'Sts3CspeTtp'
                                  },
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Vc3Ttp',
                                    label: 'Vc3Ttp',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Vc3Ttp_Vc11Ttp',
                                        label: 'Vc11Ttp'
                                      }
                                    ]
                                  },
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Vc4Ttp',
                                    label: 'Vc4Ttp',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Vc4Ttp_Vc12Ttp',
                                        label: 'Vc12Ttp',
                                        children: [
                                          {
                                            id:
                                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Vc4Ttp_Vc12Ttp_E1Ttp',
                                            label: 'E1Ttp'
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_T1PhysPathTerm',
                                label: 'T1PhysPathTerm'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_T3PhysPathTerm',
                                label: 'T3PhysPathTerm'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_GeneralProcessorUnit',
                            label: 'GeneralProcessorUnit',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_GeneralProcessorUnit_FastEthernet',
                                label: 'FastEthernet'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_GeneralProcessorUnit_LoadControl',
                                label: 'LoadControl'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_GeneralProcessorUnit_MediumAccessUnit',
                                label: 'MediumAccessUnit'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_TimingUnit',
                            label: 'TimingUnit',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_TimingUnit_GpsSyncRef',
                                label: 'GpsSyncRef'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ControlSwitch',
                        label: 'ControlSwitch',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ControlSwitch_ControlSwitchPort',
                            label: 'ControlSwitchPort'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetPort',
                        label: 'EthernetPort'
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule',
                        label: 'EthernetSwitchModule',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_EthernetBridgePort',
                            label: 'EthernetBridgePort',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_EthernetBridgePort_SwitchPortStp',
                                label: 'SwitchPortStp'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_EthernetSwitchModulePort',
                            label: 'EthernetSwitchModulePort',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_EthernetSwitchModulePort_SwitchPortStp',
                                label: 'SwitchPortStp'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_Lag',
                            label: 'Lag',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_Lag_SwitchPortStp',
                                label: 'SwitchPortStp'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_SwitchStp',
                            label: 'SwitchStp'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp',
                        label: 'ExchangeTerminalIp',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch',
                            label: 'EthernetSwitch',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch_EthernetSwitchPort',
                                label: 'EthernetSwitchPort',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch_EthernetSwitchPort_SwitchPortStp',
                                    label: 'SwitchPortStp'
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch_Lag',
                                label: 'Lag',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch_Lag_SwitchPortStp',
                                    label: 'SwitchPortStp'
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch_SwitchStp',
                                label: 'SwitchStp'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_GigaBitEthernet',
                            label: 'GigaBitEthernet',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_GigaBitEthernet_IpInterface',
                                label: 'IpInterface',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_GigaBitEthernet_IpInterface_IpFlowMonitor',
                                    label: 'IpFlowMonitor'
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_InternalEthernetPort',
                            label: 'InternalEthernetPort',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_InternalEthernetPort_IpInterface',
                                label: 'IpInterface',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_InternalEthernetPort_IpInterface_IpFlowMonitor',
                                    label: 'IpFlowMonitor'
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal',
                        label: 'ExchangeTerminal',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_E1PhysPathTerm',
                            label: 'E1PhysPathTerm'
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_E3PhysPathTerm',
                            label: 'E3PhysPathTerm'
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_J1PhysPathTerm',
                            label: 'J1PhysPathTerm'
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp',
                            label: 'Os155SpiTtp',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp',
                                label: 'Sts1SpeTtp',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp_Vt15Ttp',
                                    label: 'Vt15Ttp',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp_Vt15Ttp_T1Ttp',
                                        label: 'T1Ttp'
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Sts3CspeTtp',
                                label: 'Sts3CspeTtp'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Vc3Ttp',
                                label: 'Vc3Ttp',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Vc3Ttp_Vc11Ttp',
                                    label: 'Vc11Ttp'
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Vc4Ttp',
                                label: 'Vc4Ttp',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Vc4Ttp_Vc12Ttp',
                                    label: 'Vc12Ttp',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Vc4Ttp_Vc12Ttp_E1Ttp',
                                        label: 'E1Ttp'
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_T1PhysPathTerm',
                            label: 'T1PhysPathTerm'
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_T3PhysPathTerm',
                            label: 'T3PhysPathTerm'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_GeneralProcessorUnit',
                        label: 'GeneralProcessorUnit',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_GeneralProcessorUnit_FastEthernet',
                            label: 'FastEthernet'
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_GeneralProcessorUnit_LoadControl',
                            label: 'LoadControl'
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_GeneralProcessorUnit_MediumAccessUnit',
                            label: 'MediumAccessUnit'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Lag',
                        label: 'Lag',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Lag_SwitchPortStp',
                            label: 'SwitchPortStp'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice',
                        label: 'PiuDevice',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp',
                            label: 'ExchangeTerminalIp',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_EthernetSwitch',
                                label: 'EthernetSwitch',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_EthernetSwitch_EthernetSwitchPort',
                                    label: 'EthernetSwitchPort'
                                  },
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_EthernetSwitch_Lag',
                                    label: 'Lag',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_EthernetSwitch_Lag_SwitchPortStp',
                                        label: 'SwitchPortStp'
                                      }
                                    ]
                                  },
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_EthernetSwitch_SwitchStp',
                                    label: 'SwitchStp'
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_GigaBitEthernet',
                                label: 'GigaBitEthernet',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_GigaBitEthernet_IpInterface',
                                    label: 'IpInterface',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_GigaBitEthernet_IpInterface_IpFlowMonitor',
                                        label: 'IpFlowMonitor'
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_InternalEthernetPort',
                                label: 'InternalEthernetPort',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_InternalEthernetPort_IpInterface',
                                    label: 'IpInterface'
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_SwitchCoreUnit',
                        label: 'SwitchCoreUnit',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_SwitchCoreUnit_SwitchInternalLinkPort',
                            label: 'SwitchInternalLinkPort'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_SwitchExtensionUnit',
                        label: 'SwitchExtensionUnit',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_SwitchExtensionUnit_SwitchInternalLinkPort',
                            label: 'SwitchInternalLinkPort'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_TimingUnit',
                        label: 'TimingUnit',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_TimingUnit_GpsSyncRef',
                            label: 'GpsSyncRef'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'ManagedElement_IpOam',
        label: 'IpOam',
        children: [
          {
            id: 'ManagedElement_IpOam_Ip',
            label: 'Ip',
            children: [
              {
                id: 'ManagedElement_IpOam_Ip_EthernetLink',
                label: 'EthernetLink'
              },
              {
                id: 'ManagedElement_IpOam_Ip_IpAtmLink',
                label: 'IpAtmLink'
              },
              {
                id: 'ManagedElement_IpOam_Ip_IpHostLink',
                label: 'IpHostLink'
              }
            ]
          },
          {
            id: 'ManagedElement_IpOam_Ospf',
            label: 'Ospf',
            children: [
              {
                id: 'ManagedElement_IpOam_Ospf_OspfArea',
                label: 'OspfArea'
              },
              {
                id: 'ManagedElement_IpOam_Ospf_OspfInterface',
                label: 'OspfInterface'
              }
            ]
          }
        ]
      },
      {
        id: 'ManagedElement_IpSystem',
        label: 'IpSystem',
        children: [
          {
            id: 'ManagedElement_IpSystem_DnsClient',
            label: 'DnsClient'
          },
          {
            id: 'ManagedElement_IpSystem_Icmp',
            label: 'Icmp'
          },
          {
            id: 'ManagedElement_IpSystem_IcmpServer',
            label: 'IcmpServer'
          },
          {
            id: 'ManagedElement_IpSystem_IpAccessHostEt',
            label: 'IpAccessHostEt'
          },
          {
            id: 'ManagedElement_IpSystem_IpAccessHostGpb',
            label: 'IpAccessHostGpb'
          },
          {
            id: 'ManagedElement_IpSystem_IpAccessHostSpb',
            label: 'IpAccessHostSpb'
          },
          {
            id: 'ManagedElement_IpSystem_IpHost',
            label: 'IpHost',
            children: [
              {
                id: 'ManagedElement_IpSystem_IpHost_InterfaceIpv4',
                label: 'InterfaceIpv4'
              }
            ]
          },
          {
            id: 'ManagedElement_IpSystem_IpMux',
            label: 'IpMux'
          },
          {
            id: 'ManagedElement_IpSystem_Ippm',
            label: 'Ippm',
            children: [
              {
                id: 'ManagedElement_IpSystem_Ippm_TwampResponder',
                label: 'TwampResponder'
              }
            ]
          },
          {
            id: 'ManagedElement_IpSystem_IpRouter',
            label: 'IpRouter',
            children: [
              {
                id: 'ManagedElement_IpSystem_IpRouter_InterfaceIpv4',
                label: 'InterfaceIpv4'
              },
              {
                id: 'ManagedElement_IpSystem_IpRouter_IpRouterIntIf',
                label: 'IpRouterIntIf'
              },
              {
                id: 'ManagedElement_IpSystem_IpRouter_Ipv4RouterIf',
                label: 'Ipv4RouterIf'
              }
            ]
          },
          {
            id: 'ManagedElement_IpSystem_IpSec',
            label: 'IpSec',
            children: [
              {
                id: 'ManagedElement_IpSystem_IpSec_IkePeer',
                label: 'IkePeer'
              },
              {
                id: 'ManagedElement_IpSystem_IpSec_IpSecTunnel',
                label: 'IpSecTunnel'
              }
            ]
          },
          {
            id: 'ManagedElement_IpSystem_IpTerminationHost',
            label: 'IpTerminationHost'
          },
          {
            id: 'ManagedElement_IpSystem_Ipv6Interface',
            label: 'Ipv6Interface',
            children: [
              {
                id: 'ManagedElement_IpSystem_Ipv6Interface_DefaultRouter',
                label: 'DefaultRouter'
              },
              {
                id: 'ManagedElement_IpSystem_Ipv6Interface_DscpGroup',
                label: 'DscpGroup',
                children: [
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_DscpGroup_pmIfStatsDscpInOctets',
                    label: 'pmIfStatsDscpInOctets'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_DscpGroup_pmIfStatsDscpInPkts',
                    label: 'pmIfStatsDscpInPkts'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_DscpGroup_pmIfStatsDscpOutOctets',
                    label: 'pmIfStatsDscpOutOctets'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_DscpGroup_pmIfStatsDscpOutPkts',
                    label: 'pmIfStatsDscpOutPkts'
                  }
                ]
              },
              {
                id: 'ManagedElement_IpSystem_Ipv6Interface_IpFlowMonitor',
                label: 'IpFlowMonitor',
                children: [
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_IpFlowMonitor_pmIpFlowInOctets',
                    label: 'pmIpFlowInOctets'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_IpFlowMonitor_pmIpFlowInPkts',
                    label: 'pmIpFlowInPkts'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_IpFlowMonitor_pmIpFlowOutOctets',
                    label: 'pmIpFlowOutOctets'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_IpFlowMonitor_pmIpFlowOutPkts',
                    label: 'pmIpFlowOutPkts'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_IpSystem_TrafficManagement',
            label: 'TrafficManagement',
            children: [
              {
                id:
                  'ManagedElement_IpSystem_TrafficManagement_TrafficScheduler',
                label: 'TrafficScheduler',
                children: [
                  {
                    id:
                      'ManagedElement_IpSystem_TrafficManagement_TrafficScheduler_TrafficManagementQueue',
                    label: 'TrafficManagementQueue'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_IpSystem_VpnInterface',
            label: 'VpnInterface'
          }
        ]
      },
      {
        id: 'ManagedElement_RncFunction',
        label: 'RncFunction',
        children: [
          {
            id: 'ManagedElement_RncFunction_CchFrameSynch',
            label: 'CchFrameSynch'
          },
          {
            id: 'ManagedElement_RncFunction_CnOperator',
            label: 'CnOperator',
            children: [
              {
                id: 'ManagedElement_RncFunction_CnOperator_IuLink',
                label: 'IuLink',
                children: [
                  {
                    id: 'ManagedElement_RncFunction_CnOperator_IuLink_Ranap',
                    label: 'Ranap'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_RncFunction_DchFrameSynch',
            label: 'DchFrameSynch'
          },
          {
            id: 'ManagedElement_RncFunction_Handover',
            label: 'Handover'
          },
          {
            id: 'ManagedElement_RncFunction_IuBcLink',
            label: 'IuBcLink'
          },
          {
            id: 'ManagedElement_RncFunction_IubLink',
            label: 'IubLink',
            children: [
              {
                id: 'ManagedElement_RncFunction_IubLink_IubEdch',
                label: 'IubEdch'
              },
              {
                id: 'ManagedElement_RncFunction_IubLink_NbapCommon',
                label: 'NbapCommon'
              },
              {
                id: 'ManagedElement_RncFunction_IubLink_NodeSynch',
                label: 'NodeSynch'
              }
            ]
          },
          {
            id: 'ManagedElement_RncFunction_IurLink',
            label: 'IurLink'
          },
          {
            id: 'ManagedElement_RncFunction_LocationArea',
            label: 'LocationArea',
            children: [
              {
                id: 'ManagedElement_RncFunction_LocationArea_RoutingArea',
                label: 'RoutingArea'
              }
            ]
          },
          {
            id: 'ManagedElement_RncFunction_Mbms',
            label: 'Mbms'
          },
          {
            id: 'ManagedElement_RncFunction_Paging',
            label: 'Paging'
          },
          {
            id: 'ManagedElement_RncFunction_Rcs',
            label: 'Rcs'
          },
          {
            id: 'ManagedElement_RncFunction_RncModule',
            label: 'RncModule'
          },
          {
            id: 'ManagedElement_RncFunction_SasPositioning',
            label: 'SasPositioning',
            children: [
              {
                id: 'ManagedElement_RncFunction_SasPositioning_Pcap',
                label: 'Pcap'
              }
            ]
          },
          {
            id: 'ManagedElement_RncFunction_SecurityHandling',
            label: 'SecurityHandling'
          },
          {
            id: 'ManagedElement_RncFunction_UePositioning',
            label: 'UePositioning',
            children: [
              {
                id: 'ManagedElement_RncFunction_UePositioning_AgpsPositioning',
                label: 'AgpsPositioning'
              },
              {
                id:
                  'ManagedElement_RncFunction_UePositioning_PositioningServiceClass',
                label: 'PositioningServiceClass'
              }
            ]
          },
          {
            id: 'ManagedElement_RncFunction_UeRc',
            label: 'UeRc'
          },
          {
            id: 'ManagedElement_RncFunction_Ura',
            label: 'Ura'
          },
          {
            id: 'ManagedElement_RncFunction_UtranCell',
            label: 'UtranCell',
            children: [
              {
                id: 'ManagedElement_RncFunction_UtranCell_GsmRelation',
                label: 'GsmRelation'
              },
              {
                id: 'ManagedElement_RncFunction_UtranCell_Hsdsch',
                label: 'Hsdsch',
                children: [
                  {
                    id: 'ManagedElement_RncFunction_UtranCell_Hsdsch_Eul',
                    label: 'Eul'
                  }
                ]
              },
              {
                id: 'ManagedElement_RncFunction_UtranCell_MbmsCch',
                label: 'MbmsCch'
              },
              {
                id: 'ManagedElement_RncFunction_UtranCell_Rach',
                label: 'Rach'
              },
              {
                id: 'ManagedElement_RncFunction_UtranCell_TdScdmaCarrier',
                label: 'TdScdmaCarrier'
              },
              {
                id: 'ManagedElement_RncFunction_UtranCell_UtranRelation',
                label: 'UtranRelation'
              }
            ]
          },
          {
            id: 'ManagedElement_RncFunction_WifiMobility',
            label: 'WifiMobility'
          }
        ]
      },
      {
        id: 'ManagedElement_SwitchFabric',
        label: 'SwitchFabric',
        children: [
          {
            id: 'ManagedElement_SwitchFabric_InternalLinkGroup',
            label: 'InternalLinkGroup'
          }
        ]
      },
      {
        id: 'ManagedElement_SystemFunctions',
        label: 'SystemFunctions',
        children: [
          {
            id: 'ManagedElement_SystemFunctions_Licensing',
            label: 'Licensing',
            children: [
              {
                id: 'ManagedElement_SystemFunctions_Licensing_RncCapacity',
                label: 'RncCapacity'
              }
            ]
          }
        ]
      },
      {
        id: 'ManagedElement_TransportNetwork',
        label: 'TransportNetwork',
        children: [
          {
            id: 'ManagedElement_TransportNetwork_Aal0TpVccTp',
            label: 'Aal0TpVccTp'
          },
          {
            id: 'ManagedElement_TransportNetwork_Aal1TpVccTp',
            label: 'Aal1TpVccTp'
          },
          {
            id: 'ManagedElement_TransportNetwork_Aal2PathVccTp',
            label: 'Aal2PathVccTp'
          },
          {
            id: 'ManagedElement_TransportNetwork_Aal2Sp',
            label: 'Aal2Sp',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_Aal2Sp_Aal2Ap',
                label: 'Aal2Ap'
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_Aal5TpVccTp',
            label: 'Aal5TpVccTp'
          },
          {
            id: 'ManagedElement_TransportNetwork_AtmPort',
            label: 'AtmPort',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_AtmPort_VplTp',
                label: 'VplTp',
                children: [
                  {
                    id: 'ManagedElement_TransportNetwork_AtmPort_VplTp_VpcTp',
                    label: 'VpcTp',
                    children: [
                      {
                        id:
                          'ManagedElement_TransportNetwork_AtmPort_VplTp_VpcTp_VclTp',
                        label: 'VclTp'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_ImaGroup',
            label: 'ImaGroup',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_ImaGroup_ImaLink',
                label: 'ImaLink'
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_M3ua',
            label: 'M3ua',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_M3ua_M3uaRemoteSp',
                label: 'M3uaRemoteSp'
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_Mtp2Hsl',
            label: 'Mtp2Hsl',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_Mtp2Hsl_Mtp2HslTpChina',
                label: 'Mtp2HslTpChina'
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp2Hsl_Mtp2HslTpItu',
                label: 'Mtp2HslTpItu'
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_Mtp2TpAnsi',
            label: 'Mtp2TpAnsi'
          },
          {
            id: 'ManagedElement_TransportNetwork_Mtp2TpChina',
            label: 'Mtp2TpChina'
          },
          {
            id: 'ManagedElement_TransportNetwork_Mtp2TpItu',
            label: 'Mtp2TpItu'
          },
          {
            id: 'ManagedElement_TransportNetwork_Mtp2TpTtc',
            label: 'Mtp2TpTtc'
          },
          {
            id: 'ManagedElement_TransportNetwork_Mtp3bSpAnsi',
            label: 'Mtp3bSpAnsi',
            children: [
              {
                id:
                  'ManagedElement_TransportNetwork_Mtp3bSpAnsi_M3uAssociation',
                label: 'M3uAssociation'
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpAnsi_Mtp3bAp',
                label: 'Mtp3bAp'
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpAnsi_Mtp3bSls',
                label: 'Mtp3bSls',
                children: [
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpAnsi_Mtp3bSls_Mtp3bSlAnsi',
                    label: 'Mtp3bSlAnsi'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpAnsi_Mtp3bSls_Mtp3bSlChina',
                    label: 'Mtp3bSlChina'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpAnsi_Mtp3bSls_Mtp3bSlItu',
                    label: 'Mtp3bSlItu'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpAnsi_Mtp3bSls_Mtp3bSlTtc',
                    label: 'Mtp3bSlTtc'
                  }
                ]
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpAnsi_Mtp3bSrs',
                label: 'Mtp3bSrs',
                children: [
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpAnsi_Mtp3bSrs_Mtp3bSr',
                    label: 'Mtp3bSr'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_Mtp3bSpChina',
            label: 'Mtp3bSpChina',
            children: [
              {
                id:
                  'ManagedElement_TransportNetwork_Mtp3bSpChina_M3uAssociation',
                label: 'M3uAssociation'
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpChina_Mtp3bAp',
                label: 'Mtp3bAp'
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpChina_Mtp3bSls',
                label: 'Mtp3bSls',
                children: [
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpChina_Mtp3bSls_Mtp3bSlAnsi',
                    label: 'Mtp3bSlAnsi'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpChina_Mtp3bSls_Mtp3bSlChina',
                    label: 'Mtp3bSlChina'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpChina_Mtp3bSls_Mtp3bSlItu',
                    label: 'Mtp3bSlItu'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpChina_Mtp3bSls_Mtp3bSlTtc',
                    label: 'Mtp3bSlTtc'
                  }
                ]
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpChina_Mtp3bSrs',
                label: 'Mtp3bSrs',
                children: [
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpChina_Mtp3bSrs_Mtp3bSr',
                    label: 'Mtp3bSr'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_Mtp3bSpItu',
            label: 'Mtp3bSpItu',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpItu_M3uAssociation',
                label: 'M3uAssociation'
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpItu_Mtp3bAp',
                label: 'Mtp3bAp'
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpItu_Mtp3bSls',
                label: 'Mtp3bSls',
                children: [
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpItu_Mtp3bSls_Mtp3bSlAnsi',
                    label: 'Mtp3bSlAnsi'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpItu_Mtp3bSls_Mtp3bSlChina',
                    label: 'Mtp3bSlChina'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpItu_Mtp3bSls_Mtp3bSlItu',
                    label: 'Mtp3bSlItu'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpItu_Mtp3bSls_Mtp3bSlTtc',
                    label: 'Mtp3bSlTtc'
                  }
                ]
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpItu_Mtp3bSrs',
                label: 'Mtp3bSrs',
                children: [
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpItu_Mtp3bSrs_Mtp3bSr',
                    label: 'Mtp3bSr'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_Mtp3bSpTtc',
            label: 'Mtp3bSpTtc',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpTtc_M3uAssociation',
                label: 'M3uAssociation'
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpTtc_Mtp3bAp',
                label: 'Mtp3bAp'
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpTtc_Mtp3bSls',
                label: 'Mtp3bSls',
                children: [
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpTtc_Mtp3bSls_Mtp3bSlAnsi',
                    label: 'Mtp3bSlAnsi'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpTtc_Mtp3bSls_Mtp3bSlChina',
                    label: 'Mtp3bSlChina'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpTtc_Mtp3bSls_Mtp3bSlItu',
                    label: 'Mtp3bSlItu'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpTtc_Mtp3bSls_Mtp3bSlTtc',
                    label: 'Mtp3bSlTtc'
                  }
                ]
              },
              {
                id: 'ManagedElement_TransportNetwork_Mtp3bSpTtc_Mtp3bSrs',
                label: 'Mtp3bSrs',
                children: [
                  {
                    id:
                      'ManagedElement_TransportNetwork_Mtp3bSpTtc_Mtp3bSrs_Mtp3bSr',
                    label: 'Mtp3bSr'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_NniSaalTp',
            label: 'NniSaalTp'
          },
          {
            id: 'ManagedElement_TransportNetwork_SccpSp',
            label: 'SccpSp',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_SccpSp_SccpScrc',
                label: 'SccpScrc',
                children: [
                  {
                    id:
                      'ManagedElement_TransportNetwork_SccpSp_SccpScrc_SccpAccountingCriteria',
                    label: 'SccpAccountingCriteria'
                  },
                  {
                    id:
                      'ManagedElement_TransportNetwork_SccpSp_SccpScrc_SccpPolicing',
                    label: 'SccpPolicing'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_Sctp',
            label: 'Sctp',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_Sctp_SctpAssociation',
                label: 'SctpAssociation'
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_Synchronization',
            label: 'Synchronization'
          },
          {
            id: 'ManagedElement_TransportNetwork_UniSaalTp',
            label: 'UniSaalTp'
          }
        ]
      }
    ]
  }
]
export default sys3grnc
