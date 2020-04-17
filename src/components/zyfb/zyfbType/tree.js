import { server, wzscztUrl, wcgsscUrl, wcnmsy, wcscztUrl, wcymfbUrl, ygncUrl, xczxsfdbzxxmUrl, xbstxxcydzdxmUrl } from "@/assets/config/config.js";


export const treedata = [
  {
    id: "sczt",
    label: "生产主体",
    children: [
      {
        id: "wz_sczt",
        label: "温州生产主体",
        url: `${wzscztUrl}`,
        sublayers:"0"
      },
      {
        id: "wc_sczt",
        label: "文成生产主体",
        url: `${wcscztUrl}`,
        sublayers: "0"
      }
    ]
  },
  {
    id: "ncp",
    label: "农产品",
    children: [
      {
        id: "wc_ncp",
        label: "文成",
        children: [
          {
            id: "wc_gssc",
            label: "文成高山蔬菜",
            url: `${wcgsscUrl}`,
            sublayers: [{ id: 0 }]
          },
          {
            id: "wc_nmsy",
            label: "文成糯米山药",
            url: `${wcnmsy}`,
            sublayers: [{ id: 0 }]
          },
          {
            id: "wc_ymfb",
            label: "文成杨梅分布",
            url: `${wcymfbUrl}`,
            sublayers: [{ id: 0 }]
          }
        ]
      },
    ]
  },
  {
    id: "wc_ygnc",
    label: "阳光农场",
    url: `${ygncUrl}`,
    sublayers: "0"

  },
  {
    id: "nyqh",
    label: "农业区划",
    children: [
      {
        id: "nyqh_qh",
        label: "行政区划",
        url: `${server}/arcgis/rest/services/NYQH_XZQH/MapServer`,
        sublayers: [{ id: 0 }]
      },
      {
        id: "nyqh_zzy",
        label: "种植业区划",
        url: `${server}/arcgis/rest/services/NYQH_XZQH/MapServer`,
        sublayers: [{ id: 0 }],
        disabled: true
      },
      {
        id: "nyqh_ly",
        label: "林业区划",
        url: `${server}/arcgis/rest/services/NYQH_XZQH/MapServer`,
        sublayers: [{ id: 0 }],
        disabled: true
      },
      {
        id: "nyqh_cmy",
        label: "畜牧业区划",
        url: `${server}/arcgis/rest/services/NYQH_XZQH/MapServer`,
        sublayers: [{ id: 0 }],
        disabled: true
      },
      {
        id: "nyqh_yy",
        label: "渔业区划",
        url: `${server}/arcgis/rest/services/NYQH_XZQH/MapServer`,
        sublayers: [{ id: 0 }],
        disabled: true
      },
      {
        id: "nyzy_ls",
        label: "粮食功能生产区",
        url: `${server}/arcgis/rest/services/NYQH_LSQ/MapServer`,
        sublayers: [{ id: 0 }],
        // disabled: true
      }
    ]
  },
  {
    id: "nycy",
    label: "农业产业",
    children: [
      {
        id: "nycy_ltqy",
        label: "龙头企业",
        url: `${server}/arcgis/rest/services/NYQH_XZQH/MapServer`,
        sublayers: [{ id: 0 }],
        disabled: true
      },
      {
        id: "nycy_nycy",
        label: "农业企业",
        url: `${server}/arcgis/rest/services/NYQH_XZQH/MapServer`,
        sublayers: [{ id: 0 }],
        disabled: true
      }
    ]
  },
  {
    id: "nyzy",
    label: "农业资源",
    children: [
      {
        id: "nyzy_gd",
        label: "耕地",
        url: `${server}/arcgis/rest/services/NYZY_GD/MapServer`,
        sublayers: [{ id: 1 }, { id: 0 }],
        //  disabled: true
      },
      {
        id: "nyzy_yd",
        label: "园地",
        url: `${server}/arcgis/rest/services/NYZY_YD/MapServer`,
        sublayers: [{ id: 3 }, { id: 2 }, { id: 1 }, { id: 0 }]
      },
      {
        id: "nyzy_ld",
        label: "林地",
        url: `${server}/arcgis/rest/services/NYZY_LD/MapServer`,
        sublayers: [
          // { id: 7 },
          // { id: 6 },
          // { id: 5 },
          // { id: 4 },
          // { id: 3 },
          { id: 2 },
          { id: 1 },
          { id: 0 }
        ]
      },
      {
        id: "nyzy_nt",
        label: "永久基本农田",
        url: `${server}/arcgis/rest/services/NYZY_YJJBNT/MapServer`,
        sublayers: [{ id: 0 }],
        // disabled: true
      }
    ]
  },
  {
    id: "nlzy",
    label: "农旅资源",
    children: [
      {
        id: "nlzy_mlxc",
        label: "美丽乡村",
        url: `${server}/arcgis/rest/services/NLZY_MLXC/MapServer`,
        sublayers: "0"
      },
      {
        id: "nlzy_nyy",
        label: "农业园",
        url: `${server}/arcgis/rest/services/NLZY_NYY/MapServer`,
        sublayers: "0"
      },
      {
        id: "nlzy_ms",
        label: "民宿",
        url: `${server}/arcgis/rest/services/NLZY_MS/MapServer`,
        sublayers: "0"
      },
      {
        id: "nlzy_njl",
        label: "农家乐",
        url: `${server}/arcgis/rest/services/dlgq/sxq_lswhjq_15/MapServer`,
        sublayers: "8",
        disabled: true
      },
      {
        id: "nlzy_jqjd",
        label: "景区景点",
        url: `${server}/arcgis/rest/services/NLZY_JQJD/MapServer`,
        sublayers: "0"
      }
    ]
  },
  {
    id: "nyzh",
    label: "农业灾害",
    children: [
      {
        id: "nyzh_dzzh",
        label: "地质灾害",
        url: `${server}/arcgis/rest/services/NYZH_DZZHD/MapServer`,
        sublayers: "0",
        // disabled: true
      }
    ]
  },
  {
    id: "nyds",
    label: "农业电商",
    children: [
      {
        id: "nyds_dsc",
        label: "电商村",
        url: `${server}/arcgis/rest/services/NYDS_DSC/MapServer`,
        sublayers: "0"
      },
      {
        id: "nyds_dsqy",
        label: "电商企业",
        url: `${server}/arcgis/rest/services/NYDS_DSC/MapServer`,
        sublayers: [{ id: 0 }],
        disabled: true
      }
    ]
  },
  {
    id: "history",
    label: "历史文化",
    children: [
      {
        id: "history_jq",
        label: "历史文化街区",
        url: `${server}/arcgis/rest/services/LSWH/MapServer`,
        sublayers: [{ id: 3 }],
      },
      {
        id: "history_jz",
        label: "历史建筑",
        url: `${server}/arcgis/rest/services/LSWH/MapServer`,
        sublayers: [{ id: 4 }, { id: 0 }],
      },
      {
        id: "history_bhcl",
        label: "历史文化保护村落",
        url: `${server}/arcgis/rest/services/LSWH/MapServer`,
        sublayers: [{ id: 1 }],
      },
      {
        id: "history_bhdw",
        label: "历史文物保护单位",
        url: `${server}/arcgis/rest/services/LSWH/MapServer`,
        sublayers: [{ id: 8 }, { id: 2 }],
      },
      // {
      //   id: "history_city",
      //   label: "历史文化名城",
      //   url: `${server}/arcgis/rest/services/LSWH/MapServer`,
      //   sublayers: [{ id: 5 }],
      // },
      {
        id: "history_mz",
        label: "历史文化名镇",
        url: `${server}/arcgis/rest/services/LSWH/MapServer`,
        sublayers: [{ id: 6 }],
      },
      {
        id: "history_mc",
        label: "历史文化名村",
        url: `${server}/arcgis/rest/services/LSWH/MapServer`,
        sublayers: [{ id: 7 }],
      }
    ]
  },
  // {
  //   id: "sfd",
  //   label: "示范带",
  //   url: `${server}/arcgis/rest/services/sfd/MapServer`,
  //   sublayers: [{ id: 0 }]
  // },
  {
    id: "sfd",
    label: "示范带",
    children:[
      {      id: "xbst_xxcydzdxmUrl",
      label: "西部生态休闲产业带重点项目",
      url: `${xbstxxcydzdxmUrl}`,
      sublayers: [{ id: 0 }]
    },
      {      id: "xczx_sfdbzxxmUrl",
      label: "乡村振兴示范带标志性项目",
      url: `${xczxsfdbzxxmUrl}`,
      sublayers: [{ id: 0 }]
    }
    ]
  },
  {
    id: "jcdl",
    label: "基础地理",
    children: [
      {
        id: "jcdl_dzdt",
        label: "温州全市域电子地图数据",
        url: `${server}/arcgis/rest/services/dlgq/sxq_dxdm_16/MapServer`,
        sublayers: [{ id: 0 }],
        disabled: true
      },
      {
        id: "jcdl_yxsj",
        label: "2019温州全市域0.5m影像数据",
        url: `${server}/arcgis/rest/services/dlgq/sxq_dxdm_16/MapServer`,
        sublayers: [{ id: 2 }],
        disabled: true
      },
      {
        id: "jcdl_lwsj",
        label: "路网数据",
        url: `${server}/arcgis/rest/services/DLXX_LW/MapServer`,
        sublayers: [{ id: 3 }, { id: 2 }, { id: 1 }, { id: 0 }]
      },
      {
        id: "jcdl_sxxh",
        label: "水系河网数据",
        url: `${server}/arcgis/rest/services/DLXX_SXHW/MapServer`,
        sublayers: [{ id: 3 }, { id: 2 }, { id: 1 }, { id: 0 }],
      }
    ]
  }
];
