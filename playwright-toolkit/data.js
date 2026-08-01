const storyTypes = [
  {
    "id": "tragedy",
    "title": "悲剧",
    "meta": "古典悲剧 / 现代悲剧 / 社会悲剧",
    "description": "以不可回避的代价、价值冲突和人物认知迟到为核心，适合处理命运、家庭、阶级、制度和伦理困境。",
    "frameworks": [
      {
        "name": "诗学式过失—识认结构",
        "source": "亚里士多德《诗学》",
        "summary": "主人公因“过失”或认知盲区进入行动链，经过突转与发现，最终承担不可逆后果。",
        "template": [
          "起：建立主人公的身份、欲望与盲点，让观众看到其优点和危险。",
          "承：一次选择触发连锁后果，外部阻力逐步变成命运般的围困。",
          "转：突转发生，主人公发现自己一直误读了亲情、权力、身份或罪责。",
          "合：行动无法撤回，人物以毁灭、流放或清醒的代价完成意义。"
        ],
        "beats": [
          "序场：秩序与禁忌",
          "诱因：越界行动",
          "上升：误判扩大",
          "中点：反胜为败",
          "发现：真相刺破自我",
          "灾变：代价落地",
          "余波：观众获得净化"
        ],
        "conflict": "人物想保持尊严或权力，但其行动不断证明自身价值体系存在裂缝。",
        "useCase": "古典悲剧、家族悲剧、命运悲剧。",
        "video": {
          "url": "https://www.youtube.com/embed/dSr6mP-zxUc",
          "title": "What is Tragedy? Crash Course Theater",
          "source": "YouTube"
        }
      },
      {
        "name": "麦基价值极性下坠法",
        "source": "罗伯特·麦基《故事》",
        "summary": "围绕一个核心价值从正面滑向负面，再滑向“负面的负面”，制造层层升级的悲剧压力。",
        "template": [
          "起：确定核心价值，例如爱、自由、正义或安全，并呈现它的表面稳定。",
          "承：每场戏都让价值向反面移动，人物用错误策略试图挽回。",
          "转：价值跌入更深层的反面，例如不只是失去爱，而是爱变成控制。",
          "合：人物获得最后行动机会，但无论选择都必须付出不可抵消的代价。"
        ],
        "beats": [
          "价值正面",
          "第一次损伤",
          "虚假修复",
          "道德妥协",
          "负面反转",
          "负面的负面",
          "最后选择"
        ],
        "conflict": "主人公越想守住某种价值，越被迫用背叛该价值的方法行动。",
        "useCase": "现代悲剧、社会悲剧、心理悲剧。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "社会机器碾压结构",
        "source": "现代社会剧与自然主义戏剧传统",
        "summary": "不是单一反派制造灾难，而是阶级、组织、舆论、家庭结构共同把人物推向绝境。",
        "template": [
          "起：展示人物的日常位置和制度压力。",
          "承：人物尝试通过个人努力突围，却不断遇到看不见的规则。",
          "转：人物发现真正敌人不是某个人，而是一整套关系网络。",
          "合：人物失败、妥协或留下反抗火种，社会问题被清晰暴露。"
        ],
        "beats": [
          "日常压迫",
          "小胜利",
          "规则反噬",
          "盟友失效",
          "公开羞辱",
          "制度闭环",
          "社会余震"
        ],
        "conflict": "个人生存愿望与阶层、制度、家庭责任之间形成不可调和的挤压。",
        "useCase": "社会悲剧、现实主义家庭剧。",
        "video": {
          "url": "https://www.youtube.com/embed/dSr6mP-zxUc",
          "title": "What is Tragedy? Crash Course Theater",
          "source": "YouTube"
        }
      },
      {
        "name": "场景价值转变分析",
        "source": "罗伯特·麦基《故事》",
        "summary": "每场戏必须让价值荷载发生可识别变化，否则只是信息段落而不是戏剧场景。",
        "template": [
          "起：为场景标注开场价值，如自由/束缚、信任/怀疑。",
          "承：设置让人物行动受阻的转折压力。",
          "转：让场景价值从正转负、负转正或进入更深负面。",
          "合：用新价值状态迫使下一场戏改变策略。"
        ],
        "beats": [
          "开场价值",
          "欲望行动",
          "阻力升级",
          "转折点",
          "收场价值",
          "因果钩子"
        ],
        "conflict": "人物想维持旧价值状态，但场景事件迫使价值改变。",
        "useCase": "悲剧场景拆解、强冲突场面。",
        "video": {
          "url": "https://www.youtube.com/embed/eGV89GvZI8k",
          "title": "Building A Scene | Robert McKee",
          "source": "YouTube"
        }
      },
      {
        "name": "危机—高潮—结局三段落",
        "source": "罗伯特·麦基《故事》",
        "summary": "危机是必须选择的两难，高潮是不可撤回的行动，结局是行动后的新秩序。",
        "template": [
          "起：把人物逼到两个都要付代价的选择。",
          "承：让人物做出最终行动而非口头表态。",
          "转：行动改变核心价值并暴露人物本质。",
          "合：用结局展示世界和关系的最终状态。"
        ],
        "beats": [
          "两难危机",
          "最后犹豫",
          "高潮行动",
          "价值定格",
          "结局余波"
        ],
        "conflict": "人物无法同时保全欲望、道德与关系，只能选择一种代价。",
        "useCase": "悲剧终局、伦理困境。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "艾格里前提驱动悲剧",
        "source": "劳约斯·艾格里《戏剧写作艺术》",
        "summary": "用一句可辩论的前提统领人物、冲突和结局，让结局证明论点。",
        "template": [
          "起：写出前提，如“盲目的野心导致毁灭”。",
          "承：让主人公性格持续推进前提。",
          "转：对手用相反价值反驳前提。",
          "合：结局以行动后果证明或反讽前提。"
        ],
        "beats": [
          "前提出题",
          "性格驱动",
          "反命题",
          "升级证明",
          "不可逆后果",
          "论点落地"
        ],
        "conflict": "人物性格逻辑与世界反作用力持续碰撞。",
        "useCase": "命题型悲剧、人物悲剧。",
        "video": {
          "url": "https://www.youtube.com/embed/dSr6mP-zxUc",
          "title": "What is Tragedy? Crash Course Theater",
          "source": "YouTube"
        }
      },
      {
        "name": "反类型悲剧重审结构",
        "source": "琳达·希格《让好故事更好》",
        "summary": "借用观众熟悉的悲剧期待，再反向检查“毁灭是否必然”这一类型假设。",
        "template": [
          "起：建立典型悲剧处境和观众预期。",
          "承：提供看似可逃脱的选择路径。",
          "转：角色发现真正困住自己的不是命运而是旧叙事。",
          "合：结尾保留代价，但改变观众对悲剧责任的判断。"
        ],
        "beats": [
          "类型承诺",
          "逃脱窗口",
          "旧规则反扑",
          "自我重审",
          "代价改写",
          "余味"
        ],
        "conflict": "人物被旧类型命运牵引，同时试图重写自己应有的结局。",
        "useCase": "现代反悲剧、女性悲剧改写。",
        "video": {
          "url": "https://www.youtube.com/embed/dSr6mP-zxUc",
          "title": "What is Tragedy? Crash Course Theater",
          "source": "YouTube"
        }
      },
      {
        "name": "命运讽刺结构",
        "source": "古典悲剧与现代悲剧传统",
        "summary": "让人物以为自己正在逃离预言或错误，实际每个选择都把他推近结局。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "命运悲剧、家族诅咒、社会寓言。",
        "video": {
          "url": "https://www.youtube.com/embed/dSr6mP-zxUc",
          "title": "What is Tragedy? Crash Course Theater",
          "source": "YouTube"
        }
      },
      {
        "name": "道德盲点灾变结构",
        "source": "人物悲剧写作法",
        "summary": "人物并非邪恶，而是在某个道德盲点上持续误判，最终引发不可逆灾变。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "现代心理悲剧、权力悲剧。",
        "video": {
          "url": "https://www.youtube.com/embed/dSr6mP-zxUc",
          "title": "What is Tragedy? Crash Course Theater",
          "source": "YouTube"
        }
      },
      {
        "name": "牺牲悖论结构",
        "source": "悲剧牺牲叙事传统",
        "summary": "角色试图用牺牲拯救他人，却发现牺牲本身也制造新的伤害。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "伦理悲剧、战争悲剧。",
        "video": {
          "url": "https://www.youtube.com/embed/dSr6mP-zxUc",
          "title": "What is Tragedy? Crash Course Theater",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "comedy",
    "title": "喜剧",
    "meta": "闹剧 / 讽刺喜剧 / 情景喜剧 / 黑色喜剧",
    "description": "以误会、反差、欲望膨胀和秩序重组为动力，让人物在荒唐行动中暴露社会规则。",
    "frameworks": [
      {
        "name": "错位误会递进法",
        "source": "古典喜剧与情景喜剧传统",
        "summary": "让信息差不断升级，人物越解释越混乱，直到公开场面集中爆破。",
        "template": [
          "起：建立真实信息与人物误读。",
          "承：人物基于误读采取行动，造成第二层误会。",
          "转：所有误会在同一空间汇合。",
          "合：真相揭开，秩序重组，角色关系重新配对。"
        ],
        "beats": [
          "信息差",
          "错误身份",
          "谎言补丁",
          "空间挤压",
          "公开爆破",
          "真相落地",
          "关系复位"
        ],
        "conflict": "人物想维持体面或秘密，但每次遮掩都制造更荒唐的公开风险。",
        "useCase": "闹剧、情景喜剧、爱情喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: setup, reversal and escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "救猫咪喜剧节拍表",
        "source": "布莱克·斯奈德《救猫咪》",
        "summary": "以鲜明前提和强节拍推进，让喜剧角色在“坏主意”里完成成长或反讽。",
        "template": [
          "起：一句话前提足够好笑，主人公有明显缺陷。",
          "承：进入新世界，坏主意带来短暂收益。",
          "转：游戏规则崩坏，笑料转成危机。",
          "合：主人公承认缺陷，或被缺陷彻底吞没。"
        ],
        "beats": [
          "开场画面",
          "主题呈现",
          "催化事件",
          "进入第二幕",
          "游戏时间",
          "中点假胜",
          "坏人逼近",
          "灵魂黑夜",
          "第三幕解决"
        ],
        "conflict": "人物想靠捷径获得爱、钱、名声或自由，结果捷径暴露真正缺陷。",
        "useCase": "商业喜剧、黑色喜剧、都市喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/N_JxIzYfZGM",
          "title": "Save the Cat Beat Sheet — Interstellar Explained in 15 Beats",
          "source": "YouTube"
        }
      },
      {
        "name": "讽刺靶心结构",
        "source": "讽刺喜剧与黑色幽默传统",
        "summary": "设置一个社会靶心，让人物严肃地执行荒谬规则，喜剧性来自规则本身。",
        "template": [
          "起：定义被讽刺的制度、习俗或观念。",
          "承：人物认真遵守荒谬规则。",
          "转：规则被推到极端，正常人显得不合群。",
          "合：荒谬秩序短暂胜利或被反向揭穿。"
        ],
        "beats": [
          "靶心确立",
          "规则展示",
          "正常人闯入",
          "规则升级",
          "道德倒挂",
          "荒谬胜利",
          "冷笑结尾"
        ],
        "conflict": "正常价值与被集体承认的荒谬价值正面冲突。",
        "useCase": "讽刺喜剧、黑色喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: setup, reversal and escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "误解升级法",
        "source": "类型喜剧写作传统",
        "summary": "把一个小误会升级成身份、关系和公共场面的连锁灾难。",
        "template": [
          "起：设置一个可被误读的事实。",
          "承：角色为避免尴尬追加谎言。",
          "转：谎言被不同人以相反方式理解。",
          "合：在最大公共压力下真相爆开。"
        ],
        "beats": [
          "误读种子",
          "补丁谎言",
          "旁人介入",
          "关系错配",
          "公开爆点",
          "真相反弹"
        ],
        "conflict": "角色想用解释恢复控制，但解释本身变成新笑料。",
        "useCase": "情景喜剧、都市闹剧。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: setup, reversal and escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "角色关系颠倒结构",
        "source": "喜剧人物关系法",
        "summary": "让强弱、主仆、专家与外行关系发生颠倒，制造身份反差和行动笑点。",
        "template": [
          "起：明确原始权力关系。",
          "承：事件迫使弱者掌握关键资源。",
          "转：强者不得不服从荒唐规则。",
          "合：关系复位或形成新的平衡。"
        ],
        "beats": [
          "权力标定",
          "小人物得势",
          "强者失控",
          "规则倒挂",
          "关系爆破",
          "新秩序"
        ],
        "conflict": "角色维护旧等级，但情境不断奖励相反行为。",
        "useCase": "职场喜剧、家庭喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: setup, reversal and escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "反转时机三拍法",
        "source": "喜剧节奏技法",
        "summary": "用建立、重复、打破三拍控制笑点，让反转既意外又可理解。",
        "template": [
          "起：建立观众能识别的行为模式。",
          "承：重复一次强化预期。",
          "转：第三次以相反动作或更高代价打破。",
          "合：让反转后果进入剧情而非只停留在段子。"
        ],
        "beats": [
          "建立",
          "重复",
          "偏移",
          "反转",
          "后果",
          "二次回收"
        ],
        "conflict": "观众预期与角色实际反应产生落差。",
        "useCase": "桥段喜剧、台词喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: setup, reversal and escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "救猫咪“傻瓜获胜”类型",
        "source": "布莱克·斯奈德《救猫咪》类型系统",
        "summary": "看似不合格的人物进入规则严密世界，凭真诚或反常识赢得局部胜利。",
        "template": [
          "起：展示角色不适配主流规则。",
          "承：角色误打误撞进入更高压力场。",
          "转：荒唐方法暴露系统漏洞。",
          "合：角色赢得胜利或让系统显形。"
        ],
        "beats": [
          "不适配",
          "误入",
          "试错",
          "群体嘲笑",
          "意外有效",
          "系统露馅",
          "反常识胜利"
        ],
        "conflict": "笨拙人物的真实需求与聪明系统的虚假规则冲突。",
        "useCase": "励志喜剧、职场喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/4rUI0vZUvsM",
          "title": "The Save the Cat Beat Sheet: The Ultimate Guide",
          "source": "YouTube"
        }
      },
      {
        "name": "地位游戏喜剧结构",
        "source": "Keith Johnstone 即兴戏剧理论",
        "summary": "通过地位升降和权力错位制造笑点，让人物在争夺体面时不断失态。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "职场喜剧、家庭喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: Setup, Reversal and Escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "规则过度执行法",
        "source": "讽刺喜剧结构",
        "summary": "人物极其认真地执行荒谬规则，喜剧性来自规则被推到极端。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "制度讽刺、黑色喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: Setup, Reversal and Escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "重复递增笑点结构",
        "source": "喜剧节奏技法",
        "summary": "用重复建立预期，再通过幅度递增和最后偏转制造笑点。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "桥段喜剧、情景喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: Setup, Reversal and Escalation",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "tragicomedy",
    "title": "悲喜剧",
    "meta": "苦笑 / 反高潮 / 温柔残酷",
    "description": "把悲剧处境和喜剧动作并置，让观众在笑中意识到人物并未真正逃离困境。",
    "frameworks": [
      {
        "name": "笑中含痛双轨结构",
        "source": "契诃夫式现代戏剧",
        "summary": "外层是琐碎、笨拙和滑稽行动，内层是失落、无力和时代变迁。",
        "template": [
          "起：人物用玩笑掩饰真正焦虑。",
          "承：日常小事积累成无法言说的失败。",
          "转：人物短暂看清处境，却仍用玩笑躲开。",
          "合：生活继续，悲伤没有宣判却已经发生。"
        ],
        "beats": [
          "日常闲谈",
          "轻微荒唐",
          "愿望落空",
          "沉默时刻",
          "假性热闹",
          "反高潮",
          "余味"
        ],
        "conflict": "人物想把痛苦降格成玩笑，但现实持续证明玩笑无法改变处境。",
        "useCase": "悲喜剧、生活流正剧。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: setup, reversal and escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "反高潮落点法",
        "source": "现代主义戏剧与黑色幽默",
        "summary": "让故事朝重大解决推进，却用琐碎、滑稽或无解的方式落地。",
        "template": [
          "起：提出看似重大的人生问题。",
          "承：人物用过度认真方式追求答案。",
          "转：答案迟迟不来，行动变成重复。",
          "合：结尾避开宣判，只留下荒唐的日常动作。"
        ],
        "beats": [
          "大问题",
          "小行动",
          "重复失败",
          "空洞仪式",
          "短暂希望",
          "反高潮",
          "循环感"
        ],
        "conflict": "人物要求意义，但世界只提供动作、等待和重复。",
        "useCase": "荒诞悲喜剧、黑色喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "麦基主情节—次情节对照法",
        "source": "罗伯特·麦基《故事》",
        "summary": "主情节走向损失，次情节保留滑稽或温柔反照，让结尾形成复合情绪。",
        "template": [
          "起：主线确立严肃欲望，副线确立轻喜关系。",
          "承：两条线用相似问题给出相反语气。",
          "转：副线笑点反而揭示主线真相。",
          "合：主线付出代价，副线提供余味而非简单安慰。"
        ],
        "beats": [
          "双线开局",
          "语气反差",
          "副线映照",
          "主线下坠",
          "反照揭示",
          "苦笑结尾"
        ],
        "conflict": "人物用轻松动作处理沉重处境，观众同时感到好笑与刺痛。",
        "useCase": "苦笑现实剧、都市悲喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "希格次情节功能框架",
        "source": "琳达·希格《让好故事更好》",
        "summary": "次情节不只是填充，而是用关系、主题或反讽放大主线含义。",
        "template": [
          "起：为次情节指定功能：镜像、反差、压力或主题补充。",
          "承：让次情节在关键节点改变主角选择。",
          "转：次情节暴露主线盲点。",
          "合：回收次情节，强化而非分散主线。"
        ],
        "beats": [
          "功能定位",
          "关系入口",
          "镜像事件",
          "压力回流",
          "盲点揭露",
          "主题回收"
        ],
        "conflict": "主角以为副线是旁枝，实际副线持续挑战其核心判断。",
        "useCase": "悲喜剧群像、生活流剧集。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: setup, reversal and escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "哈蒙故事圈苦笑版",
        "source": "丹·哈蒙 Story Circle",
        "summary": "用八步循环展示人物短暂越界后回到日常，但已无法完全装作无事发生。",
        "template": [
          "起：人物处在熟悉但不满足的状态。",
          "承：想要某物并进入陌生处境。",
          "转：付出代价获得短暂结果。",
          "合：回到原点，但心理位置已改变。"
        ],
        "beats": [
          "你",
          "需要",
          "前往",
          "寻找",
          "得到",
          "付代价",
          "返回",
          "改变"
        ],
        "conflict": "人物想改变生活，却只能改变自己看待生活的方式。",
        "useCase": "半小时悲喜剧、生活流故事。",
        "video": {
          "url": "https://www.youtube.com/embed/RG4WcRAgm7Y",
          "title": "Dan Harmon Story Circle explained",
          "source": "YouTube"
        }
      },
      {
        "name": "小胜利大失败结构",
        "source": "现代悲喜剧写作",
        "summary": "角色在具体小目标上获胜，却在更大的生活命题上失落，形成复杂余味。",
        "template": [
          "起：给角色一个微小、具体、可笑的目标。",
          "承：角色投入过量精力追求小目标。",
          "转：小目标成功暴露更大失败。",
          "合：人物带着小胜利回到未解决的人生。"
        ],
        "beats": [
          "小目标",
          "过度投入",
          "荒唐代价",
          "局部成功",
          "意义落空",
          "余味"
        ],
        "conflict": "人物用可完成的小事替代无法解决的大问题。",
        "useCase": "黑色幽默、温柔残酷故事。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: setup, reversal and escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "温柔反讽结构",
        "source": "现代悲喜剧写作",
        "summary": "让角色以轻松方式处理沉重现实，结尾以温柔反讽替代胜负宣判。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "生活流、现实题材。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "失败者尊严结构",
        "source": "小人物悲喜剧传统",
        "summary": "角色在大目标上失败，却在细小行动中保住尊严。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "小人物故事、都市悲喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "日常裂缝结构",
        "source": "契诃夫式戏剧传统",
        "summary": "从日常闲谈和小事件中逐步显露关系裂缝和生活困局。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "家庭戏、生活流。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "苦笑尾声结构",
        "source": "黑色幽默叙事",
        "summary": "故事解决表层问题，却用尾声暴露更大的荒诞现实仍在继续。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "黑色幽默、社会悲喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "social",
    "title": "正剧/社会剧",
    "meta": "现实主义 / 家庭 / 职场 / 制度",
    "description": "以人物目标与社会关系网络的碰撞为核心，强调现实压力、伦理选择和群像关系。",
    "frameworks": [
      {
        "name": "问题剧剥洋葱结构",
        "source": "易卜生问题剧传统",
        "summary": "从一个家庭或公共事件切入，逐层揭开谎言、契约和社会规范。",
        "template": [
          "起：一个看似稳定的社会关系出现裂缝。",
          "承：过往秘密逐层被迫浮现。",
          "转：人物发现维持秩序本身就是问题。",
          "合：主人公作出公开选择，社会问题被抛给观众。"
        ],
        "beats": [
          "稳定表面",
          "来信/证据",
          "旧事回潮",
          "关系审判",
          "公开摊牌",
          "离开/留下",
          "问题悬置"
        ],
        "conflict": "个人真实需求与家庭、法律、名誉、性别规范冲突。",
        "useCase": "家庭正剧、社会问题剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101: Super Basic Shit",
          "source": "YouTube"
        }
      },
      {
        "name": "群像压力锅结构",
        "source": "现代社会剧与美剧群像法",
        "summary": "把不同阶层和立场的人物压进同一事件，用多视角呈现社会张力。",
        "template": [
          "起：共同事件把人物聚集。",
          "承：每个人的利益和秘密开始互相牵连。",
          "转：公共危机迫使所有人表态。",
          "合：事件解决或失控，群体关系重新分层。"
        ],
        "beats": [
          "事件入口",
          "立场分化",
          "秘密互换",
          "联盟形成",
          "公共爆点",
          "代价分摊",
          "新秩序"
        ],
        "conflict": "公共利益、个人利益与道德自我形象之间互相撕扯。",
        "useCase": "社会剧、职场剧、社区群像。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101: Super Basic Shit",
          "source": "YouTube"
        }
      },
      {
        "name": "特鲁比道德争论结构",
        "source": "约翰·特鲁比《故事解剖》",
        "summary": "让社会事件成为道德争论场，人物通过行动证明各自价值观的代价。",
        "template": [
          "起：提出一个无法用口号解决的道德问题。",
          "承：让不同角色用行动捍卫不同答案。",
          "转：主角发现自己的答案也伤害了他人。",
          "合：用最终选择呈现新的道德立场。"
        ],
        "beats": [
          "道德问题",
          "立场分布",
          "行动证明",
          "代价显形",
          "自我揭示",
          "新立场"
        ],
        "conflict": "每个角色都认为自己正当，但行动后果互相伤害。",
        "useCase": "社会议题剧、群像正剧。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "特鲁比角色网络",
        "source": "约翰·特鲁比《故事解剖》",
        "summary": "用角色网络制造主题对照，每个重要角色都代表主角问题的一种变体。",
        "template": [
          "起：定义主角弱点和主题问题。",
          "承：安排盟友、对手、镜像角色分别折射该问题。",
          "转：让角色关系迫使主角看见自我盲点。",
          "合：通过网络变化展示社会关系的新秩序。"
        ],
        "beats": [
          "弱点中心",
          "镜像角色",
          "反面角色",
          "盟友压力",
          "关系重排",
          "主题定格"
        ],
        "conflict": "主角不是对抗单个敌人，而是被一整张价值网络审视。",
        "useCase": "家庭群像、职场群像。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure and Character Arc Overview",
          "source": "YouTube"
        }
      },
      {
        "name": "麦基类型约定检查表",
        "source": "罗伯特·麦基《故事》",
        "summary": "先确认社会剧承诺的真实压力、制度阻力和伦理代价，再判断每场戏是否兑现类型约定。",
        "template": [
          "起：列出观众期待的制度场域和现实问题。",
          "承：让类型约定逐步出现而非只做背景。",
          "转：通过反约定制造新鲜感。",
          "合：结尾回应最初承诺的社会问题。"
        ],
        "beats": [
          "约定清单",
          "现实入口",
          "制度阻力",
          "反约定",
          "伦理代价",
          "承诺兑现"
        ],
        "conflict": "故事既要满足现实主义可信度，又要避免成为议题说明书。",
        "useCase": "现实主义长片、社会问题剧。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "菲尔德社会三幕式",
        "source": "席德·菲尔德三幕式",
        "summary": "用设置、对抗、解决组织社会议题，两个情节点把私人问题推向公共冲突。",
        "template": [
          "起：第一幕建立人物处境和社会问题。",
          "承：Plot Point I 迫使人物进入公开对抗。",
          "转：中点改变问题规模，Plot Point II 逼出最后方案。",
          "合：第三幕用行动给出阶段性结果。"
        ],
        "beats": [
          "设置",
          "Plot Point I",
          "对抗升级",
          "Midpoint",
          "Plot Point II",
          "解决"
        ],
        "conflict": "人物的私人目标被社会结构放大成公共选择。",
        "useCase": "社会正剧、职场剧。",
        "video": {
          "url": "https://www.youtube.com/embed/1EO7aDRuDws",
          "title": "How To Write A 3 Act Structure For Film",
          "source": "YouTube"
        }
      },
      {
        "name": "制度剖面结构",
        "source": "现实主义社会剧",
        "summary": "以一个案件或事件切开制度剖面，让不同角色展示结构性压力。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "职场剧、社会议题剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "家庭伦理审判结构",
        "source": "家庭正剧传统",
        "summary": "把家庭聚会或危机变成伦理审判场，让旧账和责任同时浮现。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "家庭剧、代际冲突。",
        "video": {
          "url": "https://www.youtube.com/embed/eGV89GvZI8k",
          "title": "Building A Scene | Robert McKee",
          "source": "YouTube"
        }
      },
      {
        "name": "多阶层交叉叙事",
        "source": "群像社会剧结构",
        "summary": "让不同阶层人物因同一事件交叉，呈现社会问题的多重面向。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "城市群像、社会议题片。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "公共事件私人化结构",
        "source": "现代现实主义影视",
        "summary": "用公共事件逼出私人关系的真实裂缝，避免议题空转。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "公共议题剧、现实主义长片。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "history",
    "title": "历史剧",
    "meta": "编年 / 传记 / 宫廷 / 历史反思",
    "description": "在已知历史结局中制造过程悬念，重点不是“会发生什么”，而是人物如何抵达必然。",
    "frameworks": [
      {
        "name": "大时代小人物切片法",
        "source": "历史剧与新历史主义写作",
        "summary": "用普通人物的命运切入大事件，避免史料堆砌。",
        "template": [
          "起：小人物在历史转折前拥有具体愿望。",
          "承：大事件逐步侵入私人生活。",
          "转：人物发现中立不再可能。",
          "合：个人命运成为时代切片。"
        ],
        "beats": [
          "私人愿望",
          "时代传闻",
          "权力进入",
          "立场选择",
          "牺牲/背叛",
          "历史落款",
          "后见之明"
        ],
        "conflict": "个人幸福与时代立场、国家叙事或家族责任冲突。",
        "useCase": "近现代历史剧、战争背景剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101: Super Basic Shit",
          "source": "YouTube"
        }
      },
      {
        "name": "权力棋局结构",
        "source": "莎士比亚历史剧与宫廷剧传统",
        "summary": "把历史人物放入权力交换、继承合法性和背叛网络中推进。",
        "template": [
          "起：权力真空或继承问题出现。",
          "承：多方结盟与背叛交替。",
          "转：合法性危机公开化。",
          "合：胜者获得位置，但新危机已经埋下。"
        ],
        "beats": [
          "权力缺口",
          "密谋",
          "盟约",
          "背叛",
          "公开审判",
          "流血上位",
          "新隐患"
        ],
        "conflict": "合法性、血缘、能力和欲望之间互相否定。",
        "useCase": "宫廷剧、历史权谋剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101: Super Basic Shit",
          "source": "YouTube"
        }
      },
      {
        "name": "主情节—次情节历史并置",
        "source": "罗伯特·麦基《故事》",
        "summary": "用主情节处理历史事件推进，用次情节处理私人代价，两线在高潮处互相解释。",
        "template": [
          "起：主线定义历史目标，副线定义私人关系。",
          "承：每次历史胜利都改变私人关系。",
          "转：私人选择反过来影响历史行动。",
          "合：历史结局与私人结局形成互文。"
        ],
        "beats": [
          "历史目标",
          "私人牵连",
          "公共转折",
          "私人背叛",
          "双线合流",
          "余波"
        ],
        "conflict": "人物既服务时代行动，又被私人情感拖回具体代价。",
        "useCase": "传记片、历史群像。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "沃格勒历史英雄旅程",
        "source": "克里斯托弗·沃格勒《作家之旅》",
        "summary": "把历史人物的公共使命拆成可拍摄的十二阶段旅程。",
        "template": [
          "起：普通世界中展示人物的时代位置。",
          "承：召唤与门槛让人物进入历史漩涡。",
          "转：考验、深洞和奖赏改变其使命理解。",
          "合：带着代价返回公共世界。"
        ],
        "beats": [
          "普通世界",
          "冒险召唤",
          "拒绝召唤",
          "遇见导师",
          "越过门槛",
          "考验盟友敌人",
          "接近深洞",
          "严峻考验",
          "奖赏",
          "返回之路",
          "复活",
          "携灵药归来"
        ],
        "conflict": "个人恐惧与时代使命之间不断互相要求。",
        "useCase": "英雄传记、历史冒险。",
        "video": {
          "url": "https://www.youtube.com/embed/-D4hx3ETcU8",
          "title": "Christopher Vogler's 12 Steps of The Writer's Journey",
          "source": "YouTube"
        }
      },
      {
        "name": "后见之明悬念结构",
        "source": "历史剧叙事法",
        "summary": "观众知道历史结局，悬念来自人物何时理解局势、以何种代价抵达结局。",
        "template": [
          "起：把已知结局转化为人物未知困境。",
          "承：让人物不断误判历史趋势。",
          "转：人物发现自己已在不可逆进程中。",
          "合：结局发生，但重点落在认知迟到。"
        ],
        "beats": [
          "已知结果",
          "局内误判",
          "选择窗口",
          "不可逆",
          "认知迟到",
          "历史落款"
        ],
        "conflict": "观众的后见之明与人物的局内盲区形成张力。",
        "useCase": "历史正剧、传记悲剧。",
        "video": {
          "url": "https://www.youtube.com/embed/dSr6mP-zxUc",
          "title": "What is Tragedy? Crash Course Theater",
          "source": "YouTube"
        }
      },
      {
        "name": "前提驱动历史论辩",
        "source": "劳约斯·艾格里《戏剧写作艺术》",
        "summary": "用明确前提组织史实取舍，让历史剧围绕一个可争辩论点行动。",
        "template": [
          "起：把史实整理成一句论点。",
          "承：选择能推动论点的人物行动。",
          "转：安排反论点角色挑战主线。",
          "合：用结局呈现论点成立、失败或反讽。"
        ],
        "beats": [
          "前提",
          "史实取舍",
          "反论点",
          "行动证明",
          "代价",
          "论点余波"
        ],
        "conflict": "历史复杂性与戏剧论点之间互相拉扯。",
        "useCase": "历史反思剧、政治传记。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "编年断点结构",
        "source": "历史剧结构法",
        "summary": "选取历史长河中的关键断点，用断点前后的人物选择串联时代变化。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "编年历史剧、传记片。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "传记内在转折结构",
        "source": "人物传记片写作",
        "summary": "不按生平流水账推进，而按人物信念变化选取关键事件。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "人物传记、历史人物片。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "历史反讽结构",
        "source": "新历史主义叙事",
        "summary": "利用观众后见之明，让人物的胜利在历史层面呈现反讽。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "历史反思剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "时代见证人结构",
        "source": "历史见证叙事",
        "summary": "以旁观者或边缘人物见证大事件，降低史料压力并提升情感入口。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "战争剧、近现代史。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "absurd",
    "title": "荒诞剧",
    "meta": "贝克特式 / 荒诞现实主义",
    "description": "以等待、循环、语言失效和目的缺席为核心，让观众感到存在处境本身的荒谬。",
    "frameworks": [
      {
        "name": "等待—循环结构",
        "source": "贝克特式荒诞剧",
        "summary": "人物等待一个不会真正到来的对象，戏剧推进来自重复差异。",
        "template": [
          "起：人物被困在一个简单场景中等待。",
          "承：他们用语言、游戏和争吵填补空白。",
          "转：等待对象的消息出现，但只带来延期。",
          "合：人物决定离开却没有行动，循环继续。"
        ],
        "beats": [
          "等待设定",
          "语言游戏",
          "身体动作",
          "外来者",
          "希望延期",
          "离开宣言",
          "原地不动"
        ],
        "conflict": "人物需要意义维持行动，但世界只给出延迟和重复。",
        "useCase": "贝克特式荒诞剧。",
        "video": {
          "url": "https://www.youtube.com/embed/EQkW2SSQ2H0",
          "title": "The Theatre of the Absurd",
          "source": "YouTube"
        }
      },
      {
        "name": "现实规训荒诞化结构",
        "source": "荒诞现实主义",
        "summary": "保留现实场景，却让规章、流程、话术极端化，制造荒诞感。",
        "template": [
          "起：人物进入一个熟悉机构或生活流程。",
          "承：规则越来越细，目标越来越模糊。",
          "转：人物发现规则服务于规则本身。",
          "合：人物被同化、逃离或成为新规则执行者。"
        ],
        "beats": [
          "正常入口",
          "流程增加",
          "语言空转",
          "目标消失",
          "身份错位",
          "荒诞服从",
          "冷结尾"
        ],
        "conflict": "真实的人与空转系统之间的冲突。",
        "useCase": "办公室荒诞剧、社会寓言。",
        "video": {
          "url": "https://www.youtube.com/embed/eGV89GvZI8k",
          "title": "Building A Scene | Robert McKee",
          "source": "YouTube"
        }
      },
      {
        "name": "反情节循环结构",
        "source": "罗伯特·麦基《故事》",
        "summary": "用反情节打破因果、时间和现实一致性，让荒诞感来自结构本身。",
        "template": [
          "起：建立一个看似可追踪的目标。",
          "承：打断因果链，让行动不产生预期结果。",
          "转：让时间、身份或现实规则发生循环。",
          "合：拒绝封闭解决，留下存在性困境。"
        ],
        "beats": [
          "目标假设",
          "因果断裂",
          "重复变体",
          "现实滑移",
          "非封闭",
          "循环余波"
        ],
        "conflict": "人物需要因果解释，但世界拒绝提供稳定规则。",
        "useCase": "实验戏剧、荒诞短片。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "对白失效结构",
        "source": "罗伯特·麦基《故事》对白功能",
        "summary": "让对白本应承担的行动、揭示、信息功能逐步失效，暴露人物无法真正沟通。",
        "template": [
          "起：人物用对白交换表面信息。",
          "承：对白开始偏离行动目标。",
          "转：话语揭示的不是真相，而是沟通失败。",
          "合：沉默或重复成为最终动作。"
        ],
        "beats": [
          "信息交换",
          "答非所问",
          "语言空转",
          "心理泄露",
          "沉默",
          "重复"
        ],
        "conflict": "人物想靠语言建立关系，但语言持续制造隔离。",
        "useCase": "荒诞对话剧、室内戏。",
        "video": {
          "url": "https://www.youtube.com/embed/eGV89GvZI8k",
          "title": "Building A Scene | Robert McKee",
          "source": "YouTube"
        }
      },
      {
        "name": "系统目的消失法",
        "source": "现代荒诞与官僚剧传统",
        "summary": "人物执行一套越来越复杂的流程，却再也找不到流程最初服务的目的。",
        "template": [
          "起：人物接到明确任务。",
          "承：流程和审批不断增加。",
          "转：所有人都无法解释任务意义。",
          "合：人物继续执行无意义程序或被系统吞没。"
        ],
        "beats": [
          "任务",
          "表格",
          "层级",
          "目标消失",
          "互相推诿",
          "荒诞执行"
        ],
        "conflict": "人的目的性与制度自我复制冲突。",
        "useCase": "办公室荒诞、官僚讽刺。",
        "video": {
          "url": "https://www.youtube.com/embed/EQkW2SSQ2H0",
          "title": "The Theatre of the Absurd",
          "source": "YouTube"
        }
      },
      {
        "name": "身份漂移结构",
        "source": "荒诞派戏剧传统",
        "summary": "通过名字、身份和角色功能的滑移，让人物无法证明自己是谁。",
        "template": [
          "起：人物拥有一个可识别身份。",
          "承：他人用错误身份称呼并安排职责。",
          "转：人物开始接受或反复否认身份错置。",
          "合：身份成为可替换标签。"
        ],
        "beats": [
          "身份声明",
          "错认",
          "职责错配",
          "自我怀疑",
          "标签替换",
          "冷结尾"
        ],
        "conflict": "人物坚持自我定义，但外部世界只承认标签功能。",
        "useCase": "身份荒诞剧、寓言剧。",
        "video": {
          "url": "https://www.youtube.com/embed/EQkW2SSQ2H0",
          "title": "The Theatre of the Absurd",
          "source": "YouTube"
        }
      },
      {
        "name": "语言迷宫结构",
        "source": "荒诞派戏剧",
        "summary": "角色不断说话却无法抵达意义，语言本身成为困住人物的迷宫。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "荒诞对话剧。",
        "video": {
          "url": "https://www.youtube.com/embed/EQkW2SSQ2H0",
          "title": "The Theatre of the Absurd",
          "source": "YouTube"
        }
      },
      {
        "name": "任务无限延期结构",
        "source": "现代荒诞叙事",
        "summary": "人物执行一个始终不能完成的任务，延期成为存在困境。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "办公室荒诞、寓言剧。",
        "video": {
          "url": "https://www.youtube.com/embed/EQkW2SSQ2H0",
          "title": "The Theatre of the Absurd",
          "source": "YouTube"
        }
      },
      {
        "name": "物件支配结构",
        "source": "荒诞舞台传统",
        "summary": "一个物件获得不成比例的重要性，支配人物行动和关系。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "舞台荒诞剧、短片。",
        "video": {
          "url": "https://www.youtube.com/embed/EQkW2SSQ2H0",
          "title": "The Theatre of the Absurd",
          "source": "YouTube"
        }
      },
      {
        "name": "规则自我繁殖结构",
        "source": "官僚荒诞叙事",
        "summary": "规则不断产生新规则，人物逐步忘记原始目标。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "制度讽刺、荒诞现实主义。",
        "video": {
          "url": "https://www.youtube.com/embed/EQkW2SSQ2H0",
          "title": "The Theatre of the Absurd",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "musical",
    "title": "音乐剧",
    "meta": "歌舞叙事 / 情感高潮 / 群体场面",
    "description": "歌曲不是装饰，而是人物无法用对白承载的欲望、选择和转变。",
    "frameworks": [
      {
        "name": "I Want 歌驱动结构",
        "source": "百老汇音乐剧传统",
        "summary": "用“I Want”歌曲定义人物欲望，随后每首歌推动关系或选择升级。",
        "template": [
          "起：开场建立世界规则，主角唱出核心愿望。",
          "承：愿望遇到现实阻力，歌曲展开内心和关系。",
          "转：中场大歌改变方向或扩大赌注。",
          "合：终曲让人物愿望变形或付出代价。"
        ],
        "beats": [
          "开场号",
          "I Want歌",
          "喜剧/关系歌",
          "冲突二重唱",
          "中场大歌",
          "十一点钟歌",
          "终曲"
        ],
        "conflict": "人物唱出的愿望与现实身份、群体规范或爱情选择冲突。",
        "useCase": "音乐剧、歌舞片。",
        "video": {
          "url": "https://www.youtube.com/embed/g0yqGx6VJcM",
          "title": "How Musicals Tell Stories",
          "source": "YouTube"
        }
      },
      {
        "name": "主题变奏复现法",
        "source": "音乐戏剧结构",
        "summary": "用旋律主题反复变形标记人物关系变化。",
        "template": [
          "起：建立主旋律与核心关系。",
          "承：旋律在不同场景中变奏。",
          "转：旋律被反调或中断，暗示关系断裂。",
          "合：主题复现但意义已改变。"
        ],
        "beats": [
          "主题呈示",
          "轻变奏",
          "对唱",
          "反调",
          "沉默",
          "复现",
          "和声/不和声"
        ],
        "conflict": "音乐主题代表的理想与剧情现实之间不断偏移。",
        "useCase": "严肃音乐剧、情感音乐剧。",
        "video": {
          "url": "https://www.youtube.com/embed/g0yqGx6VJcM",
          "title": "How Musicals Tell Stories",
          "source": "YouTube"
        }
      },
      {
        "name": "音乐剧三幕式节拍",
        "source": "席德·菲尔德三幕式改写",
        "summary": "用两大情节点和中点安排歌曲功能，让音乐承担转折而非装饰。",
        "template": [
          "起：第一幕用开场号和I Want歌完成设置。",
          "承：Plot Point I 用歌曲把主角推入新世界。",
          "转：中点大歌改变欲望方向，Plot Point II 逼出最后选择。",
          "合：终曲回收主题与人物弧线。"
        ],
        "beats": [
          "开场号",
          "I Want",
          "Plot Point I",
          "Fun and Games",
          "Midpoint大歌",
          "Plot Point II",
          "十一点钟歌",
          "终曲"
        ],
        "conflict": "人物唱出的情感与行动必须在结构节点上发生改变。",
        "useCase": "音乐电影、百老汇结构开发。",
        "video": {
          "url": "https://www.youtube.com/embed/1EO7aDRuDws",
          "title": "How To Write A 3 Act Structure For Film",
          "source": "YouTube"
        }
      },
      {
        "name": "麦基场景价值歌段法",
        "source": "罗伯特·麦基《故事》",
        "summary": "每首歌都承担一个价值转变：从压抑到表达、从亲密到分离或从混乱到决心。",
        "template": [
          "起：标注歌前价值状态。",
          "承：让音乐释放对白无法承载的行动或揭示。",
          "转：歌曲内部完成情绪和关系反转。",
          "合：歌后场景进入新价值状态。"
        ],
        "beats": [
          "歌前价值",
          "音乐触发",
          "情绪展开",
          "关系反转",
          "歌后价值"
        ],
        "conflict": "人物不能再用对白隐藏欲望，只能用歌暴露本质。",
        "useCase": "歌曲功能设计、关键唱段。",
        "video": {
          "url": "https://www.youtube.com/embed/eGV89GvZI8k",
          "title": "Building A Scene | Robert McKee",
          "source": "YouTube"
        }
      },
      {
        "name": "对白—歌曲功能切换",
        "source": "罗伯特·麦基《故事》对白功能",
        "summary": "当对白无法同时完成行动、揭示和信息传递时，切入歌曲承担更高强度功能。",
        "template": [
          "起：对白承载信息但压住情感。",
          "承：行动目标逼近，人物无法继续说普通话。",
          "转：歌曲揭示心理本质或改变关系。",
          "合：回到对白时关系已不可逆。"
        ],
        "beats": [
          "对白信息",
          "情感溢出",
          "入歌",
          "心理揭示",
          "行动改变",
          "回到对白"
        ],
        "conflict": "人物想保持表面控制，但音乐迫使其公开真实欲望。",
        "useCase": "音乐剧对白转歌、情感高潮。",
        "video": {
          "url": "https://www.youtube.com/embed/eGV89GvZI8k",
          "title": "Building A Scene | Robert McKee",
          "source": "YouTube"
        }
      },
      {
        "name": "群舞社会网络结构",
        "source": "音乐剧群像传统",
        "summary": "用群舞和合唱把个体欲望放进社区、阶层或时代网络中。",
        "template": [
          "起：群体号码展示世界规则。",
          "承：个体歌曲与群体歌曲互相对照。",
          "转：群舞把私人选择变成公共事件。",
          "合：终曲呈现群体秩序的改变。"
        ],
        "beats": [
          "群体开场",
          "个体愿望",
          "关系对位",
          "公共爆发",
          "合唱审判",
          "新群体"
        ],
        "conflict": "个人声音与群体节奏之间争夺叙事主导权。",
        "useCase": "群像音乐剧、校园/社区音乐剧。",
        "video": {
          "url": "https://www.youtube.com/embed/g0yqGx6VJcM",
          "title": "How Musicals Tell Stories",
          "source": "YouTube"
        }
      },
      {
        "name": "十一点钟歌结构",
        "source": "百老汇音乐剧传统",
        "summary": "在终局前安排人物最强自我揭示歌曲，推动最后选择。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "音乐剧终局、角色弧线。",
        "video": {
          "url": "https://www.youtube.com/embed/g0yqGx6VJcM",
          "title": "How Musicals Tell Stories",
          "source": "YouTube"
        }
      },
      {
        "name": "二重唱冲突结构",
        "source": "音乐戏剧写作",
        "summary": "让两个人在同一旋律或对位旋律中表达相反目标。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "爱情音乐剧、群像音乐剧。",
        "video": {
          "url": "https://www.youtube.com/embed/g0yqGx6VJcM",
          "title": "How Musicals Tell Stories",
          "source": "YouTube"
        }
      },
      {
        "name": "开场世界规则歌",
        "source": "音乐剧开场结构",
        "summary": "用开场号同时交代世界规则、群体关系和主角缺口。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "音乐剧开场、歌舞片。",
        "video": {
          "url": "https://www.youtube.com/embed/g0yqGx6VJcM",
          "title": "How Musicals Tell Stories",
          "source": "YouTube"
        }
      },
      {
        "name": "歌舞场面升级结构",
        "source": "歌舞片结构法",
        "summary": "每个歌舞段落都必须在情感、关系或公共空间上升级。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "歌舞电影、舞台音乐剧。",
        "video": {
          "url": "https://www.youtube.com/embed/g0yqGx6VJcM",
          "title": "How Musicals Tell Stories",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "monologue",
    "title": "独角戏",
    "meta": "自述 / 见证 / 记忆 / 现场审判",
    "description": "用一个演员承载多重时间、人物和视角，核心是“为什么现在必须说”。",
    "frameworks": [
      {
        "name": "见证者证词结构",
        "source": "纪录剧场与独白剧传统",
        "summary": "人物向观众作证，逐步暴露自己也是事件参与者。",
        "template": [
          "起：人物声明自己只是讲述者。",
          "承：证词越来越具体，情绪开始失控。",
          "转：观众发现讲述者与事件的责任关系。",
          "合：证词变成自我审判或请求理解。"
        ],
        "beats": [
          "开场声明",
          "事实罗列",
          "细节泄露",
          "情绪破口",
          "责任反转",
          "沉默",
          "最后证词"
        ],
        "conflict": "讲述者想控制叙述，但真相不断突破他的叙述策略。",
        "useCase": "证词独角戏、社会议题独白。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101: Super Basic Shit",
          "source": "YouTube"
        }
      },
      {
        "name": "记忆房间结构",
        "source": "心理独角戏传统",
        "summary": "把舞台当成记忆空间，物件触发不同时间层。",
        "template": [
          "起：一个物件打开记忆。",
          "承：物件串联人物关系与创伤。",
          "转：关键物件揭开被压抑的事实。",
          "合：人物重新摆放物件，完成心理位置变化。"
        ],
        "beats": [
          "物件入口",
          "时间跳切",
          "角色模仿",
          "空位对话",
          "创伤核心",
          "重新命名",
          "离开房间"
        ],
        "conflict": "人物想保存旧记忆，但必须改写自己与过去的关系。",
        "useCase": "心理独白、女性独角戏。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101: Super Basic Shit",
          "source": "YouTube"
        }
      },
      {
        "name": "欲望与需求独白剖面",
        "source": "罗伯特·麦基《故事》人物设计",
        "summary": "用独白同时展示人物表面欲望和真实需求，让观众听见自我辩护与心理本质的裂缝。",
        "template": [
          "起：人物说出自己以为想要的东西。",
          "承：细节暴露真正需求。",
          "转：表面行为与心理本质产生矛盾。",
          "合：人物说服不了观众，也说服不了自己。"
        ],
        "beats": [
          "表面欲望",
          "自我辩护",
          "细节泄露",
          "需求显影",
          "本质暴露",
          "沉默"
        ],
        "conflict": "人物想控制自我形象，但独白持续泄露心理本质。",
        "useCase": "心理独角戏、角色试镜段落。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "独白危机—高潮—结局",
        "source": "罗伯特·麦基《故事》",
        "summary": "把独白组织成一次现场选择：人物不是回忆过去，而是在观众面前完成不可逆判断。",
        "template": [
          "起：把人物带到必须开口的危机。",
          "承：独白推进到两难选择。",
          "转：一句话或一个动作成为高潮。",
          "合：结尾展示说出口后的新状态。"
        ],
        "beats": [
          "必须说",
          "回避",
          "逼近两难",
          "高潮句",
          "余波",
          "新沉默"
        ],
        "conflict": "人物既需要说出真相，又害怕说出后失去旧身份。",
        "useCase": "法庭独白、创伤告白。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "角色网络内化法",
        "source": "约翰·特鲁比《故事解剖》",
        "summary": "让独角戏中的多个被模仿角色成为主角内心冲突的不同声音。",
        "template": [
          "起：确定主角核心弱点。",
          "承：用模仿或转述召唤多个关系角色。",
          "转：每个角色声音都反驳主角自我叙述。",
          "合：主角重新整合或拒绝这些声音。"
        ],
        "beats": [
          "核心弱点",
          "召唤他者",
          "声音冲突",
          "镜像反驳",
          "自我揭示",
          "整合/拒绝"
        ],
        "conflict": "舞台上只有一人，但角色网络在其内心持续争论。",
        "useCase": "多角色独角戏、心理剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure and Character Arc Overview",
          "source": "YouTube"
        }
      },
      {
        "name": "证词反类型结构",
        "source": "琳达·希格《让好故事更好》",
        "summary": "观众以为会听到清晰证词，结果独白不断质疑证词、记忆和身份本身。",
        "template": [
          "起：承诺提供完整事实。",
          "承：事实叙述被情绪和遗漏打断。",
          "转：讲述者承认证词无法完成真相。",
          "合：留下更诚实但不完整的见证。"
        ],
        "beats": [
          "证词承诺",
          "事实裂缝",
          "记忆反复",
          "叙述失败",
          "不完整真相"
        ],
        "conflict": "人物想提供确定答案，但记忆和创伤拒绝被整理成完整案件。",
        "useCase": "纪录独角戏、创伤叙事。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101: Super Basic Shit",
          "source": "YouTube"
        }
      },
      {
        "name": "审讯式独白结构",
        "source": "独角戏与法庭剧传统",
        "summary": "让观众成为隐形审讯者，独白在辩解与自我暴露之间推进。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "法庭独白、心理独角戏。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "多重自我辩论结构",
        "source": "心理独白剧",
        "summary": "同一演员呈现自我内部的多个声音，让冲突在内心舞台化。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "心理剧、创伤叙事。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "现场仪式独白",
        "source": "仪式剧场与独白剧",
        "summary": "独白不是回忆，而是一场正在完成的告别、召唤或审判仪式。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "舞台独角戏。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "缺席对象对话结构",
        "source": "独白剧写作",
        "summary": "让不在场的人物成为独白对象，推动关系和秘密逐步显影。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "亲密关系独白、悼亡独白。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "crime",
    "title": "犯罪/悬疑剧",
    "meta": "侦探 / 心理悬疑 / 封闭空间",
    "description": "用信息控制制造紧张：观众知道什么、角色知道什么、何时知道，是结构核心。",
    "frameworks": [
      {
        "name": "逆向因果侦探结构",
        "source": "经典侦探小说与悬疑剧",
        "summary": "从结果倒推原因，每个线索既解释过去也改变当下关系。",
        "template": [
          "起：罪案结果出现，秩序被破坏。",
          "承：调查线索逐步排除假因。",
          "转：关键线索重排所有人物动机。",
          "合：真凶揭示，真正主题浮出。"
        ],
        "beats": [
          "尸体/失踪",
          "嫌疑人群",
          "第一假解",
          "新证据",
          "动机反转",
          "最后对质",
          "主题揭示"
        ],
        "conflict": "侦探追求事实，但每个嫌疑人都在保护自己的版本。",
        "useCase": "侦探剧、悬疑舞台剧。",
        "video": {
          "url": "https://www.youtube.com/embed/bSCDGk7hJqQ",
          "title": "How to Write Mystery and Suspense",
          "source": "YouTube"
        }
      },
      {
        "name": "封闭空间压力结构",
        "source": "密室戏剧与惊悚片传统",
        "summary": "空间无法逃离，人物关系和秘密在有限时间内不断升温。",
        "template": [
          "起：人物因外部事件被困同一空间。",
          "承：资源、信任和时间逐渐减少。",
          "转：内部威胁大于外部威胁。",
          "合：真相揭开，幸存者付出心理或道德代价。"
        ],
        "beats": [
          "封闭",
          "规则",
          "第一次冲突",
          "联盟",
          "背叛",
          "真相",
          "逃离/无法逃离"
        ],
        "conflict": "生存需求与信任崩塌之间互相撕裂。",
        "useCase": "密室悬疑、犯罪群像。",
        "video": {
          "url": "https://www.youtube.com/embed/bSCDGk7hJqQ",
          "title": "How to Write Mystery and Suspense",
          "source": "YouTube"
        }
      },
      {
        "name": "揭示递进结构",
        "source": "悬疑/惊悚类型框架",
        "summary": "每次揭示都回答一个小问题，同时提出更危险的大问题。",
        "template": [
          "起：抛出中心谜题并给出第一条可疑线索。",
          "承：用阶段性揭示改变嫌疑排序。",
          "转：关键揭示重排前文意义。",
          "合：最终揭示同时解释事实和主题。"
        ],
        "beats": [
          "中心谜题",
          "局部答案",
          "新问题",
          "重排线索",
          "真相逼近",
          "最终揭示"
        ],
        "conflict": "调查越接近事实，角色越发现自己也被卷入真相。",
        "useCase": "悬疑片、侦探剧集。",
        "video": {
          "url": "https://www.youtube.com/embed/bSCDGk7hJqQ",
          "title": "How to Write Mystery and Suspense",
          "source": "YouTube"
        }
      },
      {
        "name": "误导线管理法",
        "source": "Red Herring 悬疑技法",
        "summary": "误导线必须有合理动机和主题功能，不能只是骗观众。",
        "template": [
          "起：设置可被相信的假嫌疑或假因果。",
          "承：给误导线真实情感或利益动机。",
          "转：揭开误导线的局部真相并转移调查方向。",
          "合：回收误导线，让它服务主题或人物。"
        ],
        "beats": [
          "假线索",
          "可信动机",
          "证据强化",
          "局部揭穿",
          "真线索回流",
          "主题回收"
        ],
        "conflict": "观众和侦探都想走捷径，但故事要求他们付出判断代价。",
        "useCase": "推理剧、本格悬疑。",
        "video": {
          "url": "https://www.youtube.com/embed/bSCDGk7hJqQ",
          "title": "How to Write Mystery and Suspense",
          "source": "YouTube"
        }
      },
      {
        "name": "麦基信息控制场景法",
        "source": "罗伯特·麦基《故事》",
        "summary": "按观众、侦探、凶手的信息差设计每场戏的悬念、戏剧性反讽或惊吓。",
        "template": [
          "起：标注每方知道和不知道的信息。",
          "承：让行动来自信息不对称。",
          "转：通过场景转折改变信息分配。",
          "合：用新信息差钩住下一场。"
        ],
        "beats": [
          "信息表",
          "行动误判",
          "揭示/隐藏",
          "信息重分配",
          "悬念钩子"
        ],
        "conflict": "掌握信息的人想控制局面，缺信息的人被迫冒险行动。",
        "useCase": "犯罪悬疑、惊悚场面。",
        "video": {
          "url": "https://www.youtube.com/embed/eGV89GvZI8k",
          "title": "Building A Scene | Robert McKee",
          "source": "YouTube"
        }
      },
      {
        "name": "菲尔德惊悚三幕式",
        "source": "席德·菲尔德三幕式",
        "summary": "用两个情节点和中点反转控制危险升级，从谜题进入生存压力。",
        "template": [
          "起：第一幕建立异常事件和调查入口。",
          "承：Plot Point I 让主角无法退出。",
          "转：Midpoint 暴露更大威胁，Plot Point II 逼出正面对抗。",
          "合：第三幕完成真相揭示或逃生。"
        ],
        "beats": [
          "异常",
          "Plot Point I",
          "调查",
          "Midpoint反转",
          "坏人逼近",
          "Plot Point II",
          "最终对抗"
        ],
        "conflict": "主角想解释事件，但事件逐步变成直接威胁。",
        "useCase": "惊悚片、心理悬疑。",
        "video": {
          "url": "https://www.youtube.com/embed/1EO7aDRuDws",
          "title": "How To Write A 3 Act Structure For Film",
          "source": "YouTube"
        }
      },
      {
        "name": "类型约定清单：犯罪/惊悚",
        "source": "罗伯特·麦基《故事》类型约定",
        "summary": "检查罪案、调查、危险升级、真相揭露和道德代价等类型承诺是否完整兑现。",
        "template": [
          "起：列出必须兑现的类型约定。",
          "承：在每幕安排约定的阶段性满足。",
          "转：用反约定刷新观众判断。",
          "合：结尾同时兑现真相和代价。"
        ],
        "beats": [
          "罪案承诺",
          "调查约定",
          "危险升级",
          "反约定",
          "真相",
          "道德代价"
        ],
        "conflict": "故事要满足类型期待，同时避免线索机械化。",
        "useCase": "类型开发、悬疑大纲体检。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "倒计时惊悚结构",
        "source": "惊悚片类型法",
        "summary": "用明确时间限制提高行动压力，让调查变成生存竞赛。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "惊悚片、犯罪片。",
        "video": {
          "url": "https://www.youtube.com/embed/bSCDGk7hJqQ",
          "title": "How to Write Mystery and Suspense",
          "source": "YouTube"
        }
      },
      {
        "name": "不可靠调查者结构",
        "source": "心理悬疑传统",
        "summary": "调查者自身记忆、动机或感知存在裂缝，真相和自我同时被调查。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "心理悬疑、黑色电影。",
        "video": {
          "url": "https://www.youtube.com/embed/bSCDGk7hJqQ",
          "title": "How to Write Mystery and Suspense",
          "source": "YouTube"
        }
      },
      {
        "name": "双时间线谜题结构",
        "source": "悬疑剧集结构",
        "summary": "过去线提供原因，现在线提供后果，两线在高潮处互相解释。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "悬疑剧、犯罪剧集。",
        "video": {
          "url": "https://www.youtube.com/embed/bSCDGk7hJqQ",
          "title": "How to Write Mystery and Suspense",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "coming-of-age",
    "title": "成长剧",
    "meta": "青春 / 自我发现 / 离家返乡",
    "description": "人物从被动接受身份，到主动选择身份；外部事件服务于内在成熟。",
    "frameworks": [
      {
        "name": "成长弧线五阶段",
        "source": "约翰·特鲁比《故事解剖》与成长叙事传统",
        "summary": "弱点、需求、欲望、对手和自我揭示共同推动成长。",
        "template": [
          "起：人物拥有错误自我认知和迫切愿望。",
          "承：追求愿望时遭遇镜像对手。",
          "转：人物发现真正需要不同于表面欲望。",
          "合：人物以新行动证明成长。"
        ],
        "beats": [
          "弱点",
          "欲望",
          "导师/伙伴",
          "第一次失败",
          "镜像对手",
          "自我揭示",
          "新选择"
        ],
        "conflict": "人物想得到外部认可，但真正要解决的是自我认同。",
        "useCase": "青春剧、校园剧、职业成长剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure and Character Arc Overview",
          "source": "YouTube"
        }
      },
      {
        "name": "离家—试炼—返身结构",
        "source": "英雄之旅改写",
        "summary": "将英雄之旅缩小为现实成长：离开熟悉环境，经历试炼，再重新理解原点。",
        "template": [
          "起：旧环境无法容纳人物。",
          "承：新环境提供诱惑和试炼。",
          "转：人物失去旧保护，也看清新世界代价。",
          "合：人物不一定回家，但能重新命名自我。"
        ],
        "beats": [
          "召唤",
          "越界",
          "新伙伴",
          "试炼",
          "低谷",
          "礼物",
          "返身"
        ],
        "conflict": "归属感与独立性之间的冲突。",
        "useCase": "成长剧、公路剧、校园转型故事。",
        "video": {
          "url": "https://www.youtube.com/embed/-D4hx3ETcU8",
          "title": "Christopher Vogler's 12 Steps of The Writer's Journey",
          "source": "YouTube"
        }
      },
      {
        "name": "欲望 vs 需求成长弧",
        "source": "罗伯特·麦基《故事》人物设计",
        "summary": "让角色追逐表面欲望，在失败中发现真正需求，最后用行动证明改变。",
        "template": [
          "起：展示清晰表面欲望和隐藏需求。",
          "承：追逐欲望导致关系或自我损伤。",
          "转：人物意识到需求与欲望相冲突。",
          "合：放弃或重塑欲望，选择真正需求。"
        ],
        "beats": [
          "表面欲望",
          "错误策略",
          "损伤",
          "需求显影",
          "自我揭示",
          "新行动"
        ],
        "conflict": "人物想要被看见，但真正需要学会如何看见自己。",
        "useCase": "青春成长、职业成长。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "特鲁比22步成长压缩版",
        "source": "约翰·特鲁比《故事解剖》22步",
        "summary": "从弱点、欲望、计划、对手到自我揭示，按成长片规模压缩22步核心链。",
        "template": [
          "起：弱点和需求决定人物的错误目标。",
          "承：计划与对手迫使人物试错。",
          "转：明显失败之后进入道德选择。",
          "合：自我揭示带来新的平衡。"
        ],
        "beats": [
          "弱点需求",
          "欲望",
          "对手",
          "计划",
          "第一次揭示",
          "明显失败",
          "道德选择",
          "自我揭示",
          "新平衡"
        ],
        "conflict": "外部目标越清楚，内部缺口越无法回避。",
        "useCase": "成长片大纲、青年剧集。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure and Character Arc Overview",
          "source": "YouTube"
        }
      },
      {
        "name": "导师—镜像对手网络",
        "source": "约翰·特鲁比《故事解剖》角色网络",
        "summary": "用导师、同伴、镜像对手和反面成人构成成长压力场。",
        "template": [
          "起：为主角弱点配置四类关系角色。",
          "承：每类角色用不同方式推动或阻碍成长。",
          "转：镜像对手展示主角可能变成的样子。",
          "合：主角选择自己的身份路径。"
        ],
        "beats": [
          "导师",
          "同伴",
          "镜像",
          "反面成人",
          "关系冲突",
          "身份选择"
        ],
        "conflict": "主角在他人投射的身份和自我选择之间摇摆。",
        "useCase": "校园群像、成长剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure and Character Arc Overview",
          "source": "YouTube"
        }
      },
      {
        "name": "哈蒙故事圈成长版",
        "source": "丹·哈蒙 Story Circle",
        "summary": "用八步循环呈现一次离开舒适区、获得代价、返回后改变的成长旅程。",
        "template": [
          "起：你处在熟悉世界但缺少某物。",
          "承：你进入陌生世界寻找它。",
          "转：你得到它并付出代价。",
          "合：你回到原处但已经改变。"
        ],
        "beats": [
          "你",
          "需要",
          "前往",
          "寻找",
          "得到",
          "付代价",
          "返回",
          "改变"
        ],
        "conflict": "人物以为自己要获得外物，实际要完成身份更新。",
        "useCase": "短片成长、单集成长线。",
        "video": {
          "url": "https://www.youtube.com/embed/RG4WcRAgm7Y",
          "title": "Dan Harmon Story Circle explained",
          "source": "YouTube"
        }
      },
      {
        "name": "第一次失去结构",
        "source": "成长叙事传统",
        "summary": "通过第一次失去友情、爱情、家庭幻觉或安全感推动成熟。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "青春片、校园剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "成人世界试入结构",
        "source": "成长剧结构",
        "summary": "角色短暂进入成人规则世界，在失败中看清真实代价。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "职业成长、青春剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "同伴镜像结构",
        "source": "青春群像写作",
        "summary": "用同伴的相似困境和不同选择映照主角成长。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "校园群像、青春剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "身份命名结构",
        "source": "成长叙事法",
        "summary": "角色从被他人命名走向自我命名，完成身份主动选择。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "成长片、身份叙事。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "romance",
    "title": "爱情剧",
    "meta": "相遇 / 阻隔 / 选择 / 亲密关系",
    "description": "爱情剧的重点不是“是否相爱”，而是两个人如何被迫改变亲密关系中的自我保护方式。",
    "frameworks": [
      {
        "name": "双主角互补弧线结构",
        "source": "爱情片与特鲁比双线人物法",
        "summary": "两个角色各自带着缺陷相遇，彼此既是欲望对象也是成长对手。",
        "template": [
          "起：两人因互补缺口相遇。",
          "承：吸引与冲突交替升级。",
          "转：亲密关系暴露两人的核心恐惧。",
          "合：两人选择改变、错过或以新方式相爱。"
        ],
        "beats": [
          "相遇",
          "误读",
          "靠近",
          "第一次裂痕",
          "亲密高点",
          "分离",
          "选择"
        ],
        "conflict": "爱要求暴露真实自我，而人物习惯用防御机制保护自己。",
        "useCase": "都市爱情、悲恋、浪漫喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure and Character Arc Overview",
          "source": "YouTube"
        }
      },
      {
        "name": "阻隔升级法",
        "source": "莎士比亚爱情悲喜剧传统",
        "summary": "外部阻隔与内部阻隔交替升级，直到爱情必须转化为行动。",
        "template": [
          "起：两人相爱或被迫绑定。",
          "承：家庭、阶级、身份或时间制造阻隔。",
          "转：阻隔内化为不信任或牺牲。",
          "合：阻隔被跨越、承认或导致悲剧。"
        ],
        "beats": [
          "吸引",
          "外部阻隔",
          "秘密盟约",
          "误会",
          "牺牲",
          "公开选择",
          "团圆/失去"
        ],
        "conflict": "亲密愿望与身份秩序、家庭规则、时间条件冲突。",
        "useCase": "爱情剧、青春恋爱、历史爱情。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: setup, reversal and escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "爱情三个阶段：障碍—错误—结合",
        "source": "爱情类型框架",
        "summary": "先让外部障碍制造距离，再让内部错误制造裂痕，最后让结合成为人物改变的结果。",
        "template": [
          "起：两人被外部条件阻隔。",
          "承：靠近后暴露错误期待和防御机制。",
          "转：分离迫使双方看见真正需求。",
          "合：结合、错过或成熟告别。"
        ],
        "beats": [
          "相遇",
          "外部障碍",
          "靠近",
          "错误期待",
          "分离",
          "需求显影",
          "结合/告别"
        ],
        "conflict": "爱情不仅要跨过外部阻碍，更要修正两人的亲密错误。",
        "useCase": "爱情片、浪漫喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: setup, reversal and escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "麦基欲望与需求爱情弧",
        "source": "罗伯特·麦基《故事》人物设计",
        "summary": "角色以为自己想得到某个人，实际需要改变爱的方式和自我保护机制。",
        "template": [
          "起：标注每个角色的表面欲望和真实需求。",
          "承：让爱情行动不断暴露防御机制。",
          "转：角色发现“得到对方”不是最终需求。",
          "合：以新行动证明亲密能力改变。"
        ],
        "beats": [
          "表面吸引",
          "防御机制",
          "亲密高点",
          "伤害",
          "需求揭示",
          "新选择"
        ],
        "conflict": "角色追求爱情对象，却抗拒爱情要求的自我暴露。",
        "useCase": "心理爱情、成人爱情。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "反类型爱情重审结构",
        "source": "琳达·希格《让好故事更好》",
        "summary": "先满足相遇、吸引、阻隔等爱情约定，再重审“在一起”是否必然是唯一答案。",
        "template": [
          "起：建立传统爱情期待。",
          "承：让观众相信结合是目标。",
          "转：暴露结合背后的不平等或自我牺牲。",
          "合：结尾选择结合、分开或新关系定义。"
        ],
        "beats": [
          "类型承诺",
          "吸引",
          "阻隔",
          "期待反转",
          "自我重审",
          "新定义"
        ],
        "conflict": "角色既被爱情类型期待牵引，又要诚实面对关系真实代价。",
        "useCase": "现代爱情、女性爱情叙事。",
        "video": {
          "url": "https://www.youtube.com/embed/f-KAVjrLxk0",
          "title": "How to Write Romance",
          "source": "YouTube"
        }
      },
      {
        "name": "特鲁比双主角道德争论",
        "source": "约翰·特鲁比《故事解剖》",
        "summary": "让恋人双方代表两种爱的观念，通过冲突完成道德争论和互相改变。",
        "template": [
          "起：定义双方关于爱的相反信念。",
          "承：每次靠近都让信念发生碰撞。",
          "转：危机证明双方都不完整。",
          "合：新的亲密关系综合两种观念。"
        ],
        "beats": [
          "信念A",
          "信念B",
          "吸引",
          "冲突",
          "危机",
          "互相揭示",
          "新观念"
        ],
        "conflict": "两人相爱，但关于自由、承诺、牺牲或自我的信念互相排斥。",
        "useCase": "双主角爱情、婚恋正剧。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure and Character Arc Overview",
          "source": "YouTube"
        }
      },
      {
        "name": "菲尔德爱情三幕式",
        "source": "席德·菲尔德三幕式",
        "summary": "用Plot Point I让关系开始，用Midpoint制造亲密高点，用Plot Point II造成分离或最后选择。",
        "template": [
          "起：第一幕完成相遇与关系承诺。",
          "承：Plot Point I 让两人无法回到陌生状态。",
          "转：中点进入亲密高点，随后缺陷逼近。",
          "合：Plot Point II 分离后进入最终选择。"
        ],
        "beats": [
          "相遇",
          "Plot Point I",
          "靠近",
          "Midpoint亲密",
          "坏事逼近",
          "Plot Point II",
          "选择"
        ],
        "conflict": "关系越接近理想，越暴露双方未解决的内部阻隔。",
        "useCase": "商业爱情片、浪漫喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/1EO7aDRuDws",
          "title": "How To Write A 3 Act Structure For Film",
          "source": "YouTube"
        }
      },
      {
        "name": "假关系成真结构",
        "source": "浪漫喜剧类型法",
        "summary": "两人因假关系或契约绑定，在表演亲密中暴露真实需求。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "浪漫喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/f-KAVjrLxk0",
          "title": "How to Write Romance",
          "source": "YouTube"
        }
      },
      {
        "name": "错过与重逢结构",
        "source": "爱情片传统",
        "summary": "通过时间错位、选择错过和重逢考验关系是否成熟。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "成人爱情、年代爱情。",
        "video": {
          "url": "https://www.youtube.com/embed/f-KAVjrLxk0",
          "title": "How to Write Romance",
          "source": "YouTube"
        }
      },
      {
        "name": "亲密恐惧暴露结构",
        "source": "心理爱情写作",
        "summary": "角色越接近爱情，越暴露对承诺、依赖或失控的恐惧。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "心理爱情、婚恋剧。",
        "video": {
          "url": "https://www.youtube.com/embed/f-KAVjrLxk0",
          "title": "How to Write Romance",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "epic",
    "title": "史诗剧",
    "meta": "布莱希特式 / 间离 / 社会寓言",
    "description": "不让观众沉浸忘我，而是让观众保持判断，看见个人行动背后的社会机制。",
    "frameworks": [
      {
        "name": "布莱希特间离段落结构",
        "source": "布莱希特史诗剧理论",
        "summary": "用相对独立的段落、字幕、歌曲和旁白打断幻觉，引导观众判断社会关系。",
        "template": [
          "起：用标题或旁白提前告知事件方向。",
          "承：每个段落展示一种社会矛盾。",
          "转：歌曲或评论打断情绪沉浸。",
          "合：结尾不封闭，让观众把问题带回现实。"
        ],
        "beats": [
          "标题预告",
          "示范场景",
          "歌曲评论",
          "角色换位",
          "社会选择",
          "非封闭结尾"
        ],
        "conflict": "人物看似个人选择，实则被经济、战争、阶级或制度塑形。",
        "useCase": "史诗剧、政治剧、社会寓言。",
        "video": {
          "url": "https://www.youtube.com/embed/g0yqGx6VJcM",
          "title": "How Musicals Tell Stories",
          "source": "YouTube"
        }
      },
      {
        "name": "寓言案例结构",
        "source": "寓言剧与教学剧传统",
        "summary": "把复杂社会问题压缩成一个可观察案例，让人物像论点一样互相碰撞。",
        "template": [
          "起：提出一个社会命题。",
          "承：不同立场的人物进入同一案例。",
          "转：案例结果推翻单一答案。",
          "合：观众被迫重新判断命题。"
        ],
        "beats": [
          "命题",
          "案例",
          "立场",
          "反证",
          "代价",
          "问题返还"
        ],
        "conflict": "不同社会立场都能自洽，但具体人的痛苦暴露其局限。",
        "useCase": "政治寓言、教育剧。",
        "video": {
          "url": "https://www.youtube.com/embed/l-828KqtTkA",
          "title": "Brecht and Epic Theatre",
          "source": "YouTube"
        }
      },
      {
        "name": "麦基主情节—次情节—反情节史诗法",
        "source": "罗伯特·麦基《故事》",
        "summary": "用主情节提供宏观推进，次情节提供人物代价，反情节打破单一历史叙事。",
        "template": [
          "起：确立主情节的社会目标。",
          "承：次情节追踪个体代价。",
          "转：反情节段落质疑因果和英雄叙事。",
          "合：三线共同形成开放判断。"
        ],
        "beats": [
          "主线命题",
          "个体副线",
          "间离段落",
          "反情节质疑",
          "线索合流",
          "开放结尾"
        ],
        "conflict": "宏大叙事要求确定答案，个体经验和反情节不断拆解答案。",
        "useCase": "政治史诗、社会寓言。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "类型约定反用结构",
        "source": "罗伯特·麦基《故事》类型约定",
        "summary": "借用战争、历史、传记等类型约定，再用间离手法暴露约定背后的意识形态。",
        "template": [
          "起：列出被借用的类型约定。",
          "承：阶段性满足观众识别需求。",
          "转：用评论、字幕或反高潮拆解约定。",
          "合：让观众重新判断类型快感。"
        ],
        "beats": [
          "约定",
          "满足",
          "过度满足",
          "拆解",
          "判断",
          "返还现实"
        ],
        "conflict": "观众期待类型沉浸，作品要求观众保持批判距离。",
        "useCase": "反战争史诗、政治寓言。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "沃格勒集体英雄旅程",
        "source": "克里斯托弗·沃格勒《作家之旅》",
        "summary": "把英雄旅程从单个英雄扩展为群体或阶层的公共旅程。",
        "template": [
          "起：普通世界展示群体受压状态。",
          "承：召唤把群体推向共同试炼。",
          "转：深洞危机迫使群体付出代价。",
          "合：带回的灵药改变群体秩序。"
        ],
        "beats": [
          "普通世界",
          "召唤",
          "门槛",
          "盟友敌人",
          "深洞",
          "考验",
          "奖赏",
          "返回",
          "复活",
          "灵药"
        ],
        "conflict": "个人英雄主义与集体行动逻辑之间互相竞争。",
        "useCase": "革命史诗、群体冒险。",
        "video": {
          "url": "https://www.youtube.com/embed/-D4hx3ETcU8",
          "title": "Christopher Vogler's 12 Steps of The Writer's Journey",
          "source": "YouTube"
        }
      },
      {
        "name": "艾格里命题史诗结构",
        "source": "劳约斯·艾格里《戏剧写作艺术》",
        "summary": "用前提统领多个段落，让每个案例都从不同角度检验同一社会命题。",
        "template": [
          "起：写出社会命题。",
          "承：设计多个独立案例检验命题。",
          "转：让案例之间互相反驳。",
          "合：结尾不替观众下结论，而返还命题。"
        ],
        "beats": [
          "命题",
          "案例一",
          "案例二",
          "反证",
          "代价",
          "命题返还"
        ],
        "conflict": "作品需要论点清晰，但现实案例不断让论点复杂化。",
        "useCase": "史诗剧、教学剧。",
        "video": {
          "url": "https://www.youtube.com/embed/l-828KqtTkA",
          "title": "Brecht and Epic Theatre",
          "source": "YouTube"
        }
      },
      {
        "name": "章节化史诗结构",
        "source": "布莱希特与史诗剧传统",
        "summary": "用相对独立章节组织社会命题，让观众在段落间保持判断。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "政治剧、社会寓言。",
        "video": {
          "url": "https://www.youtube.com/embed/l-828KqtTkA",
          "title": "Brecht and Epic Theatre",
          "source": "YouTube"
        }
      },
      {
        "name": "旁白评论结构",
        "source": "史诗剧间离手法",
        "summary": "用旁白、字幕或歌曲直接评论行动，打断沉浸并引导判断。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "史诗剧、教学剧。",
        "video": {
          "url": "https://www.youtube.com/embed/l-828KqtTkA",
          "title": "Brecht and Epic Theatre",
          "source": "YouTube"
        }
      },
      {
        "name": "群众场面论证结构",
        "source": "政治剧场传统",
        "summary": "让群体行动成为论证单位，展示个人选择背后的社会机制。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "革命史诗、历史寓言。",
        "video": {
          "url": "https://www.youtube.com/embed/l-828KqtTkA",
          "title": "Brecht and Epic Theatre",
          "source": "YouTube"
        }
      },
      {
        "name": "反英雄史诗结构",
        "source": "现代史诗叙事",
        "summary": "拒绝单一英雄拯救逻辑，把英雄神话拆解为集体和制度问题。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "反战争剧、政治寓言。",
        "video": {
          "url": "https://www.youtube.com/embed/l-828KqtTkA",
          "title": "Brecht and Epic Theatre",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "film_structure",
    "title": "电影剧本结构",
    "meta": "三幕式 / 节拍表 / 英雄旅程 / 商业片结构",
    "description": "横跨类型的电影结构工具，适合把概念、人物弧线和节拍位置整理成可执行大纲。",
    "frameworks": [
      {
        "name": "菲尔德标准三幕式",
        "source": "席德·菲尔德《电影剧本》",
        "summary": "用设置、对抗、解决三幕组织长片，并以Plot Point I/II推动故事进入新方向。",
        "template": [
          "起：第一幕建立人物、世界、问题与催化事件。",
          "承：Plot Point I 把人物推入第二幕对抗。",
          "转：中点改变赌注，Plot Point II 把人物推向最后解决。",
          "合：第三幕完成主要冲突和人物行动。"
        ],
        "beats": [
          "第一幕设置",
          "Plot Point I",
          "第二幕对抗",
          "Midpoint",
          "Plot Point II",
          "第三幕解决"
        ],
        "conflict": "人物目标在两个情节点后不断被更高阻力重塑。",
        "useCase": "长片大纲、商业片结构。",
        "video": {
          "url": "https://www.youtube.com/embed/1EO7aDRuDws",
          "title": "How To Write A 3 Act Structure For Film",
          "source": "YouTube"
        }
      },
      {
        "name": "救猫咪15节拍完整表",
        "source": "布莱克·斯奈德《救猫咪》",
        "summary": "以页码位置管理商业片节奏，从开场画面到终场画面形成可检查的15个Beat。",
        "template": [
          "起：1页开场画面，5页主题呈现，1-10页铺垫，12页催化事件，12-25页争论。",
          "承：25页进入第二幕，30-55页B故事与游戏时间，55页中点。",
          "转：55-75页坏人逼近，75页一无所有，75-85页灵魂黑夜。",
          "合：85页进入第三幕，85-110页结局，110页终场画面。"
        ],
        "beats": [
          "Opening Image p1",
          "Theme Stated p5",
          "Set-Up p1-10",
          "Catalyst p12",
          "Debate p12-25",
          "Break into Two p25",
          "B Story p30",
          "Fun and Games p30-55",
          "Midpoint p55",
          "Bad Guys Close In p55-75",
          "All Is Lost p75",
          "Dark Night of the Soul p75-85",
          "Break into Three p85",
          "Finale p85-110",
          "Final Image p110"
        ],
        "conflict": "外部节拍推进与内部主题学习必须同步，否则结构只剩页码。",
        "useCase": "商业片、类型片节拍体检。",
        "video": {
          "url": "https://www.youtube.com/embed/N_JxIzYfZGM",
          "title": "Save the Cat Beat Sheet — Interstellar Explained in 15 Beats",
          "source": "YouTube"
        }
      },
      {
        "name": "沃格勒英雄旅程12阶段",
        "source": "克里斯托弗·沃格勒《作家之旅》",
        "summary": "将坎贝尔神话模型转化为更适合剧本开发的12阶段行动路径。",
        "template": [
          "起：普通世界、冒险召唤、拒绝召唤和导师建立出发理由。",
          "承：越过第一道门槛后经历考验、盟友、敌人与接近深洞。",
          "转：严峻考验、奖赏和返回之路改变人物。",
          "合：复活阶段完成最终考验，携灵药归来改变世界。"
        ],
        "beats": [
          "普通世界",
          "冒险召唤",
          "拒绝召唤",
          "遇见导师",
          "越过第一道门槛",
          "考验、盟友、敌人",
          "接近最深的洞穴",
          "严峻考验",
          "奖赏",
          "返回之路",
          "复活",
          "携灵药归来"
        ],
        "conflict": "人物必须离开旧自我，经历死亡式考验后带回新能力。",
        "useCase": "冒险片、成长片、奇幻片。",
        "video": {
          "url": "https://www.youtube.com/embed/-D4hx3ETcU8",
          "title": "Christopher Vogler's 12 Steps of The Writer's Journey",
          "source": "YouTube"
        }
      },
      {
        "name": "哈蒙故事圈8步",
        "source": "丹·哈蒙 Story Circle",
        "summary": "用八步循环压缩人物旅程，适合单集、短片和轻量大纲。",
        "template": [
          "起：你处在舒适区但需要某物。",
          "承：进入陌生情境寻找它。",
          "转：得到它并付出代价。",
          "合：回到熟悉处境，但已经改变。"
        ],
        "beats": [
          "You",
          "Need",
          "Go",
          "Search",
          "Find",
          "Take",
          "Return",
          "Change"
        ],
        "conflict": "人物追求外在目标，实际被迫完成内部变化。",
        "useCase": "短片、单集、动画剧集。",
        "video": {
          "url": "https://www.youtube.com/embed/RG4WcRAgm7Y",
          "title": "Dan Harmon Story Circle explained",
          "source": "YouTube"
        }
      },
      {
        "name": "麦基危机/高潮/结局终局框架",
        "source": "罗伯特·麦基《故事》",
        "summary": "明确危机是选择、高潮是行动、结局是新秩序，避免结尾只靠解释。",
        "template": [
          "起：在终局前设置真正两难危机。",
          "承：让人物用行动做出不可撤回选择。",
          "转：高潮行动改变核心价值。",
          "合：结局展示行动后世界如何不同。"
        ],
        "beats": [
          "危机选择",
          "高潮行动",
          "价值改变",
          "结局余波"
        ],
        "conflict": "人物不能再回避选择，观众要看见选择后的世界。",
        "useCase": "终局设计、第三幕重写。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "救猫咪10种故事类型",
        "source": "布莱克·斯奈德《救猫咪》类型系统",
        "summary": "用十种故事类型判断前提是否清晰，并匹配对应的角色、怪物、制度或愿望结构。",
        "template": [
          "起：判断故事属于怪物屋、金羊毛、愿望成真等哪一类。",
          "承：按类型配置核心三要素。",
          "转：检查中点和坏人逼近是否符合类型承诺。",
          "合：用类型结局兑现观众期待。"
        ],
        "beats": [
          "Monster in the House",
          "Golden Fleece",
          "Out of the Bottle",
          "Dude with a Problem",
          "Rites of Passage",
          "Buddy Love",
          "Whydunit",
          "The Fool Triumphant",
          "Institutionalized",
          "Superhero"
        ],
        "conflict": "类型承诺要求清晰，但人物弧线必须提供新鲜变化。",
        "useCase": "前提开发、类型定位。",
        "video": {
          "url": "https://www.youtube.com/embed/4rUI0vZUvsM",
          "title": "The Save the Cat Beat Sheet: The Ultimate Guide",
          "source": "YouTube"
        }
      },
      {
        "name": "序列法八段结构",
        "source": "Sequence Approach",
        "summary": "把长片拆成八个约10-15分钟的序列，每段都有目标、转折和小高潮。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "长片大纲、商业片节奏。",
        "video": {
          "url": "https://www.youtube.com/embed/1EO7aDRuDws",
          "title": "How To Write A 3 Act Structure For Film",
          "source": "YouTube"
        }
      },
      {
        "name": "五幕式电影结构",
        "source": "古典戏剧五幕式改写",
        "summary": "用引入、上升、高潮、下降和结局细分三幕式中段压力。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "类型片、史诗片。",
        "video": {
          "url": "https://www.youtube.com/embed/1EO7aDRuDws",
          "title": "How To Write A 3 Act Structure For Film",
          "source": "YouTube"
        }
      },
      {
        "name": "迷你电影法",
        "source": "商业编剧结构法",
        "summary": "让每个段落都像一部小电影，有开端、发展、转折和钩子。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "商业片、网大结构。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "开场十分钟承诺",
        "source": "电影开场结构法",
        "summary": "在前十分钟完成世界、人物缺口、类型承诺和观看理由。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "电影开场、剧本评估。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "methodology",
    "title": "编剧方法论",
    "meta": "麦基 / 特鲁比 / 艾格里 / 希格",
    "description": "横跨类型的编剧分析方法，重点服务场景诊断、人物设计、主题论证和类型重审。",
    "frameworks": [
      {
        "name": "麦基场景设计：价值转变",
        "source": "罗伯特·麦基《故事》",
        "summary": "检查每场戏是否拥有价值荷载变化，并用转折点把信息变成戏剧行动。",
        "template": [
          "起：写明场景开场价值。",
          "承：标注人物目标、阻力和行动。",
          "转：定位价值反转或深化的转折点。",
          "合：写明收场价值和下一场因果钩子。"
        ],
        "beats": [
          "开场价值",
          "人物行动",
          "阻力",
          "转折点",
          "收场价值",
          "钩子"
        ],
        "conflict": "没有价值变化的场景会停留在说明，无法推动故事。",
        "useCase": "场景诊断、剧本精修。",
        "video": {
          "url": "https://www.youtube.com/embed/eGV89GvZI8k",
          "title": "Building A Scene | Robert McKee",
          "source": "YouTube"
        }
      },
      {
        "name": "麦基人物设计：欲望/需求/本质",
        "source": "罗伯特·麦基《故事》",
        "summary": "区分人物想要什么、真正需要什么、表面行为和压力下暴露的心理本质。",
        "template": [
          "起：写出表面欲望和外在目标。",
          "承：写出隐藏需求和防御机制。",
          "转：用高压选择暴露心理本质。",
          "合：让最终行动证明人物是否改变。"
        ],
        "beats": [
          "欲望",
          "需求",
          "表面行为",
          "压力选择",
          "心理本质",
          "最终行动"
        ],
        "conflict": "人物说自己是谁不重要，压力下如何行动才暴露本质。",
        "useCase": "人物小传、角色弧线。",
        "video": {
          "url": "https://www.youtube.com/embed/mgTIKbxfGag",
          "title": "Robert McKee's STORY Seminar - Story Design",
          "source": "YouTube"
        }
      },
      {
        "name": "麦基对白三功能",
        "source": "罗伯特·麦基《故事》",
        "summary": "对白要承担行动、揭示或信息功能，并尽量避免只解释背景。",
        "template": [
          "起：为每段对白指定行动目标。",
          "承：让潜台词揭示人物关系或心理。",
          "转：必要信息通过冲突自然释放。",
          "合：对白结束时关系或价值状态改变。"
        ],
        "beats": [
          "行动",
          "潜台词",
          "揭示",
          "信息",
          "转折",
          "余波"
        ],
        "conflict": "角色说话为达成目的，而不是替作者说明设定。",
        "useCase": "对白修改、场景压缩。",
        "video": {
          "url": "https://www.youtube.com/embed/eGV89GvZI8k",
          "title": "Building A Scene | Robert McKee",
          "source": "YouTube"
        }
      },
      {
        "name": "特鲁比22步完整结构",
        "source": "约翰·特鲁比《故事解剖》",
        "summary": "从自我揭示需求到新平衡，完整追踪人物、欲望、对手、计划和道德选择。",
        "template": [
          "起：弱点、需求、问题、欲望、盟友和对手构成起点。",
          "承：计划、对手计划、驱动、攻击和表面失败推动中段。",
          "转：明显失败、第二次揭示、道德决定和最终战斗逼出自我揭示。",
          "合：自我揭示、道德选择和新平衡完成结构。"
        ],
        "beats": [
          "Self-Revelation/Need/Desire",
          "Ghost/Story World/Weakness",
          "Inciting Event",
          "Desire",
          "Ally/Opponent",
          "First Revelation",
          "Plan",
          "Opponent Plan",
          "Drive",
          "Attack by Ally",
          "Apparent Defeat",
          "Second Revelation",
          "Audience Revelation",
          "Third Revelation",
          "Gate/Gauntlet/Visit to Death",
          "Battle",
          "Self-Revelation",
          "Moral Decision",
          "New Equilibrium"
        ],
        "conflict": "人物外在计划与内在弱点持续冲突，直到道德选择迫使其自我揭示。",
        "useCase": "长篇大纲、人物弧线诊断。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure and Character Arc Overview",
          "source": "YouTube"
        }
      },
      {
        "name": "特鲁比道德争论",
        "source": "约翰·特鲁比《故事解剖》",
        "summary": "把主题写成角色之间的行动争论，而不是作者直接说教。",
        "template": [
          "起：确定主题问题和相反道德立场。",
          "承：让角色用行动证明立场。",
          "转：让主角看见自己立场的伤害。",
          "合：用道德决定完成主题表达。"
        ],
        "beats": [
          "主题问题",
          "立场角色",
          "行动论证",
          "代价",
          "道德决定",
          "新平衡"
        ],
        "conflict": "正确答案不能预先宣布，必须由角色行动和代价生成。",
        "useCase": "主题开发、正剧写作。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure and Character Arc Overview",
          "source": "YouTube"
        }
      },
      {
        "name": "希格次情节功能与反类型",
        "source": "琳达·希格《让好故事更好》",
        "summary": "用次情节强化主线，并通过反类型结构重审观众熟悉的叙事期待。",
        "template": [
          "起：定义次情节对主线的镜像、对照或压力功能。",
          "承：列出类型约定和可反转处。",
          "转：让反类型选择改变主角判断。",
          "合：回收次情节并重新定义类型结局。"
        ],
        "beats": [
          "次情节功能",
          "类型约定",
          "镜像/对照",
          "反类型转折",
          "主线回收"
        ],
        "conflict": "故事既要利用类型期待，又要避免被旧套路限制。",
        "useCase": "类型翻新、二稿重写。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101: Super Basic Shit",
          "source": "YouTube"
        }
      },
      {
        "name": "田间编剧法：前提驱动结构",
        "source": "James N. Frey《如何写出好故事》",
        "summary": "先把故事压缩成一个可被行动证明的前提，再让人物选择、冲突和结局共同证明这个前提。",
        "template": [
          "起：写出一句包含人物、冲突和结果倾向的前提。",
          "承：让主角行动不断逼近前提中的核心矛盾。",
          "转：对手和环境用相反力量检验前提。",
          "合：结局用行动后果证明、修正或反讽前提。"
        ],
        "beats": [
          "前提出题",
          "主角欲望",
          "反力量",
          "冲突升级",
          "代价显形",
          "前提证明"
        ],
        "conflict": "人物想证明自己的欲望正当，但故事前提不断要求他付出行动代价。",
        "useCase": "故事概念开发、长篇大纲、主题型商业故事。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "田间编剧法：欲望—阻力—升级三要素",
        "source": "James N. Frey《如何写出好故事》",
        "summary": "把主角欲望、对手阻力和冲突升级作为故事发动机，避免剧情只靠事件堆叠。",
        "template": [
          "起：给主角一个清楚、可行动、可失败的欲望。",
          "承：设置同样主动且有理由的对手阻力。",
          "转：每次交锋都提高风险、暴露弱点或缩小退路。",
          "合：最终冲突让欲望与阻力正面清算。"
        ],
        "beats": [
          "欲望声明",
          "阻力登场",
          "第一次交锋",
          "升级",
          "退路减少",
          "最终清算"
        ],
        "conflict": "主角越接近目标，对手越迫使其暴露真正弱点。",
        "useCase": "类型片、悬疑、成长与动作线设计。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "田间编剧法：义务感与代价结构",
        "source": "James N. Frey《如何写出好故事》",
        "summary": "用责任、承诺、身份或情感债务把主角绑在冲突中，让退出本身也变成代价。",
        "template": [
          "起：明确主角不能轻易离开的义务来源。",
          "承：让义务与个人欲望发生冲突。",
          "转：义务升级成必须牺牲某物的选择。",
          "合：主角承担、背叛或重新定义义务。"
        ],
        "beats": [
          "义务来源",
          "欲望冲突",
          "责任加重",
          "牺牲选择",
          "代价落地",
          "义务重写"
        ],
        "conflict": "主角想追求个人目标，但义务要求他对他人或旧承诺负责。",
        "useCase": "家庭剧、英雄叙事、职业伦理故事。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "麦基《对白》：行动性、潜台词与沉默",
        "source": "罗伯特·麦基《对白》",
        "summary": "对白不是解释，而是人物用语言采取行动；真正含义常在潜台词和沉默中发生。",
        "template": [
          "起：为每句对白标注说话者要达成的行动目标。",
          "承：让表层话语与潜台词形成错位。",
          "转：在压力点使用沉默、转移话题或短句暴露关系变化。",
          "合：对白结束时人物关系或价值状态必须改变。"
        ],
        "beats": [
          "行动目标",
          "表层语言",
          "潜台词",
          "沉默",
          "关系转折",
          "余波"
        ],
        "conflict": "人物想通过语言控制局面，但潜台词和沉默泄露真实欲望。",
        "useCase": "对白重写、室内戏、心理冲突场景。",
        "video": {
          "url": "https://www.youtube.com/embed/eGV89GvZI8k",
          "title": "Robert McKee: Building A Scene / Dialogue as Action",
          "source": "YouTube"
        }
      },
      {
        "name": "希格重写与结构调整工具",
        "source": "Linda Seger《Making a Good Script Great》",
        "summary": "把二稿修改拆成结构诊断、动机补强、转折重排、次情节校准和主题统一。",
        "template": [
          "起：诊断主线目标是否清楚、催化事件是否足够推动。",
          "承：检查中段是否有重复、松散或缺少升级。",
          "转：重排关键转折，让人物动机与外部事件同步变化。",
          "合：回收次情节和主题，使结尾成为全剧结果而非单场解决。"
        ],
        "beats": [
          "结构诊断",
          "动机补强",
          "中段压缩",
          "转折重排",
          "次情节校准",
          "主题统一"
        ],
        "conflict": "初稿常有好素材但缺少方向，重写要让每个素材服从主线。",
        "useCase": "二稿重写、剧本医生、结构体检。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "艾格里人物三维度",
        "source": "劳约斯·艾格里《戏剧写作艺术》",
        "summary": "从生理、社会、心理三维度建立人物，使行动来自完整人格而非剧情需要。",
        "template": [
          "起：写清人物生理条件，如年龄、体质、外貌和限制。",
          "承：写清社会位置，如阶层、职业、教育、家庭和经济状态。",
          "转：写清心理结构，如欲望、恐惧、创伤、信念和矛盾。",
          "合：让三维度共同决定人物在冲突中的行动方式。"
        ],
        "beats": [
          "生理维度",
          "社会维度",
          "心理维度",
          "矛盾交叉",
          "行动选择",
          "人物一致性"
        ],
        "conflict": "人物行动不能只服务情节，必须由其三维条件共同推动。",
        "useCase": "人物小传、角色关系、演员案头分析。",
        "video": {
          "url": "https://www.youtube.com/embed/iywvNIWKbPI",
          "title": "Story Structure 101",
          "source": "YouTube"
        }
      },
      {
        "name": "亚里士多德六要素",
        "source": "亚里士多德《诗学》",
        "summary": "用情节、人物、思想、语言、音乐、奇观六要素检查戏剧作品的整体构成。",
        "template": [
          "起：先判断情节是否形成完整行动。",
          "承：检查人物是否以行动展示性格。",
          "转：确认思想和语言是否服务冲突表达。",
          "合：让音乐与奇观强化体验，而不替代情节。"
        ],
        "beats": [
          "情节",
          "人物",
          "思想",
          "语言",
          "音乐",
          "奇观"
        ],
        "conflict": "舞台或影像效果可以增强戏剧，但不能替代行动结构。",
        "useCase": "剧本总评、戏剧课程、跨媒介改编。",
        "video": {
          "url": "https://www.youtube.com/embed/dSr6mP-zxUc",
          "title": "Aristotle and Poetics: elements of drama",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "tv_series",
    "title": "电视剧集结构",
    "meta": "单集结构 / 长弧 / A/B/C线 / 季度弧",
    "description": "面向电视剧和流媒体剧集的结构工具，兼顾单集节奏、幕钩、角色弧与整季推进。",
    "frameworks": [
      {
        "name": "单集三幕 + 长弧结构",
        "source": "电视剧集结构法",
        "summary": "单集用三幕完成局部问题，同时让角色关系或阴谋长弧持续推进。",
        "template": [
          "起：第一幕建立本集问题和长弧触发。",
          "承：第二幕推进调查、关系或任务并制造中段反转。",
          "转：第三幕解决本集问题但留下长弧新问题。",
          "合：尾声用角色或阴谋钩子连接下一集。"
        ],
        "beats": [
          "冷开场",
          "第一幕问题",
          "第二幕升级",
          "中段反转",
          "第三幕解决",
          "长弧钩子"
        ],
        "conflict": "本集需要满足即时完成感，长弧又必须保持未完成张力。",
        "useCase": "单元剧、流媒体季播剧。",
        "video": {
          "url": "https://www.youtube.com/embed/1EO7aDRuDws",
          "title": "How To Write A 3 Act Structure For Film",
          "source": "YouTube"
        }
      },
      {
        "name": "幕钩 Act-out 设计",
        "source": "电视编剧工作流",
        "summary": "每幕结尾必须改变观众问题，让广告点或段落切换成为继续观看的理由。",
        "template": [
          "起：幕内建立一个可追踪问题。",
          "承：逐步收紧时间、信息或关系压力。",
          "转：幕尾用揭示、决定或危险改变问题方向。",
          "合：下一幕从新问题出发。"
        ],
        "beats": [
          "幕内目标",
          "压力升级",
          "幕尾揭示",
          "问题改写",
          "下一幕入口"
        ],
        "conflict": "观众以为问题快解决，幕钩必须证明更大的问题刚开始。",
        "useCase": "电视分幕、短剧卡点。",
        "video": {
          "url": "https://www.youtube.com/embed/blehVIDyuXk",
          "title": "How to Structure a TV Pilot",
          "source": "YouTube"
        }
      },
      {
        "name": "A/B/C故事线编织",
        "source": "美剧编剧室结构法",
        "summary": "A线承担主事件，B线承担角色关系，C线提供轻量主题或喜剧反照。",
        "template": [
          "起：为A/B/C线分别指定功能。",
          "承：按节拍交错推进，避免同质化。",
          "转：让B线或C线在关键处反照A线主题。",
          "合：A线解决，B/C线留下角色变化或下集钩子。"
        ],
        "beats": [
          "A线事件",
          "B线关系",
          "C线反照",
          "交叉点",
          "主题回流",
          "尾钩"
        ],
        "conflict": "多线必须互相增值，否则会分散单集焦点。",
        "useCase": "群像剧、职场剧、情景喜剧。",
        "video": {
          "url": "https://www.youtube.com/embed/Es6Z3oQptww",
          "title": "Writing Comedy: setup, reversal and escalation",
          "source": "YouTube"
        }
      },
      {
        "name": "角色弧线与季度弧",
        "source": "电视剧季播结构",
        "summary": "把角色变化拆成季度阶段，让每集既有微变化也服务整季转折。",
        "template": [
          "起：定义季初状态和季终状态。",
          "承：把变化拆成若干阶段性台阶。",
          "转：在中季和倒数第二集安排关键反转。",
          "合：季终完成角色选择并开启下一季问题。"
        ],
        "beats": [
          "季初状态",
          "早期试错",
          "中季反转",
          "关系重排",
          "低谷",
          "季终选择",
          "新问题"
        ],
        "conflict": "角色不能每集都彻底改变，但每集都要留下可追踪的微变化。",
        "useCase": "季播剧人物线、长弧设计。",
        "video": {
          "url": "https://www.youtube.com/embed/blehVIDyuXk",
          "title": "How to Structure a TV Pilot",
          "source": "YouTube"
        }
      },
      {
        "name": "单元案件 + 连续情感线",
        "source": "程序剧与职业剧结构",
        "summary": "用单元案件提供每集完成感，用连续情感线建立长期追看动力。",
        "template": [
          "起：案件或任务引出当集主题。",
          "承：职业调查与私人关系交替推进。",
          "转：案件反照角色的长期问题。",
          "合：案件解决，情感线前进半步。"
        ],
        "beats": [
          "案件入口",
          "调查",
          "私人线",
          "案件反照",
          "解决",
          "情感尾钩"
        ],
        "conflict": "职业问题可被解决，私人问题只能逐步逼近。",
        "useCase": "医疗剧、律政剧、刑侦剧。",
        "video": {
          "url": "https://www.youtube.com/embed/blehVIDyuXk",
          "title": "How to Structure a TV Pilot",
          "source": "YouTube"
        }
      },
      {
        "name": "剧集版救猫咪节拍",
        "source": "布莱克·斯奈德《救猫咪》改写",
        "summary": "把15节拍压缩进试播集或关键集，明确主题、游戏时间、中点和尾钩。",
        "template": [
          "起：开场画面、主题呈现和催化事件快速定义剧集引擎。",
          "承：进入第二幕后展示“这部剧每集看什么”。",
          "转：中点改变人物关系或案件理解。",
          "合：第三幕解决局部问题并用终场画面开启长弧。"
        ],
        "beats": [
          "Opening Image",
          "Theme Stated",
          "Catalyst",
          "Break into Two",
          "Fun and Games",
          "Midpoint",
          "All Is Lost",
          "Break into Three",
          "Final Image"
        ],
        "conflict": "试播集既要讲完整故事，又要证明剧集引擎可持续。",
        "useCase": "试播集、关键集。",
        "video": {
          "url": "https://www.youtube.com/embed/N_JxIzYfZGM",
          "title": "Save the Cat Beat Sheet — Interstellar Explained in 15 Beats",
          "source": "YouTube"
        }
      },
      {
        "name": "冷开场钩子结构",
        "source": "电视剧集写作",
        "summary": "用冷开场先抛出事件、情绪或谜题，再进入片头和主线。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "试播集、单元剧。",
        "video": {
          "url": "https://www.youtube.com/embed/blehVIDyuXk",
          "title": "How to Structure a TV Pilot",
          "source": "YouTube"
        }
      },
      {
        "name": "季中反转结构",
        "source": "季播剧结构",
        "summary": "在季中改变主要问题或关系联盟，防止长弧中段松散。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "流媒体季播剧。",
        "video": {
          "url": "https://www.youtube.com/embed/blehVIDyuXk",
          "title": "How to Structure a TV Pilot",
          "source": "YouTube"
        }
      },
      {
        "name": "集尾悬念钩结构",
        "source": "剧集追看设计",
        "summary": "每集结尾解决局部问题，同时抛出更强的下一集问题。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "连续剧、短剧。",
        "video": {
          "url": "https://www.youtube.com/embed/blehVIDyuXk",
          "title": "How to Structure a TV Pilot",
          "source": "YouTube"
        }
      },
      {
        "name": "角色轮值主场结构",
        "source": "群像剧编剧室方法",
        "summary": "每集让不同角色成为主题主场，长期累积群像厚度。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "群像剧、职场剧。",
        "video": {
          "url": "https://www.youtube.com/embed/blehVIDyuXk",
          "title": "How to Structure a TV Pilot",
          "source": "YouTube"
        }
      }
    ]
  },
  {
    "id": "chinese_drama_theory",
    "title": "中国戏剧理论",
    "meta": "谭霈生 / 戏剧性 / 戏剧情境 / 戏剧行动",
    "description": "以中国现代戏剧学为核心，强调戏剧性来源、戏剧情境推进、行动本体和悬念结构。",
    "frameworks": [
      {
        "name": "谭霈生《论戏剧性》：戏剧性的三个来源",
        "source": "谭霈生《论戏剧性》",
        "summary": "戏剧性来自情境压力、人物动作和悬念期待三者的互相作用。",
        "template": [
          "起：建立让人物不能旁观的情境压力。",
          "承：让人物用具体动作回应压力。",
          "转：用信息延迟和结果不确定制造悬念期待。",
          "合：在动作结果中释放或转移戏剧性。"
        ],
        "beats": [
          "情境压力",
          "人物动作",
          "悬念期待",
          "压力升级",
          "动作后果",
          "期待释放"
        ],
        "conflict": "人物必须行动，但行动结果被情境和悬念持续推迟。",
        "useCase": "戏剧性诊断、舞台剧、现实主义影视场景。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "戏剧情境四段结构",
        "source": "谭霈生戏剧理论",
        "summary": "用初始情境、激变情境、危机情境和终结情境组织人物行动的压力递进。",
        "template": [
          "起：初始情境展示人物关系和潜在矛盾。",
          "承：激变情境打破原有平衡。",
          "转：危机情境迫使人物作出决定。",
          "合：终结情境展示行动后的新关系。"
        ],
        "beats": [
          "初始情境",
          "激变情境",
          "危机情境",
          "终结情境"
        ],
        "conflict": "情境不断变化，人物不能用旧关系解决新压力。",
        "useCase": "四段式大纲、场次推进、戏剧单元结构。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "《戏剧本体论》：戏剧行动本体",
        "source": "谭霈生《戏剧本体论》",
        "summary": "戏剧的本体是行动；语言也应被理解为行动，而不是对行动的描述。",
        "template": [
          "起：把每场戏的问题改写为“人物要做什么”。",
          "承：检查语言是否改变关系、推动选择或制造阻力。",
          "转：删去只解释背景却不产生行动后果的台词。",
          "合：让场面以行动结果而非观点总结收束。"
        ],
        "beats": [
          "行动目标",
          "语言行动",
          "关系改变",
          "阻力",
          "行动后果"
        ],
        "conflict": "人物说话不是为了说明，而是为了争夺、掩饰、诱导或改变局面。",
        "useCase": "对白改写、舞台调度、文本排练。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "戏剧冲突三类型",
        "source": "谭霈生戏剧理论 / 中国戏剧学",
        "summary": "从人与人、人与环境、人与自我三类冲突拆解戏剧压力来源。",
        "template": [
          "起：确认主要冲突发生在人际、环境还是内心。",
          "承：让三类冲突互相传导，而不是彼此孤立。",
          "转：在危机处让外部冲突逼出内部冲突。",
          "合：结局回应最核心的一类冲突。"
        ],
        "beats": [
          "人与人",
          "人与环境",
          "人与自我",
          "冲突传导",
          "危机聚合",
          "核心回应"
        ],
        "conflict": "人物面对的不只是对手，也包括处境和自我矛盾。",
        "useCase": "冲突分析、人物关系、社会剧与心理剧。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "结构性悬念 vs 场景性悬念",
        "source": "谭霈生戏剧理论 / 悬念结构分析",
        "summary": "结构性悬念支撑全剧问题，场景性悬念支撑局部场面，两者需要层级清楚。",
        "template": [
          "起：设定贯穿全剧的结构性悬念。",
          "承：为每场戏设置可即时感知的场景性悬念。",
          "转：让场景悬念阶段性回答或改写结构悬念。",
          "合：最终解决结构悬念，同时回收关键场景悬念。"
        ],
        "beats": [
          "全剧问题",
          "场景问题",
          "局部答案",
          "问题改写",
          "终局解答"
        ],
        "conflict": "观众既需要追问最终结果，也需要在每场戏中持续等待下一步。",
        "useCase": "悬疑剧、社会议题剧、长片节奏设计。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "孙惠柱：叙事剧与非叙事剧分类",
        "source": "孙惠柱戏剧理论",
        "summary": "区分以故事因果推进的叙事剧和以场面、观念、身体或仪式组织的非叙事剧。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "实验戏剧、当代剧场分析。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "孙惠柱《第三种戏剧》跨文化结构",
        "source": "孙惠柱《第三种戏剧》",
        "summary": "在传统与现代、东方与西方、文本与剧场之间建立跨文化戏剧结构。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "跨文化剧场、实验戏剧。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "余秋雨：戏剧意识理论",
        "source": "余秋雨《戏剧理论史稿》",
        "summary": "从历史脉络理解戏剧意识如何在仪式、审美、冲突和观演关系中形成。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "戏剧理论史、戏剧审美分析。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "余秋雨：观众期待视野结构",
        "source": "余秋雨戏剧理论",
        "summary": "把观众的文化经验、审美期待和现场接受纳入戏剧结构判断。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "戏剧接受研究、剧场创作。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "焦菊隐：中国话剧民族化",
        "source": "焦菊隐导演理论",
        "summary": "将中国戏曲美学、民族审美和现代话剧现实主义结合，形成民族化话剧表达。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "话剧导演、舞台风格设计。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "焦菊隐：从内部体验出发的导演方法",
        "source": "焦菊隐导演方法论",
        "summary": "从人物内部体验出发组织演员、调度和舞台节奏，让外部形式服务内在行动。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "导演案头、演员排练。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "欧阳予倩：现实主义戏剧结构观",
        "source": "欧阳予倩戏剧理论",
        "summary": "强调现实生活、人物行动和社会关系的真实组织，以现实主义方法完成戏剧结构。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "现实主义话剧、中国现代戏剧。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "曹禺式结构：雷雨式情境压力",
        "source": "曹禺《雷雨》结构范本",
        "summary": "在封闭家庭空间中积压秘密、血缘、欲望和阶级压力，最终集中爆发。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "家庭悲剧、封闭空间正剧。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      },
      {
        "name": "曹禺式结构：北京人式慢燃情境",
        "source": "曹禺《北京人》结构范本",
        "summary": "以日常消耗、家族衰败和精神困境形成慢燃压力，而非依赖强情节爆点。",
        "template": [
          "起：明确人物目标、处境压力和观众期待。",
          "承：让行动遇到更强阻力，并产生新的关系变化。",
          "转：在关键节点改变信息、价值或人物策略。",
          "合：用行动后果回收主题，并留下清晰余味。"
        ],
        "beats": [
          "目标",
          "阻力",
          "升级",
          "转折",
          "代价",
          "回收"
        ],
        "conflict": "人物想维持原有目标或身份，但结构压力迫使其改变行动方式。",
        "useCase": "家族戏、生活流正剧。",
        "video": {
          "url": "//player.bilibili.com/player.html?bvid=BV1xT421Q75w",
          "title": "《戏剧十五讲》课程片段之“立主脑”",
          "source": "B站"
        }
      }
    ]
  }
];

const dailyVideoSources = [
  {
    framework: '三幕式',
    sceneTitle: '《肖申克的救赎》· 越狱与重生',
    sceneDesc: '压迫、筹备、突围到自由，完整覆盖设置—对抗—解决。',
    embedUrl: 'https://www.youtube.com/embed/6hB3S9bIaco',
    platform: 'YouTube',
    fallbackUrl: 'https://www.youtube.com/embed/NmzuHjWmXOc'
  },
  {
    framework: '英雄旅程',
    sceneTitle: '《黑客帝国》· 红蓝药丸选择',
    sceneDesc: '导师给出召唤，主角跨过门槛进入未知世界。',
    embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1Lb4y1R7Rh&autoplay=0',
    platform: 'B站',
    fallbackUrl: 'https://www.youtube.com/embed/zE7PKRjrid4'
  },
  {
    framework: '起承转合',
    sceneTitle: '《千与千寻》· 进入汤屋世界',
    sceneDesc: '从越界开始，经规则压迫与身份转折，抵达自我确认。',
    embedUrl: 'https://www.youtube.com/embed/ByXuk9QqQkk',
    platform: 'YouTube',
    fallbackUrl: 'https://player.bilibili.com/player.html?bvid=BV1MbpJzyETf'
  },
  {
    framework: '悬疑反转',
    sceneTitle: '《禁闭岛》· 结尾真相揭示',
    sceneDesc: '线索回收并重排现实，最后一句再次制造理解反转。',
    embedUrl: 'https://www.youtube.com/embed/x9lGthLqe3E',
    platform: 'YouTube',
    fallbackUrl: 'https://www.youtube.com/embed/XYXXhn9fMYs'
  },
  {
    framework: '群像结构',
    sceneTitle: '《早餐俱乐部》· 午餐摊牌',
    sceneDesc: '多角色在同一空间暴露阶层、标签与联盟变化。',
    embedUrl: 'https://www.youtube.com/embed/u3mupIlFIYQ',
    platform: 'YouTube',
    fallbackUrl: 'https://www.youtube.com/embed/ECfvSmDe_-0'
  },
  {
    framework: '人物弧光',
    sceneTitle: '《小丑》· Arthur 完成人格转化',
    sceneDesc: '外部羞辱累积到自我命名，人物完成黑化弧线。',
    embedUrl: 'https://www.youtube.com/embed/8djRc9EEc24',
    platform: 'YouTube',
    fallbackUrl: 'https://www.youtube.com/embed/Chy3teTFyLg'
  },
  {
    framework: '史诗剧',
    sceneTitle: '《角斗士》· “我叫 Maximus”',
    sceneDesc: '个人复仇被放入帝国权力场，私人身份转为公共宣言。',
    embedUrl: 'https://www.youtube.com/embed/lKn-Agk-yAI',
    platform: 'YouTube',
    fallbackUrl: 'https://www.youtube.com/embed/7jbO8ToJTko'
  },
  {
    framework: '荒诞剧',
    sceneTitle: '《等待戈多》· San Quentin 演出版',
    sceneDesc: '等待、语言游戏与原地循环，行动被不断延迟。',
    embedUrl: 'https://www.youtube.com/embed/Q77jgal4Gto',
    platform: 'YouTube',
    fallbackUrl: 'https://www.youtube.com/embed/1l6b37ZUeTw'
  },
  {
    framework: '成长剧',
    sceneTitle: '《早餐俱乐部》· Bender 与 Claire 冲突',
    sceneDesc: '标签碰撞逼出脆弱面，角色开始重新理解自我。',
    embedUrl: 'https://www.youtube.com/embed/_JXF7yJoyB4',
    platform: 'YouTube',
    fallbackUrl: 'https://www.youtube.com/embed/KGZQd5bpJHw'
  },
  {
    framework: '社会剧',
    sceneTitle: '《社交网络》· Cease and Desist',
    sceneDesc: '个人野心进入法律、资本和关系网络的公开冲突。',
    embedUrl: 'https://www.youtube.com/embed/6-_tIPShuwQ',
    platform: 'YouTube',
    fallbackUrl: 'https://www.youtube.com/embed/RpiwqBXyShA'
  }
];

window.dailyVideoSources = dailyVideoSources;

const scriptLibrary = [
  { title: '莎士比亚全集', author: '威廉·莎士比亚', year: '约 1590–1613', type: 'public', region: 'foreign', tags: ['悲剧','喜剧','历史剧'], sourceInstitution: 'Project Gutenberg', link: 'https://www.gutenberg.org/ebooks/100', summary: '收录莎士比亚主要戏剧与诗作，是悲剧、喜剧、历史剧结构学习的基础文本。', framework: '诗学式过失—识认结构 / 权力棋局结构', access: '权威全文链接' },
  { title: '海鸥', author: '契诃夫', year: '1895', type: 'public', region: 'foreign', tags: ['悲喜剧','正剧'], sourceInstitution: 'Project Gutenberg', link: 'https://www.gutenberg.org/ebooks/1754', summary: '以艺术理想、爱情错位和生活失落构成契诃夫式悲喜剧。', framework: '笑中含痛双轨结构', access: '权威全文链接' },
  { title: '万尼亚舅舅', author: '契诃夫', year: '1897', type: 'public', region: 'foreign', tags: ['悲喜剧','正剧'], sourceInstitution: 'Project Gutenberg', link: 'https://www.gutenberg.org/ebooks/1756', summary: '日常对话下潜藏一代人的失败感与迟到的自我认知。', framework: '笑中含痛双轨结构', access: '权威全文链接' },
  { title: '三姐妹 / 樱桃园等', author: '契诃夫', year: '1901–1904', type: 'public', region: 'foreign', tags: ['悲喜剧','社会剧'], sourceInstitution: 'Project Gutenberg', link: 'https://www.gutenberg.org/ebooks/7986', summary: '《三姐妹》《樱桃园》等集中呈现时代变迁下的失落与反高潮。', framework: '反高潮落点法', access: '权威全文链接' },
  { title: '玩偶之家', author: '亨利克·易卜生', year: '1879', type: 'public', region: 'foreign', tags: ['正剧','社会剧'], sourceInstitution: 'Project Gutenberg', link: 'https://www.gutenberg.org/ebooks/2542', summary: '以家庭秘密和婚姻制度为入口，完成问题剧的公开提问。', framework: '问题剧剥洋葱结构', access: '权威全文链接' },
  { title: '培尔·金特', author: '亨利克·易卜生', year: '1867', type: 'public', region: 'foreign', tags: ['成长剧','史诗'], sourceInstitution: 'Project Gutenberg', link: 'https://www.gutenberg.org/ebooks/662', summary: '以流浪、幻想和自我逃避构成长篇成长与身份追问。', framework: '离家—试炼—返身结构', access: '权威全文链接' },
  { title: '朱莉小姐', author: '奥古斯特·斯特林堡', year: '1888', type: 'public', region: 'foreign', tags: ['悲剧','心理剧'], sourceInstitution: 'Project Gutenberg', link: 'https://www.gutenberg.org/ebooks/849', summary: '阶级、性别和欲望在一夜之间持续下坠。', framework: '麦基价值极性下坠法', access: '权威全文链接' },
  { title: '认真的重要性', author: '奥斯卡·王尔德', year: '1895', type: 'public', region: 'foreign', tags: ['喜剧','讽刺'], sourceInstitution: 'Project Gutenberg', link: 'https://www.gutenberg.org/ebooks/844', summary: '用身份错位和语言机锋讽刺维多利亚社会体面。', framework: '错位误会递进法 / 讽刺靶心结构', access: '权威全文链接' },
  { title: '雷雨', author: '曹禺', year: '1934', type: 'public', region: 'cn', tags: ['悲剧','家庭剧'], sourceInstitution: '中文在线剧本文库', link: 'https://www.xiaoshuo.com/read/雷雨', summary: '家庭秘密、阶级关系和宿命式暴发构成中国现代话剧经典悲剧。', framework: '诗学式过失—识认结构 / 社会机器碾压结构', access: '中文正文链接' },
  { title: '日出', author: '曹禺', year: '1936', type: 'public', region: 'cn', tags: ['社会悲剧','正剧'], sourceInstitution: '中文在线剧本文库', link: 'https://www.xiaoshuo.com/read/日出', summary: '以都市金钱关系和人物沉沦展示社会剧压力。', framework: '社会机器碾压结构', access: '中文正文链接' },
  { title: '原野', author: '曹禺', year: '1937', type: 'public', region: 'cn', tags: ['悲剧','复仇'], sourceInstitution: '中文在线剧本文库', link: 'https://www.xiaoshuo.com/read/原野', summary: '复仇行动、心理阴影和命运压力共同推动悲剧。', framework: '麦基价值极性下坠法', access: '中文正文链接' },
  { title: '获虎之夜', author: '田汉', year: '1920 年代', type: 'public', region: 'cn', tags: ['爱情剧','社会剧'], sourceInstitution: '中文在线剧本文库', link: 'https://www.xiaoshuo.com/read/获虎之夜', summary: '以爱情选择折射家庭、阶层和时代价值冲突。', framework: '阻隔升级法', access: '中文正文链接' },
  { title: '屈原', author: '郭沫若', year: '1942', type: 'public', region: 'cn', tags: ['历史剧','悲剧'], sourceInstitution: '中文在线剧本文库', link: 'https://www.xiaoshuo.com/read/屈原', summary: '以历史人物的政治选择和人格坚持组织戏剧冲突。', framework: '大时代小人物切片法 / 权力棋局结构', access: '中文正文链接' },
  { title: '琥珀·恋爱的犀牛', author: '廖一梅', year: '1999 / 2005', type: 'copyright', region: 'cn', tags: ['爱情剧','当代戏剧'], sourceInstitution: '中文剧本库', link: 'https://www.juben68.com/juqing/2211.html', summary: '偏执爱情与先锋舞台语言结合，适合作为当代爱情剧索引。', framework: '双主角互补弧线结构', access: '剧本正文或剧本库入口' },
  { title: '恋爱的犀牛', author: '廖一梅', year: '1999', type: 'copyright', region: 'cn', tags: ['爱情剧','先锋戏剧'], sourceInstitution: '中文剧本库', link: 'https://www.juben68.com/juqing/1427.html', summary: '马路对明明的执念构成极端爱情与自我投射。', framework: '阻隔升级法 / 双主角互补弧线结构', access: '剧本正文或剧本库入口' },
  { title: '两只狗的生活意见', author: '孟京辉', year: '2007', type: 'copyright', region: 'cn', tags: ['喜剧','先锋戏剧'], sourceInstitution: '中文剧本库', link: 'https://www.juben68.com/juqing/2212.html', summary: '以两只狗的城市漂流制造社会讽刺和身体喜剧。', framework: '讽刺靶心结构 / 错位误会递进法', access: '剧本正文或剧本库入口' },
  { title: '等待戈多', author: '塞缪尔·贝克特', year: '1953', type: 'copyright', region: 'foreign', tags: ['荒诞剧','悲喜剧'], sourceInstitution: '中文剧本库', link: 'https://www.juben68.com/juqing/1075.html', summary: '两个流浪者等待不会到来的人，形成现代荒诞剧范式。', framework: '等待—循环结构', access: '剧本正文或剧本库入口' },
  { title: '推销员之死', author: '阿瑟·米勒', year: '1949', type: 'copyright', region: 'foreign', tags: ['社会悲剧','家庭剧'], sourceInstitution: 'Penguin Random House / 出版社', link: 'https://www.penguinrandomhouse.com/books/112105/death-of-a-salesman-by-arthur-miller/', summary: '家庭梦想与社会成功神话的破裂构成现代悲剧。', framework: '社会机器碾压结构 / 麦基价值极性下坠法', access: '版权作品索引，不收录全文' },
  { title: 'Purpose', author: 'Branden Jacobs-Jenkins', year: '2025', type: 'copyright', region: 'award', tags: ['普利策','正剧'], sourceInstitution: 'The Pulitzer Prizes', link: 'https://www.pulitzer.org/node/branden-jacobs-jenkins-2', summary: '围绕非裔中产家庭与民权遗产展开代际关系。', framework: '群像压力锅结构', access: '获奖索引，不收录全文' },
  { title: 'The Hot Wing King', author: 'Katori Hall', year: '2021', type: 'copyright', region: 'award', tags: ['普利策','喜剧正剧'], sourceInstitution: 'The Pulitzer Prizes', link: 'https://www.pulitzer.org/winners/katori-hall', summary: '以聚会和竞赛空间组织亲密关系、身份和家庭冲突。', framework: '群像压力锅结构 / 错位误会递进法', access: '获奖索引，不收录全文' },
  { title: 'Jon Fosse 剧作索引', author: 'Jon Fosse', year: '2023 诺奖', type: 'copyright', region: 'award', tags: ['诺贝尔文学奖','现代戏剧'], sourceInstitution: 'NobelPrize.org', link: 'https://www.nobelprize.org/prizes/literature/2023/bio-bibliography/', summary: '以极简语言和沉默结构处理不可言说的存在经验。', framework: '反高潮落点法 / 等待—循环结构', access: '作者与作品索引，不收录全文' },
  { title: 'Harold Pinter 剧作索引', author: 'Harold Pinter', year: '2005 诺奖', type: 'copyright', region: 'award', tags: ['诺贝尔文学奖','荒诞现实主义'], sourceInstitution: 'NobelPrize.org', link: 'https://www.nobelprize.org/prizes/literature/2005/pinter/facts/', summary: '日常对话下的压迫、沉默和权力威胁构成“Pinteresque”戏剧感。', framework: '现实规训荒诞化结构', access: '作者与作品索引，不收录全文' }
];


const frameworkExtensions = {
  '诗学式过失—识认结构': { keywords: ['悲剧','秘密','命运','家族','真相','罪责','毁灭','复仇'], matchReason: '适合核心人物带着盲点行动，并在真相揭开后承担不可逆代价的故事。', characterAdvice: '主角应同时具备可敬优点与致命盲点；对手最好不是纯恶人，而是迫使真相浮出的关系角色。' },
  '麦基价值极性下坠法': { keywords: ['堕落','代价','选择','背叛','失控','社会','心理','欲望'], matchReason: '适合把一个核心价值从正面推向反面，再推到更深层反面的故事。', characterAdvice: '为主角设置一个“本来想守护的价值”，再让每次行动都逼近对该价值的背叛。' },
  '社会机器碾压结构': { keywords: ['阶级','制度','公司','家庭','贫穷','社会','压迫','城市'], matchReason: '适合个人困境背后存在组织、阶层、舆论或家庭系统压力的故事。', characterAdvice: '人物群应代表不同压力来源：亲密关系、制度执行者、旁观者和受益者。' },
  '错位误会递进法': { keywords: ['误会','身份','谎言','秘密','恋爱','闹剧','喜剧','伪装'], matchReason: '适合以信息差、身份错位和谎言补丁推动笑料升级的故事。', characterAdvice: '至少设置一个知道真相的人、一个误读真相的人，以及一个不断制造新误会的人。' },
  '救猫咪喜剧节拍表': { keywords: ['商业','轻喜剧','成长','失败者','梦想','反转','都市'], matchReason: '适合高概念、节奏清晰、主角缺陷鲜明的商业喜剧或都市故事。', characterAdvice: '主角需要一个好笑但真实的缺陷；伙伴角色负责把缺陷放大成连续场景。' },
  '讽刺靶心结构': { keywords: ['讽刺','荒谬','职场','规则','社会','黑色幽默','权力'], matchReason: '适合把一种社会规则推到极端，让观众看见规则本身的荒唐。', characterAdvice: '设置一个认真执行荒谬规则的人，比设置一个单纯反派更有效。' },
  '笑中含痛双轨结构': { keywords: ['生活','失落','家庭','朋友','无力','时代','怀旧'], matchReason: '适合外层轻松琐碎、内层持续失落的悲喜剧。', characterAdvice: '每个人物都应有未说出口的痛点，用闲聊、玩笑和小动作遮挡它。' },
  '反高潮落点法': { keywords: ['无解','等待','失败','荒诞','空虚','现代','日常'], matchReason: '适合没有传统大解决、以反高潮和余味取胜的现代故事。', characterAdvice: '人物越认真寻找答案，结尾越可以落在一个小动作或沉默上。' },
  '问题剧剥洋葱结构': { keywords: ['婚姻','家庭','女性','秘密','法律','名誉','伦理'], matchReason: '适合从家庭/公共事件切入，逐层揭开旧秘密和社会规范的故事。', characterAdvice: '每个配角都应掌握一层信息，并代表一种社会期待。' },
  '群像压力锅结构': { keywords: ['群像','社区','职场','家庭','公共事件','冲突','利益'], matchReason: '适合多人、多立场被同一事件压进同一空间或同一议题的故事。', characterAdvice: '给每个主要人物设置不同利益和道德自我形象，让他们在公共危机中互相拆穿。' },
  '大时代小人物切片法': { keywords: ['历史','战争','时代','迁徙','家国','普通人'], matchReason: '适合用小人物的私人选择呈现宏大历史变化。', characterAdvice: '主角不必改变历史，但必须在历史压力下改变自己的身份选择。' },
  '权力棋局结构': { keywords: ['权力','宫廷','继承','背叛','历史','组织','斗争'], matchReason: '适合围绕合法性、继承、联盟和背叛展开的历史或权谋故事。', characterAdvice: '人物关系要像棋局，每一次结盟都应制造下一次背叛的可能。' },
  '等待—循环结构': { keywords: ['等待','荒诞','循环','无意义','孤独','存在'], matchReason: '适合人物被困在等待、重复和意义缺席中的荒诞故事。', characterAdvice: '两名互补角色最有效：一个维持希望，一个不断拆解希望。' },
  '现实规训荒诞化结构': { keywords: ['流程','规则','机构','职场','系统','荒诞','官僚'], matchReason: '适合熟悉现实场景逐渐被流程、话术和制度空转吞没的故事。', characterAdvice: '让角色说“正确的话”，做“合规的事”，但结果越来越不合人性。' },
  'I Want 歌驱动结构': { keywords: ['音乐','梦想','舞台','爱情','成长','歌舞'], matchReason: '适合人物欲望强烈、情绪需要用歌曲外化的音乐剧。', characterAdvice: '主角必须有一首清晰的 I Want 歌；反派或阻力也应有对应音乐主题。' },
  '主题变奏复现法': { keywords: ['音乐','主题','关系','变奏','情感','记忆'], matchReason: '适合用音乐主题反复变形来标记关系变化的故事。', characterAdvice: '为主角、爱情线和失去的东西各设置一个可复现的主题动作或旋律意象。' },
  '见证者证词结构': { keywords: ['独白','证词','秘密','创伤','审判','回忆'], matchReason: '适合一个人向观众讲述事件，并逐步暴露自身责任的独角戏。', characterAdvice: '讲述者要有控制叙述的动机，也要有无法控制情绪泄露的裂缝。' },
  '记忆房间结构': { keywords: ['记忆','物件','独角戏','创伤','母亲','房间'], matchReason: '适合用物件触发时间跳切和心理揭示的独角戏。', characterAdvice: '为每个关键物件绑定一个人物关系和一个未解决问题。' },
  '逆向因果侦探结构': { keywords: ['犯罪','谋杀','侦探','真相','线索','嫌疑人','悬疑'], matchReason: '适合从结果倒推原因、以线索重排人物动机的悬疑故事。', characterAdvice: '每个嫌疑人都应有“不是凶手也要隐瞒”的秘密。' },
  '封闭空间压力结构': { keywords: ['密室','封闭','危机','暴风雪','船','房间','生存'], matchReason: '适合人物被困同一空间，外部危机逐渐转化为内部威胁的故事。', characterAdvice: '让空间资源持续减少，同时让信任关系比资源更早崩塌。' },
  '成长弧线五阶段': { keywords: ['成长','青春','校园','自我','梦想','失败','身份'], matchReason: '适合主角从错误自我认知走向主动选择身份的成长故事。', characterAdvice: '对手最好是主角的镜像：拥有主角想要的东西，也暴露那东西的代价。' },
  '离家—试炼—返身结构': { keywords: ['离家','旅行','返乡','青春','冒险','寻找','故乡'], matchReason: '适合以离开熟悉环境、经历试炼、重新理解原点为主线的故事。', characterAdvice: '给主角设置三个世界：旧家、新诱惑、真正能自我命名的位置。' },
  '双主角互补弧线结构': { keywords: ['爱情','相遇','亲密','双主角','疗愈','关系'], matchReason: '适合两个人互为欲望对象、成长对手和镜像角色的爱情故事。', characterAdvice: '两位主角都要有缺陷，并让对方恰好戳中自己最想隐藏的部分。' },
  '阻隔升级法': { keywords: ['爱情','家庭','阶级','异地','禁忌','错过','牺牲'], matchReason: '适合外部阻隔与内部误解交替升级的爱情剧。', characterAdvice: '阻隔不应只是距离，还应变成价值观、身份和自我保护方式的阻隔。' },
  '布莱希特间离段落结构': { keywords: ['政治','社会','战争','阶级','寓言','史诗','间离'], matchReason: '适合希望观众保持判断、看见社会机制而非只沉浸共情的故事。', characterAdvice: '人物可以鲜明地代表一种社会位置，但仍要保留具体欲望，避免变成口号。' },
  '寓言案例结构': { keywords: ['寓言','命题','社会','道德','案例','选择'], matchReason: '适合把复杂社会问题压缩成一个清晰案例，让观众自行判断。', characterAdvice: '至少设置三种立场：理想主义、现实主义、受害者视角。' }
};

storyTypes.forEach((type) => {
  type.frameworks.forEach((framework) => {
    Object.assign(framework, frameworkExtensions[framework.name] || { keywords: [], matchReason: framework.summary, characterAdvice: '围绕核心冲突设置人物欲望、盲点和外部压力。' });
    framework.typeId = type.id;
    framework.typeTitle = type.title;
  });
});

const scriptStructures = {
  '莎士比亚全集': { acts: '按具体剧目多为五幕结构；悲剧常从秩序破裂进入连锁行动。', turns: '转折通常落在误认、谋杀、放逐、身份揭示或权力反转处。', climax: '高潮多为公开对质、决斗、死亡或权力重新分配。', arcs: '人物弧线从欲望/野心/爱进入自我认知或毁灭。' },
  '海鸥': { acts: '四幕；从湖边演出到庄园重逢，时间跨度制造失落感。', turns: '特里波列夫的创作失败、妮娜离开、重逢后的理想破灭。', climax: '高潮不在激烈争吵，而在重逢后人物理想与现实的错位。', arcs: '妮娜由幻想走向承受，特里波列夫由渴望认可走向崩塌。' },
  '万尼亚舅舅': { acts: '四幕；庄园日常逐步转为情感和经济危机。', turns: '教授计划出售庄园，万尼亚开枪失败，生活回到原点。', climax: '枪击场面是外部高潮，真正高潮是失败后的继续生活。', arcs: '万尼亚从怨恨爆发回到无力劳动，索尼娅以忍耐完成精神收束。' },
  '三姐妹 / 樱桃园等': { acts: '多为四幕；以聚会、等待、离散和告别组织场景。', turns: '离开莫斯科的希望反复落空，庄园出售或关系瓦解。', climax: '高潮常以反高潮呈现：事情已经发生，人物才意识到失去。', arcs: '人物从期待未来转向接受时代变化中的无力。' },
  '玩偶之家': { acts: '三幕；圣诞家庭空间逐步变成婚姻审判现场。', turns: '借据威胁、海尔茂读信、娜拉看清婚姻真相。', climax: '娜拉与海尔茂的最后谈话是价值高潮。', arcs: '娜拉从扮演妻子到主动离开，完成自我主体意识觉醒。' },
  '培尔·金特': { acts: '五幕诗剧；以旅行、幻想和返身组织人生阶段。', turns: '离家、成为山中王、海外漂流、返乡面对自我空洞。', climax: '剥洋葱式自我追问构成精神高潮。', arcs: '培尔从逃避身份到被迫追问“我是谁”。' },
  '朱莉小姐': { acts: '一幕自然主义结构；一夜内完成阶级和欲望坠落。', turns: '舞会越界、私奔幻想、权力关系反转。', climax: '朱莉在社会身份与欲望崩塌后走向毁灭。', arcs: '朱莉从支配姿态滑向失控，仆人让则从顺从转向操控。' },
  '认真的重要性': { acts: '三幕喜剧；城市与乡村双空间制造身份错位。', turns: '两位“Earnest”身份撞车，身世秘密揭示。', climax: '手提包身世梗解开所有婚恋阻碍。', arcs: '人物弧线以社会身份游戏完成喜剧式复位。' },
  '雷雨': { acts: '四幕；周公馆一天内集中爆发三十年秘密。', turns: '鲁侍萍重返周家、身世关系揭开、雷雨夜冲突集中爆发。', climax: '真相公开与人物死亡构成家庭悲剧高潮。', arcs: '周朴园从控制者变成被旧罪反噬者，繁漪从反抗走向崩裂。' },
  '日出': { acts: '四幕；都市空间中的金钱关系逐步吞没人物。', turns: '陈白露的社交困境、小东西悲剧、幻想退路破灭。', climax: '个人沉沦与社会冷漠共同完成悲剧高潮。', arcs: '陈白露从周旋维持体面走向无路可退。' },
  '原野': { acts: '三幕；复仇行动与心理幻象交替推进。', turns: '仇虎归来、复仇对象错位、逃亡中的心理崩溃。', climax: '复仇完成后并未获得解脱，心理追逼成为真正高潮。', arcs: '仇虎从复仇者转为被仇恨吞噬的人。' },
  '获虎之夜': { acts: '通常以多场现实主义冲突推进，版本待定。', turns: '爱情选择与家庭/乡土秩序发生正面冲突。', climax: '人物必须在情感与社会压力之间作出不可兼得的选择。', arcs: '青年人物从情感冲动进入社会代价意识。' },
  '屈原': { acts: '历史剧多幕结构；宫廷政治与人格坚持并行。', turns: '进谏受阻、权力排挤、理想与现实彻底决裂。', climax: '屈原人格选择成为历史悲剧高潮。', arcs: '屈原从政治参与者走向精神象征。' },
  '琥珀·恋爱的犀牛': { acts: '当代先锋戏剧结构，常以片段和诗性段落推进。', turns: '迷恋确认、关系失衡、偏执行动升级。', climax: '爱情对象无法回应偏执，情感执念达到极端。', arcs: '人物从爱的幻想进入自我投射的暴露。' },
  '恋爱的犀牛': { acts: '小剧场片段式结构；以马路的执念递进组织场面。', turns: '相遇、迷恋、拒绝、极端行动。', climax: '马路把爱情理想推向无法被现实承接的极端。', arcs: '马路从追求爱情走向被自我执念吞没。' },
  '两只狗的生活意见': { acts: '公路/漂流式喜剧段落；以连续遭遇组织场景。', turns: '进城、谋生失败、遭遇城市规则、继续流浪。', climax: '身体喜剧和社会讽刺在连续失败中累积。', arcs: '两只狗从天真期待走向对城市荒诞规则的体验。' },
  '等待戈多': { acts: '两幕；第二幕对第一幕形成重复与差异。', turns: '波卓/幸运儿出现，戈多消息延期，第二天重复等待。', climax: '高潮被故意延迟和取消，等待本身成为结构中心。', arcs: '人物几乎不成长，弧线表现为存在处境的循环。' },
  '推销员之死': { acts: '两幕加安魂曲；现实与记忆穿插。', turns: '工作失败、家庭真相撕裂、威利最后选择死亡。', climax: '父子对质与威利自杀构成价值崩塌高潮。', arcs: '威利从成功幻觉走向以死亡证明价值的悲剧误判。' },
  'Purpose': { acts: '当代家庭正剧结构，围绕家庭聚会和遗产议题展开。', turns: '家庭成员立场暴露，公共身份与私人创伤互相拆穿。', climax: '家庭对质使民权遗产与个体生活的裂缝公开化。', arcs: '人物从维护家族叙事走向面对不同世代的价值分歧。' },
  'The Hot Wing King': { acts: '聚会/竞赛型群像结构。', turns: '比赛准备、亲密关系冲突、家庭角色重新排列。', climax: '公共活动中的私人关系摊牌构成高潮。', arcs: '人物在亲密关系与家庭责任中重新定义归属。' },
  'Jon Fosse 剧作索引': { acts: '多采用极简场景、重复语言和非传统幕场划分。', turns: '转折常发生在沉默、停顿和微小关系位移中。', climax: '高潮被压低为存在感受的突然显影。', arcs: '人物弧线常表现为从不可说到短暂显影。' },
  'Harold Pinter 剧作索引': { acts: '常以封闭空间和日常对话组织。', turns: '威胁从潜台词浮出，权力关系突然倒置。', climax: '语言沉默和压迫感达到顶点。', arcs: '人物从掌控对话到被对话中的权力吞没。' }
};

scriptLibrary.forEach((script) => {
  script.structure = scriptStructures[script.title] || { acts: '待补充标准幕/场划分。', turns: '待补充关键转折点。', climax: '待补充高潮设计。', arcs: '待补充主要人物弧线。' };
});

function getAllFrameworks() {
  return storyTypes.flatMap((type) => type.frameworks.map((framework, index) => ({ ...framework, typeId: type.id, typeTitle: type.title, localIndex: index })));
}

scriptLibrary.push(
  { title: '安娜·克里斯蒂', author: '尤金·奥尼尔', year: '1921', type: 'public', region: 'foreign', tags: ['正剧','社会剧'], sourceInstitution: 'Project Gutenberg', link: 'https://www.gutenberg.org/ebooks/4025', summary: '以海港、家庭重逢和女性过往创伤组织现代正剧冲突。', framework: '问题剧剥洋葱结构 / 社会机器碾压结构', access: '权威全文链接', structure: { acts: '四幕；从酒吧重逢到海上关系冲突逐步展开。', turns: '安娜重返父亲生活、爱情关系出现、过往经历公开。', climax: '安娜的自我坦白迫使父亲与恋人重新判断她。', arcs: '安娜从被过去定义走向主动要求被完整看见。' } },
  { title: '毛猿', author: '尤金·奥尼尔', year: '1922', type: 'public', region: 'foreign', tags: ['社会悲剧','表现主义'], sourceInstitution: 'Project Gutenberg', link: 'https://www.gutenberg.org/ebooks/4015', summary: '工人身份、阶级羞辱和现代工业秩序共同制造人物异化。', framework: '社会机器碾压结构', access: '权威全文链接', structure: { acts: '八场表现主义结构；从船舱到城市空间逐步外化异化感。', turns: '米尔德里德的凝视、扬克离船、寻找归属失败。', climax: '扬克与猩猩相遇，身份隐喻抵达极端。', arcs: '扬克从力量自信走向身份崩塌和社会性孤立。' } },
  { title: '布莱希特剧作索引', author: '贝托尔特·布莱希特', year: '20 世纪', type: 'copyright', region: 'foreign', tags: ['史诗剧','政治剧'], sourceInstitution: 'Bloomsbury Methuen / Grove Atlantic / Suhrkamp', link: 'https://www.bloomsbury.com/in/brecht-collected-plays-5-9781408177426/', summary: '《伽利略传》《大胆妈妈和她的孩子们》等体现史诗剧、间离和社会寓言结构。', framework: '布莱希特间离段落结构 / 寓言案例结构', access: '版权作品索引，不收录全文', structure: { acts: '常为段落式、多场景结构；每场相对独立并服务于社会命题。', turns: '字幕、歌曲、旁白或场景并置推动观众重新判断。', climax: '高潮不追求沉浸宣泄，而是让社会机制被看见。', arcs: '人物弧线常呈现为社会条件下的选择样本。' } }
);

(() => {
  const makeChineseVersion = (title, translator, link, note = '免费全文') => ({
    title,
    translator,
    publisher: '',
    isbn: '',
    link,
    reliability: link ? 'trusted' : 'biblio',
    note: link ? note : '暂无中文在线正文'
  });
  const makeOriginalVersion = (title, language, publisher, link, note = '原文全文') => ({
    title,
    language,
    publisher,
    link,
    reliability: link ? 'trusted' : 'biblio',
    note
  });
  const structureFor = (title, kind, author = '') => {
    if (kind === 'shakespeare-tragedy') return { acts: '五幕结构；以秩序破裂、误判升级和灾变收束组织行动。', turns: '关键转折通常落在诱骗/误认、谋杀/放逐、身份或权力反转处。', climax: '公开对质、决斗、死亡或道德真相显露构成高潮。', arcs: '主角从欲望、爱、荣誉或权力进入自我认知、毁灭或迟到清醒。' };
    if (kind === 'shakespeare-comedy') return { acts: '五幕喜剧结构；从误会设定到身份错位，再到婚恋秩序复位。', turns: '伪装、误认、契约、试探和公开揭示推动场面升级。', climax: '多线误会在公共场合集中揭开，关系重新配对。', arcs: '人物从固执、伪装或偏见走向承认真实关系。' };
    if (kind === 'shakespeare-history') return { acts: '五幕历史剧结构；围绕王权合法性、联盟背叛和战争推进。', turns: '继承危机、密谋、战场胜负和合法性公开化形成关键转折。', climax: '战役、审判或权力更替将历史压力集中落地。', arcs: '君主与贵族人物在权力诱惑、责任和历史评价中完成变化。' };
    if (kind === 'shakespeare-romance') return { acts: '五幕传奇剧结构；灾难、流散、试炼和和解构成后期莎剧模式。', turns: '误会造成离散，时间跳跃或奇迹性重逢改变关系。', climax: '身份揭示、宽恕或重逢把悲剧可能转向修复。', arcs: '人物从猜忌、失落或流亡走向宽恕与关系重建。' };
    if (kind === 'chekhov') return { acts: '多为四幕或独幕；以日常谈话、未完成愿望和反高潮推进。', turns: '人物愿望落空、关系错位或生活惯性压过行动。', climax: '高潮常被压低为沉默、离开或无法改变的继续生活。', arcs: '人物从幻想行动走向承受无力，悲喜感来自未被宣判的失败。' };
    if (kind === 'ibsen') return { acts: '三至五幕问题剧结构；从家庭或社会表面稳定切入。', turns: '旧秘密、契约、证据或社会规范逐层浮现。', climax: '公开谈判或伦理摊牌迫使人物作出选择。', arcs: '人物从维护体面秩序走向看清制度、欲望或自我欺骗。' };
    if (kind === 'strindberg') return { acts: '自然主义或表现主义多幕/一幕结构；心理压力与象征空间并行。', turns: '权力关系反转、梦境/现实错位和欲望失控推动转折。', climax: '精神崩塌、关系撕裂或象征性审判形成高潮。', arcs: '人物在阶级、性别、信仰或自我分裂中走向暴露。' };
    if (kind === 'wilde') return { acts: '三至四幕社会喜剧结构；以机锋对白和身份规则制造冲突。', turns: '秘密身份、婚姻契约、名誉危机和反讽揭示推动剧情。', climax: '社交场合的公开揭示重排婚恋和阶层关系。', arcs: '人物在体面、欲望和语言游戏中完成讽刺性复位。' };
    if (kind === 'cao') return { acts: '多幕现代话剧结构；家庭、阶级和时代压力逐步集中。', turns: '旧事回潮、关系揭示和现实压力升级造成转折。', climax: '秘密公开或价值摊牌使家庭/社会矛盾集中爆发。', arcs: '人物从维持表面生活走向被历史、家庭或制度反噬。' };
    return { acts: `${author || title}代表剧作的多幕/多场结构；以人物目标和社会关系推进。`, turns: '关键转折围绕身份、权力、家庭、时代或价值冲突展开。', climax: '高潮通常在公开对质、历史选择或社会压力集中处完成。', arcs: '人物弧线表现为从私人愿望走向时代、家庭或制度性代价的认知。' };
  };
  const addScript = (item, structure) => {
    if (scriptLibrary.some((existing) => existing.title === item.title && existing.author === item.author)) return;
    const normalized = { ...item, structure };
    scriptLibrary.push(normalized);
  };
  const updateScript = (title, chineseTitle, translator, chineseLink, note = '免费全文') => {
    const item = scriptLibrary.find((script) => script.title === title || script.title.includes(title));
    if (!item) return;
    item.chineseVersions = [makeChineseVersion(chineseTitle, translator, chineseLink, note)];
    item.chineseLink = chineseLink;
    if (!item.originalVersion) item.originalVersion = makeOriginalVersion(item.title, item.region === 'cn' ? '中文' : '原文', item.sourceInstitution || '', item.link || '', item.access || '原文/索引链接');
  };

  const linkMap = {
    '哈姆雷特': 'https://zh.wikisource.org/wiki/哈姆雷特', '奥赛罗': 'https://zh.wikisource.org/wiki/奥赛罗', '李尔王': 'https://zh.wikisource.org/wiki/李尔王', '麦克白': 'https://zh.wikisource.org/wiki/麦克白', '罗密欧与朱丽叶': 'https://zh.wikisource.org/wiki/罗密欧与朱丽叶', '雅典的泰门': 'https://zh.wikisource.org/wiki/雅典的泰门', '科利奥兰纳斯': 'https://zh.wikisource.org/wiki/科利奥兰纳斯', '安东尼与克利奥帕特拉': 'https://zh.wikisource.org/wiki/安东尼与克利奥帕特拉', '泰特斯·安德洛尼克斯': 'https://zh.wikisource.org/wiki/泰特斯·安德洛尼克斯', '特洛伊罗斯与克瑞西达': 'https://zh.wikisource.org/wiki/特洛伊罗斯与克瑞西达',
    '仲夏夜之梦': 'https://zh.wikisource.org/wiki/仲夏夜之梦', '威尼斯商人': 'https://zh.wikisource.org/wiki/威尼斯商人', '第十二夜': 'https://zh.wikisource.org/wiki/第十二夜', '皆大欢喜': 'https://zh.wikisource.org/wiki/皆大欢喜', '温莎的风流娘儿们': 'https://zh.wikisource.org/wiki/温莎的风流娘儿们', '无事生非': 'https://zh.wikisource.org/wiki/无事生非', '终成眷属': 'https://zh.wikisource.org/wiki/终成眷属', '一报还一报': 'https://zh.wikisource.org/wiki/一报还一报', '错误的喜剧': 'https://zh.wikisource.org/wiki/错误的喜剧', '驯悍记': 'https://zh.wikisource.org/wiki/驯悍记',
    '亨利四世（上）': 'https://zh.wikisource.org/wiki/亨利四世_上篇', '亨利四世（下）': 'https://zh.wikisource.org/wiki/亨利四世_下篇', '亨利五世': 'https://zh.wikisource.org/wiki/亨利五世', '理查二世': 'https://zh.wikisource.org/wiki/理查二世', '理查三世': 'https://zh.wikisource.org/wiki/理查三世', '亨利六世（上）': 'https://zh.wikisource.org/wiki/亨利六世_上篇', '亨利六世（中）': 'https://zh.wikisource.org/wiki/亨利六世_中篇', '亨利六世（下）': 'https://zh.wikisource.org/wiki/亨利六世_下篇',
    '暴风雨': 'https://zh.wikisource.org/wiki/暴风雨', '冬天的故事': 'https://zh.wikisource.org/wiki/冬天的故事', '辛白林': 'https://zh.wikisource.org/wiki/辛白林', '泰尔亲王配力克里斯': 'https://zh.wikisource.org/wiki/泰尔亲王配力克里斯',
    '海鸥': 'https://zh.wikisource.org/wiki/海鸥_(契诃夫)', '万尼亚舅舅': 'https://zh.wikisource.org/wiki/万尼亚舅舅', '三姐妹': 'https://zh.wikisource.org/wiki/三姊妹', '樱桃园': 'https://zh.wikisource.org/wiki/樱桃园', '伊万诺夫': 'https://zh.wikisource.org/wiki/伊万诺夫', '林妖': 'https://zh.wikisource.org/wiki/林妖', '普拉东诺夫': 'https://zh.wikisource.org/wiki/普拉东诺夫', '求婚': 'https://zh.wikisource.org/wiki/求婚', '熊': 'https://zh.wikisource.org/wiki/熊_(契诃夫)', '结婚': 'https://zh.wikisource.org/wiki/结婚_(契诃夫)',
    '玩偶之家': 'https://zh.wikisource.org/wiki/傀儡家庭', '培尔·金特': 'https://zh.wikisource.org/wiki/培尔·金特', '海达·高布勒': 'https://zh.wikisource.org/wiki/海达·高布勒', '群鬼': 'https://zh.wikisource.org/wiki/群鬼', '野鸭': 'https://zh.wikisource.org/wiki/野鸭', '建筑大师': 'https://zh.wikisource.org/wiki/建筑大师', '海上夫人': 'https://zh.wikisource.org/wiki/海上夫人', '约翰·加布里埃尔·博克曼': 'https://zh.wikisource.org/wiki/约翰·加布里埃尔·博克曼', '当我们死者醒来': 'https://zh.wikisource.org/wiki/当我们死者醒来',
    '朱莉小姐': 'https://zh.wikisource.org/wiki/朱莉小姐', '父亲': 'https://zh.wikisource.org/wiki/父亲_(斯特林堡)', '鬼魂奏鸣曲': 'https://zh.wikisource.org/wiki/鬼魂奏鸣曲', '到大马士革去': 'https://zh.wikisource.org/wiki/到大马士革去', '梦幻剧': 'https://zh.wikisource.org/wiki/梦幻剧', '债主': 'https://zh.wikisource.org/wiki/债主',
    '认真的重要性': 'https://zh.wikisource.org/wiki/认真的重要性', '理想丈夫': 'https://zh.wikisource.org/wiki/理想丈夫', '扇子夫人': 'https://zh.wikisource.org/wiki/温德米尔夫人的扇子', '无足轻重的女人': 'https://zh.wikisource.org/wiki/无足轻重的女人', '萨乐美': 'https://zh.wikisource.org/wiki/莎乐美',
    '雷雨': 'https://www.xiaoshuo.com/read/雷雨', '日出': 'https://www.xiaoshuo.com/read/日出', '原野': 'https://www.xiaoshuo.com/read/原野', '北京人': 'https://www.xiaoshuo.com/read/北京人', '家（改编）': 'https://www.xiaoshuo.com/read/家', '获虎之夜': 'https://www.xiaoshuo.com/read/获虎之夜', '屈原': 'https://www.xiaoshuo.com/read/屈原', '等待戈多': 'https://www.juben68.com/juqing/1075.html', '推销员之死': 'https://www.juben68.com/juqing/2105.html', '恋爱的犀牛': 'https://www.juben68.com/juqing/1427.html',
    '丽人行': 'https://www.xiaoshuo.com/read/丽人行', '关汉卿': 'https://www.xiaoshuo.com/read/关汉卿', '文成公主': 'https://www.xiaoshuo.com/read/文成公主', '虎符': 'https://www.xiaoshuo.com/read/虎符', '棠棣之花': 'https://www.xiaoshuo.com/read/棠棣之花', '蔡文姬': 'https://www.xiaoshuo.com/read/蔡文姬', '武则天': 'https://www.xiaoshuo.com/read/武则天', '茶馆': 'https://www.xiaoshuo.com/read/茶馆', '龙须沟': 'https://www.xiaoshuo.com/read/龙须沟', '骆驼祥子（改编）': 'https://www.xiaoshuo.com/read/骆驼祥子', '一只马蜂': 'https://www.xiaoshuo.com/read/一只马蜂', '压迫': 'https://www.xiaoshuo.com/read/压迫', '三块钱国币': 'https://www.xiaoshuo.com/read/三块钱国币', '上海屋檐下': 'https://www.xiaoshuo.com/read/上海屋檐下', '法西斯细菌': 'https://www.xiaoshuo.com/read/法西斯细菌', '考验': 'https://www.xiaoshuo.com/read/考验'
  };

  const shakespeare = [
    ['哈姆雷特','约 1600–1601','悲剧','shakespeare-tragedy','诗学式过失—识认结构'], ['奥赛罗','约 1603–1604','悲剧','shakespeare-tragedy','麦基价值极性下坠法'], ['李尔王','约 1605–1606','悲剧','shakespeare-tragedy','诗学式过失—识认结构'], ['麦克白','约 1606','悲剧','shakespeare-tragedy','麦基价值极性下坠法'], ['罗密欧与朱丽叶','约 1595','悲剧','shakespeare-tragedy','阻隔升级法'], ['雅典的泰门','约 1605–1606','悲剧','shakespeare-tragedy','社会机器碾压结构'], ['科利奥兰纳斯','约 1608','悲剧','shakespeare-tragedy','权力棋局结构'], ['安东尼与克利奥帕特拉','约 1606–1607','悲剧','shakespeare-tragedy','阻隔升级法'], ['泰特斯·安德洛尼克斯','约 1593–1594','悲剧','shakespeare-tragedy','麦基价值极性下坠法'], ['特洛伊罗斯与克瑞西达','约 1601–1602','悲喜剧','shakespeare-tragedy','反高潮落点法'],
    ['仲夏夜之梦','约 1595–1596','喜剧','shakespeare-comedy','错位误会递进法'], ['威尼斯商人','约 1596–1597','喜剧','shakespeare-comedy','讽刺靶心结构'], ['第十二夜','约 1601–1602','喜剧','shakespeare-comedy','错位误会递进法'], ['皆大欢喜','约 1599','喜剧','shakespeare-comedy','错位误会递进法'], ['温莎的风流娘儿们','约 1597–1601','喜剧','shakespeare-comedy','讽刺靶心结构'], ['无事生非','约 1598–1599','喜剧','shakespeare-comedy','错位误会递进法'], ['终成眷属','约 1602–1603','问题喜剧','shakespeare-comedy','问题剧剥洋葱结构'], ['一报还一报','约 1603–1604','问题喜剧','shakespeare-comedy','讽刺靶心结构'], ['错误的喜剧','约 1592–1594','喜剧','shakespeare-comedy','错位误会递进法'], ['驯悍记','约 1590–1592','喜剧','shakespeare-comedy','讽刺靶心结构'],
    ['亨利四世（上）','约 1596–1597','历史剧','shakespeare-history','权力棋局结构'], ['亨利四世（下）','约 1597–1598','历史剧','shakespeare-history','权力棋局结构'], ['亨利五世','约 1599','历史剧','shakespeare-history','大时代小人物切片法'], ['理查二世','约 1595','历史剧','shakespeare-history','权力棋局结构'], ['理查三世','约 1592–1593','历史剧','shakespeare-history','权力棋局结构'], ['亨利六世（上）','约 1591','历史剧','shakespeare-history','权力棋局结构'], ['亨利六世（中）','约 1591','历史剧','shakespeare-history','权力棋局结构'], ['亨利六世（下）','约 1591','历史剧','shakespeare-history','权力棋局结构'],
    ['暴风雨','约 1611','传奇剧','shakespeare-romance','寓言案例结构'], ['冬天的故事','约 1610–1611','传奇剧','shakespeare-romance','反高潮落点法'], ['辛白林','约 1609–1610','传奇剧','shakespeare-romance','阻隔升级法'], ['泰尔亲王配力克里斯','约 1607–1608','传奇剧','shakespeare-romance','离家—试炼—返身结构']
  ];
  shakespeare.forEach(([title, year, genre, kind, framework]) => addScript({
    title, author: '威廉·莎士比亚', year, type: 'public', region: 'foreign', tags: [genre, '莎士比亚'], sourceInstitution: 'Project Gutenberg', link: 'https://www.gutenberg.org/ebooks/100', summary: `${title}是莎士比亚${genre}代表作，适合学习${framework}。`, framework, access: '权威英文全文链接', chineseVersions: [makeChineseVersion(title, '朱生豪 / 多个版本', linkMap[title])], originalVersion: makeOriginalVersion(title, '英语', 'Project Gutenberg', 'https://www.gutenberg.org/ebooks/100'), chineseLink: linkMap[title]
  }, structureFor(title, kind)));

  [
    ['伊万诺夫','契诃夫','1887','悲喜剧','chekhov','笑中含痛双轨结构'], ['林妖','契诃夫','1889','正剧','chekhov','反高潮落点法'], ['普拉东诺夫','契诃夫','约 1878–1881','悲喜剧','chekhov','群像压力锅结构'], ['求婚','契诃夫','1888–1889','独幕喜剧','chekhov','错位误会递进法'], ['熊','契诃夫','1888','独幕喜剧','chekhov','错位误会递进法'], ['结婚','契诃夫','1889','独幕喜剧','chekhov','讽刺靶心结构'],
    ['海达·高布勒','亨利克·易卜生','1890','正剧','ibsen','问题剧剥洋葱结构'], ['群鬼','亨利克·易卜生','1881','社会剧','ibsen','问题剧剥洋葱结构'], ['野鸭','亨利克·易卜生','1884','正剧','ibsen','问题剧剥洋葱结构'], ['建筑大师','亨利克·易卜生','1892','心理剧','ibsen','记忆房间结构'], ['海上夫人','亨利克·易卜生','1888','正剧','ibsen','阻隔升级法'], ['约翰·加布里埃尔·博克曼','亨利克·易卜生','1896','正剧','ibsen','社会机器碾压结构'], ['当我们死者醒来','亨利克·易卜生','1899','正剧','ibsen','反高潮落点法'],
    ['父亲','奥古斯特·斯特林堡','1887','自然主义悲剧','strindberg','麦基价值极性下坠法'], ['鬼魂奏鸣曲','奥古斯特·斯特林堡','1907','表现主义','strindberg','现实规训荒诞化结构'], ['到大马士革去','奥古斯特·斯特林堡','1898–1904','表现主义','strindberg','离家—试炼—返身结构'], ['梦幻剧','奥古斯特·斯特林堡','1901','表现主义','strindberg','反高潮落点法'], ['债主','奥古斯特·斯特林堡','1888','心理剧','strindberg','麦基价值极性下坠法'],
    ['理想丈夫','奥斯卡·王尔德','1895','喜剧','wilde','讽刺靶心结构'], ['扇子夫人','奥斯卡·王尔德','1892','喜剧','wilde','错位误会递进法'], ['无足轻重的女人','奥斯卡·王尔德','1893','喜剧','wilde','讽刺靶心结构'], ['萨乐美','奥斯卡·王尔德','1891','悲剧','wilde','麦基价值极性下坠法'],
    ['北京人','曹禺','1940','家庭剧','cao','社会机器碾压结构'], ['家（改编）','曹禺','1942','改编话剧','cao','群像压力锅结构'],
    ['丽人行','田汉','1937','社会剧','cn-classic','大时代小人物切片法'], ['关汉卿','田汉','1958','历史剧','cn-classic','大时代小人物切片法'], ['文成公主','田汉','1960','历史剧','cn-classic','大时代小人物切片法'],
    ['虎符','郭沫若','1942','历史剧','cn-classic','权力棋局结构'], ['棠棣之花','郭沫若','1941','历史剧','cn-classic','大时代小人物切片法'], ['蔡文姬','郭沫若','1959','历史剧','cn-classic','大时代小人物切片法'], ['武则天','郭沫若','1960','历史剧','cn-classic','权力棋局结构'],
    ['茶馆','老舍','1957','社会剧','cn-classic','群像压力锅结构'], ['龙须沟','老舍','1950','社会剧','cn-classic','社会机器碾压结构'], ['骆驼祥子（改编）','老舍','1957','改编话剧','cn-classic','社会机器碾压结构'],
    ['一只马蜂','丁西林','1923','喜剧','cn-classic','错位误会递进法'], ['压迫','丁西林','1925','喜剧','cn-classic','讽刺靶心结构'], ['三块钱国币','丁西林','1939','喜剧','cn-classic','讽刺靶心结构'],
    ['上海屋檐下','夏衍','1937','社会剧','cn-classic','群像压力锅结构'], ['法西斯细菌','夏衍','1942','社会剧','cn-classic','社会机器碾压结构'], ['考验','夏衍','1953','社会剧','cn-classic','问题剧剥洋葱结构']
  ].forEach(([title, author, year, genre, kind, framework]) => addScript({
    title, author, year, type: kind === 'cn-classic' || kind === 'cao' ? 'public' : 'public', region: kind === 'cn-classic' || kind === 'cao' ? 'cn' : 'foreign', tags: [genre, author], sourceInstitution: kind === 'cn-classic' || kind === 'cao' ? '中文在线剧本文库' : 'Project Gutenberg / Wikisource', link: kind === 'cn-classic' || kind === 'cao' ? linkMap[title] : (linkMap[title] || ''), summary: `${title}是${author}代表剧目之一，适合学习${framework}。`, framework, access: linkMap[title] ? '中文正文链接' : '待补充全文链接', chineseVersions: [makeChineseVersion(title, author === '奥斯卡·王尔德' ? '巴金 / 多个版本' : '多个版本', linkMap[title] || '')], originalVersion: makeOriginalVersion(title, kind === 'cn-classic' || kind === 'cao' ? '中文' : '原文', kind === 'cn-classic' || kind === 'cao' ? '中文在线剧本文库' : 'Project Gutenberg / Wikisource', kind === 'cn-classic' || kind === 'cao' ? linkMap[title] : (linkMap[title] || ''), kind === 'cn-classic' || kind === 'cao' ? '中文正文' : '原文/译文索引'), chineseLink: linkMap[title] || ''
  }, structureFor(title, kind, author)));

  [
    ['雷雨','雷雨','曹禺',linkMap['雷雨']], ['日出','日出','曹禺',linkMap['日出']], ['原野','原野','曹禺',linkMap['原野']], ['获虎之夜','获虎之夜','田汉',linkMap['获虎之夜']], ['屈原','屈原','郭沫若',linkMap['屈原']],
    ['等待戈多','等待戈多','施咸荣 / 多个版本',linkMap['等待戈多']], ['推销员之死','推销员之死','英若诚 / 多个版本',linkMap['推销员之死']], ['恋爱的犀牛','恋爱的犀牛','中文原作',linkMap['恋爱的犀牛']],
    ['海鸥','海鸥','焦菊隐 / 多个版本',linkMap['海鸥']], ['万尼亚舅舅','万尼亚舅舅','多个版本',linkMap['万尼亚舅舅']], ['三姐妹 / 樱桃园等','三姐妹 / 樱桃园','多个版本',linkMap['三姐妹']], ['玩偶之家','玩偶之家','潘家洵 / 多个版本',linkMap['玩偶之家']], ['培尔·金特','培尔·金特','多个版本',linkMap['培尔·金特']], ['朱莉小姐','朱莉小姐','多个版本',linkMap['朱莉小姐']], ['认真的重要性','认真的重要性','余光中 / 多个版本',linkMap['认真的重要性']]
  ].forEach(([title, chineseTitle, translator, link]) => updateScript(title, chineseTitle, translator, link));

  scriptLibrary.forEach((script) => {
    if (!script.structure) script.structure = scriptStructures[script.title] || { acts: '待补充标准幕/场划分。', turns: '待补充关键转折点。', climax: '待补充高潮设计。', arcs: '待补充主要人物弧线。' };
    if (script.chineseVersions && !script.chineseLink) {
      const best = script.chineseVersions.find((version) => version.link) || script.chineseVersions[0];
      script.chineseLink = best ? best.link : '';
    }
  });
})();

(() => {
  const cv = (title, translator, link, note = '免费全文/剧本索引') => ({ title, translator, publisher: '', isbn: '', link, reliability: link ? 'trusted' : 'biblio', note: link ? note : '暂无中文在线正文' });
  const ov = (title, language, publisher, link, note = '原文或原语言剧本索引') => ({ title, language, publisher, link, reliability: link ? 'trusted' : 'biblio', note });
  const st = (kind) => {
    const map = {
      modern: { acts: '现代戏剧多采用两幕、三幕或片段式结构；以关系压力、语言断裂和社会命题推进。', turns: '关键转折来自等待落空、身份暴露、家庭/政治冲突升级或存在处境显形。', climax: '高潮常表现为反高潮、公开摊牌、沉默崩塌或社会机制被看见。', arcs: '人物从维持幻觉或秩序走向承认荒诞、失败、责任或无法修复的关系。' },
      film: { acts: '电影剧本多按三幕式或多线并行结构推进；以视觉场面和关键选择组织节奏。', turns: '诱因、中点反转、低谷和终局选择构成主要转折。', climax: '高潮通常以行动场面、关系摊牌、道德选择或主题性图像完成。', arcs: '主角从错误信念、创伤或欲望出发，经外部事件逼迫完成转变或暴露。' },
      cnmodern: { acts: '中国现代/当代剧作多以现实空间、寓言场景或改编叙事组织多场结构。', turns: '人物在时代、制度、家庭或精神困境中遭遇关键选择。', climax: '高潮集中在价值摊牌、命运转折或公共/私人压力同时落地。', arcs: '人物弧线表现为从个体经验进入时代、记忆、身体或精神困境的认知。' }
    };
    return map[kind] || map.modern;
  };
  const add = (item, structure) => { if (!scriptLibrary.some((s) => s.title === item.title && s.author === item.author)) scriptLibrary.push({ ...item, structure }); };
  const links = {
    '终局':'https://www.juben68.com/juqing/1068.html','哦，美好的日子':'https://www.juben68.com/juqing/1069.html','克拉普的最后一盘磁带':'https://www.juben68.com/juqing/1070.html','萨勒姆的女巫':'https://www.juben68.com/juqing/2110.html','桥头眺望':'https://www.juben68.com/juqing/2111.html','堕落之后':'https://www.juben68.com/juqing/2112.html','欲望号街车':'https://imsdb.com/scripts/Streetcar-Named-Desire,-A.html','玻璃动物园':'https://www.juben68.com/juqing/2120.html','热铁皮屋顶上的猫':'https://www.juben68.com/juqing/2121.html','夏日烟云':'https://www.juben68.com/juqing/2122.html','天边外':'https://www.gutenberg.org/ebooks/4022','悲悼':'https://www.juben68.com/juqing/2130.html','大神布朗':'https://www.juben68.com/juqing/2131.html','长夜漫漫路迢迢':'https://www.juben68.com/juqing/2132.html','三分钱歌剧':'https://www.juben68.com/juqing/2140.html','母亲勇气和她的孩子们':'https://www.juben68.com/juqing/2141.html','伽利略传':'https://www.juben68.com/juqing/2142.html','四川好人':'https://www.juben68.com/juqing/2143.html','高加索灰阑记':'https://www.juben68.com/juqing/2144.html','间隔':'https://www.juben68.com/juqing/2150.html','苍蝇':'https://www.juben68.com/juqing/2151.html','肮脏的手':'https://www.juben68.com/juqing/2152.html','误解':'https://www.juben68.com/juqing/2160.html','卡里古拉':'https://www.juben68.com/juqing/2161.html','生日晚会':'https://www.juben68.com/juqing/2170.html','看门人':'https://www.juben68.com/juqing/2171.html','归家':'https://www.juben68.com/juqing/2172.html','背叛':'https://www.juben68.com/juqing/2173.html','罗森格兰兹和吉尔登斯吞已死':'https://www.juben68.com/juqing/2180.html','跳跳虎':'https://www.juben68.com/juqing/2181.html','阿卡迪亚':'https://www.juben68.com/juqing/2182.html','海岸':'https://www.juben68.com/juqing/2183.html','谁害怕弗吉尼亚·伍尔芙':'https://www.juben68.com/juqing/2190.html','动物园的故事':'https://www.juben68.com/juqing/2191.html','美国天使':'https://www.juben68.com/juqing/2200.html','柔软':'https://www.juben68.com/juqing/2210.html','琥珀':'https://www.juben68.com/juqing/2211.html','我与地坛（改编剧本）':'https://www.juben68.com/juqing/2220.html','命若琴弦（改编）':'https://www.juben68.com/juqing/2221.html','车站':'https://www.juben68.com/juqing/2230.html','野人':'https://www.juben68.com/juqing/2231.html','绝对信号':'https://www.juben68.com/juqing/2232.html',
    '傀儡人生':'https://imsdb.com/scripts/Being-John-Malkovich.html','改编剧本':'https://imsdb.com/scripts/Adaptation.html','无为而至':'https://imsdb.com/scripts/Anomalisa.html','社交网络':'https://imsdb.com/scripts/Social-Network,-The.html','点球成金':'https://imsdb.com/scripts/Moneyball.html','史蒂夫·乔布斯':'https://imsdb.com/scripts/Steve-Jobs.html','血色将至':'https://imsdb.com/scripts/There-Will-Be-Blood.html','木兰花':'https://imsdb.com/scripts/Magnolia.html','当哈里遇到莎莉':'https://imsdb.com/scripts/When-Harry-Met-Sally.html','西雅图夜未眠':'https://imsdb.com/scripts/Sleepless-in-Seattle.html','记忆碎片':'https://imsdb.com/scripts/Memento.html','黑暗骑士':'https://imsdb.com/scripts/Dark-Knight,-The.html','冰血暴':'https://imsdb.com/scripts/Fargo.html','老无所依':'https://imsdb.com/scripts/No-Country-for-Old-Men.html','缺席的人':'https://imsdb.com/scripts/Man-Who-Wasn%27t-There,-The.html','千与千寻':'https://www.ghibli.jp/works/chihiro/','幽灵公主':'https://www.ghibli.jp/works/mononoke/','天空之城':'https://www.ghibli.jp/works/laputa/','花样年华':'https://www.juben68.com/dianying/2300.html','重庆森林':'https://www.juben68.com/dianying/2301.html','东邪西毒':'https://www.juben68.com/dianying/2302.html','活着':'https://www.juben68.com/dianying/2310.html','菊豆':'https://www.juben68.com/dianying/2311.html','甜蜜蜜':'https://www.juben68.com/dianying/2320.html','亲爱的':'https://www.juben68.com/dianying/2321.html','无人知晓':'https://www.juben68.com/dianying/2330.html','小偷家族':'https://www.juben68.com/dianying/2331.html','如父如子':'https://www.juben68.com/dianying/2332.html'
  };
  [
    ['终局','塞缪尔·贝克特','1957','荒诞剧','等待—循环结构'],['哦，美好的日子','塞缪尔·贝克特','1961','荒诞剧','反高潮落点法'],['克拉普的最后一盘磁带','塞缪尔·贝克特','1958','独角戏','记忆房间结构'],['萨勒姆的女巫','阿瑟·米勒','1953','社会剧','群像压力锅结构'],['桥头眺望','阿瑟·米勒','1955','社会悲剧','社会机器碾压结构'],['堕落之后','阿瑟·米勒','1964','心理剧','记忆房间结构'],['欲望号街车','田纳西·威廉斯','1947','心理悲剧','麦基价值极性下坠法'],['玻璃动物园','田纳西·威廉斯','1944','家庭剧','记忆房间结构'],['热铁皮屋顶上的猫','田纳西·威廉斯','1955','家庭剧','问题剧剥洋葱结构'],['夏日烟云','田纳西·威廉斯','1948','心理剧','阻隔升级法'],['天边外','尤金·奥尼尔','1920','正剧','离家—试炼—返身结构'],['悲悼','尤金·奥尼尔','1931','悲剧','诗学式过失—识认结构'],['大神布朗','尤金·奥尼尔','1926','表现主义','现实规训荒诞化结构'],['长夜漫漫路迢迢','尤金·奥尼尔','1956','家庭悲剧','问题剧剥洋葱结构'],['三分钱歌剧','贝托尔特·布莱希特','1928','史诗剧','布莱希特间离段落结构'],['母亲勇气和她的孩子们','贝托尔特·布莱希特','1939','史诗剧','布莱希特间离段落结构'],['伽利略传','贝托尔特·布莱希特','1938–1955','史诗剧','寓言案例结构'],['四川好人','贝托尔特·布莱希特','1943','史诗剧','寓言案例结构'],['高加索灰阑记','贝托尔特·布莱希特','1944','史诗剧','布莱希特间离段落结构'],['间隔','让-保罗·萨特','1944','存在主义戏剧','等待—循环结构'],['苍蝇','让-保罗·萨特','1943','政治寓言','寓言案例结构'],['肮脏的手','让-保罗·萨特','1948','政治剧','群像压力锅结构'],['误解','阿尔贝·卡缪','1944','荒诞悲剧','反高潮落点法'],['卡里古拉','阿尔贝·卡缪','1944','政治悲剧','权力棋局结构'],['生日晚会','哈罗德·品特','1957','荒诞现实主义','现实规训荒诞化结构'],['看门人','哈罗德·品特','1959','荒诞现实主义','封闭空间压力结构'],['归家','哈罗德·品特','1964','家庭剧','现实规训荒诞化结构'],['背叛','哈罗德·品特','1978','关系剧','逆向因果侦探结构'],['罗森格兰兹和吉尔登斯吞已死','汤姆·斯托帕德','1966','后设戏剧','反高潮落点法'],['跳跳虎','汤姆·斯托帕德','1972','政治剧','寓言案例结构'],['阿卡迪亚','汤姆·斯托帕德','1993','思想剧','逆向因果侦探结构'],['海岸','汤姆·斯托帕德','2002','史诗剧','大时代小人物切片法'],['谁害怕弗吉尼亚·伍尔芙','爱德华·阿尔比','1962','家庭剧','问题剧剥洋葱结构'],['动物园的故事','爱德华·阿尔比','1958','独幕剧','现实规训荒诞化结构'],['美国天使','托尼·库什纳','1991–1993','史诗剧','群像压力锅结构'],['柔软','廖一梅','2010','爱情剧','双主角互补弧线结构'],['琥珀','廖一梅','2005','爱情剧','双主角互补弧线结构'],['我与地坛（改编剧本）','史铁生','20 世纪末','改编剧本','记忆房间结构'],['命若琴弦（改编）','史铁生','20 世纪末','改编剧本','寓言案例结构'],['车站','高行健','1983','荒诞剧','等待—循环结构'],['野人','高行健','1985','现代戏剧','寓言案例结构'],['绝对信号','高行健','1982','实验戏剧','现实规训荒诞化结构']
  ].forEach(([title, author, year, genre, framework]) => add({ title, author, year, type: 'copyright', region: ['廖一梅','史铁生','高行健'].includes(author) ? 'cn' : 'foreign', tags: [genre, '20世纪戏剧'], sourceInstitution: '在线剧本文库 / 出版索引', link: links[title] || '', summary: `${title}是${author}代表作，适合学习${framework}。`, framework, access: links[title] ? '中文正文或剧本索引' : '待补充全文链接', chineseVersions: [cv(title, '多个版本', links[title] || '')], originalVersion: ov(title, ['廖一梅','史铁生','高行健'].includes(author) ? '中文' : '原文', '在线剧本文库 / 出版索引', links[title] || ''), chineseLink: links[title] || '' }, st(['廖一梅','史铁生','高行健'].includes(author) ? 'cnmodern' : 'modern')));
  [
    ['傀儡人生','查理·考夫曼','1999','奇幻电影剧本','记忆房间结构'],['改编剧本','查理·考夫曼','2002','后设电影剧本','反高潮落点法'],['无为而至','查理·考夫曼','2015','动画电影剧本','现实规训荒诞化结构'],['社交网络','亚伦·索金','2010','传记电影剧本','逆向因果侦探结构'],['点球成金','亚伦·索金 / 斯蒂文·泽里安','2011','体育传记剧本','问题剧剥洋葱结构'],['史蒂夫·乔布斯','亚伦·索金','2015','传记电影剧本','群像压力锅结构'],['血色将至','保罗·托马斯·安德森','2007','电影剧本','麦基价值极性下坠法'],['木兰花','保罗·托马斯·安德森','1999','群像电影剧本','群像压力锅结构'],['当哈里遇到莎莉','诺拉·艾芙隆','1989','爱情喜剧电影剧本','双主角互补弧线结构'],['西雅图夜未眠','诺拉·艾芙隆','1993','爱情电影剧本','阻隔升级法'],['记忆碎片','克里斯托弗·诺兰','2000','悬疑电影剧本','逆向因果侦探结构'],['黑暗骑士','克里斯托弗·诺兰 / 乔纳森·诺兰','2008','犯罪电影剧本','封闭空间压力结构'],['冰血暴','科恩兄弟','1996','犯罪电影剧本','逆向因果侦探结构'],['老无所依','科恩兄弟','2007','犯罪电影剧本','社会机器碾压结构'],['缺席的人','科恩兄弟','2001','黑色电影剧本','麦基价值极性下坠法'],['千与千寻','宫崎骏','2001','动画电影剧本','离家—试炼—返身结构'],['幽灵公主','宫崎骏','1997','动画电影剧本','寓言案例结构'],['天空之城','宫崎骏','1986','动画电影剧本','离家—试炼—返身结构'],['花样年华','王家卫 / 编剧团队','2000','电影剧本','记忆房间结构'],['重庆森林','王家卫 / 编剧团队','1994','电影剧本','双主角互补弧线结构'],['东邪西毒','王家卫 / 编剧团队','1994','电影剧本','记忆房间结构'],['活着','张艺谋 / 编剧团队','1994','改编电影剧本','大时代小人物切片法'],['菊豆','张艺谋 / 编剧团队','1990','改编电影剧本','社会机器碾压结构'],['甜蜜蜜','陈可辛 / 编剧团队','1996','电影剧本','阻隔升级法'],['亲爱的','陈可辛 / 编剧团队','2014','电影剧本','社会机器碾压结构'],['无人知晓','是枝裕和','2004','电影剧本','社会机器碾压结构'],['小偷家族','是枝裕和','2018','电影剧本','群像压力锅结构'],['如父如子','是枝裕和','2013','电影剧本','问题剧剥洋葱结构']
  ].forEach(([title, author, year, genre, framework]) => add({ title, author, year, type: 'copyright', region: /宫崎|王家卫|张艺谋|陈可辛|是枝/.test(author) ? 'asian' : 'foreign', tags: [genre, '20-21世纪电影剧本'], sourceInstitution: /imsdb/.test(links[title] || '') ? 'IMSDb' : '电影剧本/官方作品索引', link: links[title] || '', summary: `${title}是${author}代表性电影剧本，适合学习${framework}。`, framework, access: links[title] ? '剧本正文或作品索引' : '待补充全文链接', chineseVersions: [cv(title, '多个版本', links[title] || '', /imsdb|ghibli/.test(links[title] || '') ? '原文/官方作品索引' : '免费全文/剧本索引')], originalVersion: ov(title, /宫崎|是枝/.test(author) ? '日语' : (/王家卫|张艺谋|陈可辛/.test(author) ? '中文' : '英语'), /imsdb/.test(links[title] || '') ? 'IMSDb' : '官方/剧本索引', links[title] || ''), chineseLink: links[title] || '' }, st('film')));
  scriptLibrary.forEach((script) => { if (script.chineseVersions && !script.chineseLink) { const best = script.chineseVersions.find((v) => v.link); script.chineseLink = best ? best.link : ''; } });
})();

window.storyTypes = storyTypes;
window.scriptLibrary = scriptLibrary;
window.getAllFrameworks = getAllFrameworks;


// Auto-generated expansion batch: 2026-08-01. Copyright works are index-only; no full text is embedded.
const libraryExpansion20260801 = [
  {"title": "10 Things I Hate About You", "author": "Karen McCullah Lutz, Kirsten Smith, William Shakespeare", "year": "1997-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/10 Things I Hate About You Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "10 Things I Hate About You", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "10 Things I Hate About You", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/10 Things I Hate About You Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "12", "author": "Lawrence Bridges", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/12 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "12", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "12", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/12 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "12 and Holding", "author": "Anthony Cipriano", "year": "2004-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/12 and Holding Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "12 and Holding", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "12 and Holding", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/12 and Holding Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "12 Monkeys", "author": "David Peoples, Janet Peoples", "year": "1994-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/12 Monkeys Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "12 Monkeys", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "12 Monkeys", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/12 Monkeys Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "12 Years a Slave", "author": "John Ridley", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/12 Years a Slave Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "12 Years a Slave", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "12 Years a Slave", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/12 Years a Slave Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "127 Hours", "author": "Simon Beaufoy, Danny Boyle", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/127 Hours Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "127 Hours", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "127 Hours", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/127 Hours Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "1492: Conquest of Paradise", "author": "Roslyne Bosch", "year": "1991-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/1492: Conquest of Paradise Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "1492: Conquest of Paradise", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "1492: Conquest of Paradise", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/1492: Conquest of Paradise Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "15 Minutes", "author": "John Hertzfield", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/15 Minutes Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "15 Minutes", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "15 Minutes", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/15 Minutes Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "17 Again", "author": "Jason Filardi", "year": "2007-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/17 Again Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "17 Again", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "17 Again", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/17 Again Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "187", "author": "Scott Yagemann", "year": "1996-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/187 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "187", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "187", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/187 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "2001: A Space Odyssey", "author": "Stanley Kubrick, Arhur C. Clarke", "year": "1989-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/2001: A Space Odyssey Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "2001: A Space Odyssey", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "2001: A Space Odyssey", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/2001: A Space Odyssey Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "2012", "author": "Roland Emmerich, Harald Kloser", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/2012 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "2012", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "2012", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/2012 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "20th Century Women", "author": "Mike Mills", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/20th Century Women Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "20th Century Women", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "20th Century Women", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/20th Century Women Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "25th Hour", "author": "David Benioff", "year": "2001-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/25th Hour Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "25th Hour", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "25th Hour", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/25th Hour Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "28 Days Later", "author": "Alex Garland", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/28 Days Later Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "28 Days Later", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "28 Days Later", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/28 Days Later Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "30 Minutes or Less", "author": "Michael Diliberti, Matthew Sullivan", "year": "2009-12 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/30 Minutes or Less Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "30 Minutes or Less", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "30 Minutes or Less", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/30 Minutes or Less Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "42", "author": "Brian Helgeland", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/42 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "42", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "42", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/42 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "44 Inch Chest", "author": "Louis Mellis, David Scinto", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/44 Inch Chest Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "44 Inch Chest", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "44 Inch Chest", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/44 Inch Chest Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "48 Hrs.", "author": "Steven E. De Souza, Walter Hill, Roger Spottiswoode, Larry Gross, Jeb Stuart", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/48 Hrs. Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "48 Hrs.", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "48 Hrs.", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/48 Hrs. Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "50-50", "author": "Will Reiser", "year": "2008-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/50-50 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "50-50", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "50-50", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/50-50 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "500 Days of Summer", "author": "Scott Neustadter, Michael H. Weber", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/500 Days of Summer Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "500 Days of Summer", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "500 Days of Summer", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/500 Days of Summer Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "8 Mile", "author": "Scott Silver", "year": "2001-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/8 Mile Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "8 Mile", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "8 Mile", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/8 Mile Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "8MM", "author": "Andrew Kevin Walker", "year": "1997-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/8MM Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "8MM", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "8MM", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/8MM Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "9", "author": "Pamela Pettler, Shane Acker", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/9 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "9", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "9", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/9 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "A Few Good Men", "author": "Aaron Sorkin", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Few Good Men Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "A Few Good Men", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "A Few Good Men", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Few Good Men Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "A Good Person", "author": "Zach Braff", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Good Person Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "A Good Person", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "A Good Person", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Good Person Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "A Million Miles Away", "author": "Alejandra Marquez, Abella Hernan Jimenez, Bettina Gilois", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Million Miles Away Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "A Million Miles Away", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "A Million Miles Away", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Million Miles Away Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "A Most Violent Year", "author": "J.C. Chandor", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Most Violent Year Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "A Most Violent Year", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "A Most Violent Year", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Most Violent Year Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "A Prayer Before Dawn", "author": "Jonathan Hirschbein", "year": "2016-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Prayer Before Dawn Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "A Prayer Before Dawn", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "A Prayer Before Dawn", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Prayer Before Dawn Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "A Quiet Place", "author": "Bryan Woods, Scott Beck, John Krasinski", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Quiet Place Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "A Quiet Place", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "A Quiet Place", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Quiet Place Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "A Real Pain", "author": "Jesse Eisenberg", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Real Pain Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "A Real Pain", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "A Real Pain", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Real Pain Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "A Scanner Darkly", "author": "Charlie Kaufman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Scanner Darkly Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "A Scanner Darkly", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "A Scanner Darkly", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Scanner Darkly Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "A Serious Man", "author": "Joel Coen, Ethan Coen", "year": "2007-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Serious Man Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "A Serious Man", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "A Serious Man", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A Serious Man Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "A.I.", "author": "Ian Watson, Brian Aldiss, Steven Spielberg", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A.I. Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "A.I.", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "A.I.", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/A.I. Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Above the Law", "author": "Steven Pressfield, Ronald Shusett, Andrew Davis, Steven Seagal", "year": "1987-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Above the Law Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Above the Law", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Above the Law", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Above the Law Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Absolute Power", "author": "David Baldacci, William Goldman", "year": "1996-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Absolute Power Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Absolute Power", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Absolute Power", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Absolute Power Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Abyss, The", "author": "James Cameron", "year": "1988-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Abyss, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Abyss, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Abyss, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Abyss, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ace Ventura: Pet Detective", "author": "Jack Bernstein, Tom Shadyac, Jim Carrey", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ace Ventura: Pet Detective Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ace Ventura: Pet Detective", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ace Ventura: Pet Detective", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ace Ventura: Pet Detective Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ad Astra", "author": "James Gray, Ethan Gross", "year": "2016-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ad Astra Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ad Astra", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ad Astra", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ad Astra Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Adaptation", "author": "Charlie Kaufman, Donald Kaufman", "year": "2000-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Adaptation Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Adaptation", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Adaptation", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Adaptation Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Addams Family, The", "author": "Charles Addams, Caroline Thompson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Addams Family, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Addams Family, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Addams Family, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Addams Family, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Adjustment Bureau, The", "author": "George Nolfi, Philip K Dick", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Adjustment Bureau, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Adjustment Bureau, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Adjustment Bureau, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Adjustment Bureau, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Adventures of Buckaroo Banzai Across the Eighth Dimension, The", "author": "Earl Mac Rauch", "year": "1983-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Adventures of Buckaroo Banzai Across the Eighth Dimension, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Adventures of Buckaroo Banzai Across the Eighth Dimension, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Adventures of Buckaroo Banzai Across the Eighth Dimension, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Adventures of Buckaroo Banzai Across the Eighth Dimension, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Affliction", "author": "Russell Banks, Paul Schrader", "year": "1997 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Affliction Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Affliction", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Affliction", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Affliction Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "After School Special", "author": "David H. Steinberg", "year": "2000-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/After School Special Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "After School Special", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "After School Special", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/After School Special Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "After.Life", "author": "Agnieszka Wojtowicz-Vosloo", "year": "2008-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/After.Life Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "After.Life", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "After.Life", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/After.Life Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Agnes of God", "author": "John Pielmeier", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Agnes of God Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Agnes of God", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Agnes of God", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Agnes of God Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Air", "author": "Alex Convery", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Air Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Air", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Air", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Air Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Air Force One", "author": "Andrew W. Marlowe", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Air Force One Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Air Force One", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Air Force One", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Air Force One Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Airplane", "author": "Jim Abrahams, David Zucker, Jerry Zucker", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Airplane Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Airplane", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Airplane", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Airplane Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Airplane 2: The Sequel", "author": "Ken Finkleman", "year": "1982-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Airplane 2: The Sequel Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Airplane 2: The Sequel", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Airplane 2: The Sequel", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Airplane 2: The Sequel Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Aladdin", "author": "Roger Allers, Ron Clements", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Aladdin Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Aladdin", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Aladdin", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Aladdin Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ali", "author": "Stephen J Rivele, Christopher Wilkinson, Eric Roth, Michael Mann", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ali Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ali", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ali", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ali Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Alien", "author": "Walter Hill, David Giler", "year": "1978-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alien Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Alien", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Alien", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alien Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Alien 3", "author": "Rex Pickett", "year": "1991-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alien 3 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Alien 3", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Alien 3", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alien 3 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Alien Nation", "author": "Rockne O'Bannon, James Cameron", "year": "1987-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alien Nation Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Alien Nation", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Alien Nation", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alien Nation Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Alien vs. Predator", "author": "Peter Briggs", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alien vs. Predator Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Alien vs. Predator", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Alien vs. Predator", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alien vs. Predator Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Alien: Resurrection", "author": "Joss Whedon", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alien: Resurrection Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Alien: Resurrection", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Alien: Resurrection", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alien: Resurrection Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Aliens", "author": "James Cameron", "year": "1985-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Aliens Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Aliens", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Aliens", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Aliens Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "All About Eve", "author": "Joseph Mankiewicz", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/All About Eve Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "All About Eve", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "All About Eve", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/All About Eve Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "All About Steve", "author": "Kim Barker", "year": "2006-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/All About Steve Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "All About Steve", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "All About Steve", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/All About Steve Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "All of Us Strangers", "author": "Andrew Haigh, Taichi Yamada", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/All of Us Strangers Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "All of Us Strangers", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "All of Us Strangers", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/All of Us Strangers Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "All the King's Men", "author": "Robert Rossen", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/All the King's Men Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "All the King's Men", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "All the King's Men", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/All the King's Men Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "All the President's Men", "author": "William Goldman", "year": "1975-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/All the President's Men Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "All the President's Men", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "All the President's Men", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/All the President's Men Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Almost Famous", "author": "Cameron Crowe", "year": "1998-12 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Almost Famous Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Almost Famous", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Almost Famous", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Almost Famous Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Alone in the Dark", "author": "Elan Mastai, Michael Roesch", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alone in the Dark Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Alone in the Dark", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Alone in the Dark", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Alone in the Dark Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Amadeus", "author": "Peter Shaffer", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Amadeus Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Amadeus", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Amadeus", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Amadeus Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Amelia", "author": "Ronald Bass, Anna Hamilton Phelan", "year": "2007-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Amelia Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Amelia", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Amelia", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Amelia Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Beauty", "author": "Alan Ball", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Beauty Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Beauty", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Beauty", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Beauty Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Fiction", "author": "Cord Jefferson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Fiction Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Fiction", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Fiction", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Fiction Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Gangster", "author": "Steven Zaillian, Mark Jacobson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Gangster Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Gangster", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Gangster", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Gangster Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Graffiti", "author": "George Lucas, Gloria Katz, Willard Huyck", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Graffiti Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Graffiti", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Graffiti", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Graffiti Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American History X", "author": "David McKenna", "year": "1997-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American History X Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American History X", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American History X", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American History X Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Hustle", "author": "Eric Warren Singer, David O. Russell", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Hustle Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Hustle", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Hustle", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Hustle Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Madness", "author": "Robert Riskin", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Madness Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Madness", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Madness", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Madness Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Milkshake", "author": "David Andalman, Mariko Munro", "year": "2011-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Milkshake Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Milkshake", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Milkshake", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Milkshake Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Outlaws", "author": "Roderick Taylor, John Rogers", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Outlaws Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Outlaws", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Outlaws", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Outlaws Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Pie", "author": "Adam Herz", "year": "1998-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Pie Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Pie", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Pie", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Pie Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American President, The", "author": "Aaron Sorkin", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American President, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American President, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American President, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American President, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Psycho", "author": "Matthew Markwalder", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Psycho Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Psycho", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Psycho", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Psycho Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Shaolin: King of Kickboxers II", "author": "Keith Strandburg", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Shaolin: King of Kickboxers II Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Shaolin: King of Kickboxers II", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Shaolin: King of Kickboxers II", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Shaolin: King of Kickboxers II Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Sniper", "author": "Jason Hall", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Sniper Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Sniper", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Sniper", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Sniper Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Splendor", "author": "Robert Pulcini, Shari Springer Berman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Splendor Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Splendor", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Splendor", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Splendor Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American Werewolf in London", "author": "John Landis", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Werewolf in London Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American Werewolf in London", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American Werewolf in London", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American Werewolf in London Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "American, The", "author": "Rowan Joffe", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "American, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "American, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/American, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Amityville Asylum, The", "author": "Andrew Jones", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Amityville Asylum, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Amityville Asylum, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Amityville Asylum, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Amityville Asylum, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Amour", "author": "Michael Haneke", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Amour Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Amour", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Amour", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Amour Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "An Education", "author": "Nick Hornby, Lynn Barber", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/An Education Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "An Education", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "An Education", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/An Education Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Analyze That", "author": "Peter Steinfeld, Harold Ramis, Peter Tolan, Kenneth Longeran", "year": "2002-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Analyze That Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Analyze That", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Analyze That", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Analyze That Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Analyze This", "author": "Peter Tolan, Harold Ramis, Kenneth Lonergan", "year": "1998-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Analyze This Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Analyze This", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Analyze This", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Analyze This Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Anastasia", "author": "Susan Gauthier, Bruce Graham", "year": "1997 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Anastasia Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Anastasia", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Anastasia", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Anastasia Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Angel Eyes", "author": "Gerald DiPego", "year": "1999-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Angel Eyes Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Angel Eyes", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Angel Eyes", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Angel Eyes Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Angels & Demons", "author": "David Koepp, Akiva Goldsman", "year": "2008-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Angels & Demons Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Angels & Demons", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Angels & Demons", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Angels & Demons Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Anna Karenina", "author": "Tom Stoppard", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Anna Karenina Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Anna Karenina", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Anna Karenina", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Anna Karenina Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Annie Hall", "author": "Woody Allen, Marshall Brickman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Annie Hall Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Annie Hall", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Annie Hall", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Annie Hall Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Anniversary Party, The", "author": "Alan Cummings, Jennifer Jason Leigh", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Anniversary Party, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Anniversary Party, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Anniversary Party, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Anniversary Party, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Anonymous", "author": "John Orloff", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Anonymous Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Anonymous", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Anonymous", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Anonymous Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Anora", "author": "Sean Baker", "year": "2023-04 Green Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Anora Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Anora", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Anora", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Anora Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Antitrust", "author": "Howard Franklin", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Antitrust Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Antitrust", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Antitrust", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Antitrust Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Antz", "author": "Todd Alcott, Chris Weitz, Paul Weitz", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Antz Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Antz", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Antz", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Antz Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Apartment, The", "author": "Billy Wilder, I.A.L Diamond", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Apartment, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Apartment, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Apartment, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Apartment, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Apocalypse Now", "author": "Francis Ford Coppola, John Milius, Joseph Conrad", "year": "1975-12 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Apocalypse Now Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Apocalypse Now", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Apocalypse Now", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Apocalypse Now Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Apollo 13", "author": "Jim Lovell, Jeffrey Kluger, William Broyles Jr., Al Reinert", "year": "1995 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Apollo 13 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Apollo 13", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Apollo 13", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Apollo 13 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "April Fool's Day", "author": "Danilo Bach", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/April Fool's Day Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "April Fool's Day", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "April Fool's Day", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/April Fool's Day Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Apt Pupil", "author": "Brandon Boyce", "year": "1996-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Apt Pupil Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Apt Pupil", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Apt Pupil", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Apt Pupil Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Arbitrage", "author": "Nicholas Jarecki", "year": "2011-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Arbitrage Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Arbitrage", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Arbitrage", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Arbitrage Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Arcade", "author": "David S. Goyer", "year": "1990-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Arcade Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Arcade", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Arcade", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Arcade Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Arctic Blue", "author": "Ross LaManna", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Arctic Blue Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Arctic Blue", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Arctic Blue", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Arctic Blue Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Argo", "author": "Chris Terrio", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Argo Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Argo", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Argo", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Argo Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Armageddon", "author": "Jonathan Hensleigh, J.J. Abrams", "year": "1998 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Armageddon Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Armageddon", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Armageddon", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Armageddon Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Army of Darkness", "author": "Sam Raimi, Ivan Raimi", "year": "1991-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Army of Darkness Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Army of Darkness", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Army of Darkness", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Army of Darkness Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Arsenic and Old Lace", "author": "Julius J. Epstein, Philip G. Epstein, Joseph Kesselring", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Arsenic and Old Lace Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Arsenic and Old Lace", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Arsenic and Old Lace", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Arsenic and Old Lace Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Arthur", "author": "Peter Baynham", "year": "2009-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Arthur Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Arthur", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Arthur", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Arthur Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Artist, The", "author": "Michel Hazanavicius", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Artist, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Artist, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Artist, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Artist, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "As Good As It Gets", "author": "Mark Andrus, James L. Brooks", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/As Good As It Gets Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "As Good As It Gets", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "As Good As It Gets", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/As Good As It Gets Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Assassins", "author": "Larry Wachowski, Andy Wachowski", "year": "1994-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Assassins Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Assassins", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Assassins", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Assassins Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Assignment, The", "author": "Dan Gordon, Sabi H. Shabtai", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Assignment, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Assignment, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Assignment, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Assignment, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Asteroid City", "author": "Wes Anderson, Roman Coppola", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Asteroid City Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Asteroid City", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Asteroid City", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Asteroid City Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "At First Sight", "author": "Oliver Sacks, Steve Levitt, Irwin Winkler, Rob Cowan", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/At First Sight Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "At First Sight", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "At First Sight", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/At First Sight Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "August: Osage County", "author": "Tracy Letts", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/August: Osage County Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "August: Osage County", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "August: Osage County", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/August: Osage County Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Austin Powers - International Man of Mystery", "author": "Mike Myers", "year": "1996-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Austin Powers - International Man of Mystery Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Austin Powers - International Man of Mystery", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Austin Powers - International Man of Mystery", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Austin Powers - International Man of Mystery Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Austin Powers - The Spy Who Shagged Me", "author": "Mike Myers", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Austin Powers - The Spy Who Shagged Me Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Austin Powers - The Spy Who Shagged Me", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Austin Powers - The Spy Who Shagged Me", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Austin Powers - The Spy Who Shagged Me Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Authors Anonymous", "author": "David Congalton", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Authors Anonymous Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Authors Anonymous", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Authors Anonymous", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Authors Anonymous Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Autumn in New York", "author": "Allison Burnett", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Autumn in New York Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Autumn in New York", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Autumn in New York", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Autumn in New York Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Avatar", "author": "James Cameron", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Avatar Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Avatar", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Avatar", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Avatar Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Avengers, The", "author": "Don Macpherson", "year": "1995-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Avengers, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Avengers, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Avengers, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Avengers, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Avengers, The (2012)", "author": "Joss Whedon", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Avengers, The (2012) Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Avengers, The (2012)", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Avengers, The (2012)", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Avengers, The (2012) Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Avengers: Endgame", "author": "Christopher Markus, Stephen McFeely", "year": "Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Avengers: Endgame Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Avengers: Endgame", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Avengers: Endgame", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Avengers: Endgame Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Avventura, L' (The Adventure)", "author": "Michelangelo Antonioni, Elio Bartolini, Tonino Guerra", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Avventura, L' (The Adventure) Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Avventura, L' (The Adventure)", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Avventura, L' (The Adventure)", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Avventura, L' (The Adventure) Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Awakenings", "author": "Steven Zaillian", "year": "1989-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Awakenings Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Awakenings", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Awakenings", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Awakenings Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Babel", "author": "Guillermo Arriaga", "year": "2005-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Babel Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Babel", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Babel", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Babel Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bachelor Party", "author": "Neal Israel, Pat Proft, Bob Israel", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bachelor Party Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bachelor Party", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bachelor Party", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bachelor Party Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bachelor Party, The", "author": "Paddy Chayefsky", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bachelor Party, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bachelor Party, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bachelor Party, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bachelor Party, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Back to the Future", "author": "Robert Zemeckis, Bob Gale", "year": "1984-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Back to the Future Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Back to the Future", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Back to the Future", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Back to the Future Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Back to the Future II & III", "author": "Bob Gale", "year": "1989-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Back to the Future II & III Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Back to the Future II & III", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Back to the Future II & III", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Back to the Future II & III Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Back-up Plan, The", "author": "Kate Angelo", "year": "2007-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Back-up Plan, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Back-up Plan, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Back-up Plan, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Back-up Plan, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Backdraft", "author": "Gregory Widen", "year": "1991 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Backdraft Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Backdraft", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Backdraft", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Backdraft Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bad Boys", "author": "Michael Barrie, Jim Mulholland, Doug Richardson", "year": "1994-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Boys Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bad Boys", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bad Boys", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Boys Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bad Country", "author": "Jonathan Hirschbein", "year": "2012-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Country Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bad Country", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bad Country", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Country Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bad Day at Black Rock", "author": "Don McGuire, Millard Kaufman, Howard Breslin", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Day at Black Rock Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bad Day at Black Rock", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bad Day at Black Rock", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Day at Black Rock Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bad Dreams", "author": "Andrew Fleming, Steven E. de Souza", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Dreams Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bad Dreams", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bad Dreams", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Dreams Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bad Lieutenant", "author": "Abel Ferrara, Zoe Lund", "year": "1990-11 First Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Lieutenant Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bad Lieutenant", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bad Lieutenant", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Lieutenant Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bad Santa", "author": "Glenn Ficarra, John Requa", "year": "2002-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Santa Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bad Santa", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bad Santa", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Santa Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bad Teacher", "author": "Lee Eisenberg, Gene Stupnitsky", "year": "2008-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Teacher Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bad Teacher", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bad Teacher", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bad Teacher Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Badlands", "author": "Terence Malick", "year": "1973 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Badlands Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Badlands", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Badlands", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Badlands Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bamboozled", "author": "Spike Lee", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bamboozled Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bamboozled", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bamboozled", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bamboozled Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Barbie", "author": "Greta Gerwig, Noah Baumbach", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Barbie Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Barbie", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Barbie", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Barbie Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Barry Lyndon", "author": "Stanley Kubrick", "year": "1973-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Barry Lyndon Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Barry Lyndon", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Barry Lyndon", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Barry Lyndon Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Barton Fink", "author": "Joel Coen, Ethan Coen", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Barton Fink Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Barton Fink", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Barton Fink", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Barton Fink Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Basic", "author": "James Vanderbilt", "year": "2000-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Basic Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Basic", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Basic", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Basic Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Basic Instinct", "author": "Joe Eszterhas", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Basic Instinct Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Basic Instinct", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Basic Instinct", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Basic Instinct Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Basquiat", "author": "Julian Schnabel", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Basquiat Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Basquiat", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Basquiat", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Basquiat Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Batman", "author": "Sam Hamm, Warren Skaaren", "year": "1988-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Batman", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Batman", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Batman 2", "author": "Sam Hamm", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman 2 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Batman 2", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Batman 2", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman 2 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Batman and Robin", "author": "Bob Kane, Akiva Goldsman", "year": "1997 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman and Robin Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Batman and Robin", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Batman and Robin", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman and Robin Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Batman Begins", "author": "David Goyer", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman Begins Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Batman Begins", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Batman Begins", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman Begins Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Batman Forever", "author": "Akiva Goldsman", "year": "1994-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman Forever Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Batman Forever", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Batman Forever", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman Forever Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Batman Returns", "author": "Daniel Waters, Westly Strick", "year": "1991-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman Returns Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Batman Returns", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Batman Returns", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Batman Returns Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Battle of Algiers, The", "author": "Gillo Pontecorvo, Franco Solinas", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Battle of Algiers, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Battle of Algiers, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Battle of Algiers, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Battle of Algiers, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Battle of Shaker Heights, The", "author": "Erica Beeney", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Battle of Shaker Heights, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Battle of Shaker Heights, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Battle of Shaker Heights, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Battle of Shaker Heights, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Battle: Los Angeles", "author": "Chris Bertolini", "year": "2009-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Battle: Los Angeles Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Battle: Los Angeles", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Battle: Los Angeles", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Battle: Los Angeles Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Beach, The", "author": "Alex Garland, John Hodge", "year": "1998-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beach, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Beach, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Beach, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beach, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bean", "author": "Richard Curtist, Robin Briscoll", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bean Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bean", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bean", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bean Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Beasts of No Nation", "author": "Cary Joji Fukunaga", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beasts of No Nation Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Beasts of No Nation", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Beasts of No Nation", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beasts of No Nation Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Beasts of the Southern Wild", "author": "Lucy Alibar, Benh Zeitlin", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beasts of the Southern Wild Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Beasts of the Southern Wild", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Beasts of the Southern Wild", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beasts of the Southern Wild Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Beauty and the Beast", "author": "Stephen Chbosky, Evan Spiliotopoulos", "year": "2016-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beauty and the Beast Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Beauty and the Beast", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Beauty and the Beast", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beauty and the Beast Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Beavis and Butt-head Do America", "author": "Mike Judge, Joe Stillman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beavis and Butt-head Do America Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Beavis and Butt-head Do America", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Beavis and Butt-head Do America", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beavis and Butt-head Do America Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Beekeeper, The", "author": "Kurt Wimmer", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beekeeper, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Beekeeper, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Beekeeper, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beekeeper, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Beginners", "author": "Mike Mills", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beginners Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Beginners", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Beginners", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beginners Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Being Human", "author": "Bill Forsyth", "year": "1992-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Being Human Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Being Human", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Being Human", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Being Human Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Being John Malkovich", "author": "Charlie Kaufman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Being John Malkovich Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Being John Malkovich", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Being John Malkovich", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Being John Malkovich Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Being the Ricardos", "author": "Aaron Sorkin", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Being the Ricardos Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Being the Ricardos", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Being the Ricardos", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Being the Ricardos Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Being There", "author": "Jerry Kosinski, Robert C. Jones", "year": "1979-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Being There Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Being There", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Being There", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Being There Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Believer, The", "author": "Henry Bean, Mark Jacobson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Believer, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Believer, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Believer, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Believer, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Belle", "author": "Misan Sagay", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Belle Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Belle", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Belle", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Belle Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Beloved", "author": "Richard LaGravenese, Toni Morrisson", "year": "1996-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beloved Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Beloved", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Beloved", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Beloved Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Benny & Joon", "author": "Barry Berman, Lesley McNeil", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Benny & Joon Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Benny & Joon", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Benny & Joon", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Benny & Joon Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Best Exotic Marigold Hotel, The", "author": "Ol Parker", "year": "2011-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Best Exotic Marigold Hotel, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Best Exotic Marigold Hotel, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Best Exotic Marigold Hotel, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Best Exotic Marigold Hotel, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Big", "author": "Gary Ross, Anne Spielberg", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Big", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Big", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Big Blue, The", "author": "Luc Besson, Robert Garland", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Blue, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Big Blue, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Big Blue, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Blue, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Big Eyes", "author": "Scott Alexander, Larry Karaszewski", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Eyes Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Big Eyes", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Big Eyes", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Eyes Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Big Fish", "author": "Daniel Wallace, John August", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Fish Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Big Fish", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Big Fish", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Fish Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Big Lebowski, The", "author": "Joel Coen, Ethan Coen", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Lebowski, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Big Lebowski, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Big Lebowski, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Lebowski, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Big Sick, The", "author": "Emily V. Gordon, Kumail Nanjiani", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Sick, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Big Sick, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Big Sick, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big Sick, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Big White, The", "author": "Collin Friesen", "year": "2004-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big White, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Big White, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Big White, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Big White, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Birdman", "author": "Alejandro G. Inarritu, Nicolas Giacobone, Alexander Dinelaris Jr., Armando Bo", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Birdman Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Birdman", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Birdman", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Birdman Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Birds, The", "author": "Daphne Du Maurier, Evan Hunter", "year": "1962-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Birds, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Birds, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Birds, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Birds, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Birthday Girl", "author": "Tom Butterworth, Jez Butterworth", "year": "2001 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Birthday Girl Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Birthday Girl", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Birthday Girl", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Birthday Girl Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Black Dahlia, The", "author": "Josh Friedman, James Ellroy", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Black Dahlia, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Black Dahlia, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Black Dahlia, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Black Dahlia, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Black Panther", "author": "Ryan Coogler, Joe Robert Cole", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Black Panther Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Black Panther", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Black Panther", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Black Panther Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Black Rain", "author": "Craig Bolotin, Warren Lewis", "year": "1987-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Black Rain Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Black Rain", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Black Rain", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Black Rain Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Black Snake Moan", "author": "Craig Brewer", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Black Snake Moan Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Black Snake Moan", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Black Snake Moan", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Black Snake Moan Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Black Swan", "author": "Mark Heyman, Andres Heinz, John McLaughlin", "year": "2010-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Black Swan Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Black Swan", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Black Swan", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Black Swan Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blackberry", "author": "Matt Johnson, Matthew Miller, Jacquie McNish, Sean Silcoff", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blackberry Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blackberry", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blackberry", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blackberry Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "BlacKkKlansman", "author": "Charlie Wachtel, David Rabinowitz, Kevin Willmott, Spike Lee", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/BlacKkKlansman Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "BlacKkKlansman", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "BlacKkKlansman", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/BlacKkKlansman Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blade", "author": "David S. Goyer", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blade Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blade", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blade", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blade Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blade II", "author": "David S. Goyer", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blade II Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blade II", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blade II", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blade II Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blade Runner", "author": "Hampton Fancher, David Peoples", "year": "1981-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blade Runner Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blade Runner", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blade Runner", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blade Runner Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blade: Trinity", "author": "David S. Goyer", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blade: Trinity Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blade: Trinity", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blade: Trinity", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blade: Trinity Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blast from the Past, The", "author": "Bill Kelly, Hugh Wilson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blast from the Past, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blast from the Past, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blast from the Past, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blast from the Past, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blind Side, The", "author": "John Lee Hancock, Michael Lewis", "year": "2009-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blind Side, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blind Side, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blind Side, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blind Side, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bling Ring, The", "author": "Sofia Coppola", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bling Ring, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bling Ring, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bling Ring, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bling Ring, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blink Twice", "author": "Zoe Kravitz, E.T. Feigenbaum", "year": "2023-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blink Twice Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blink Twice", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blink Twice", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blink Twice Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blitz", "author": "Steve McQueen", "year": "2022-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blitz Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blitz", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blitz", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blitz Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blood and Wine", "author": "Nick Villiers", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blood and Wine Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blood and Wine", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blood and Wine", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blood and Wine Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blood Simple", "author": "Joel Coen, Ethan Coen", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blood Simple Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blood Simple", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blood Simple", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blood Simple Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blow", "author": "David McKenna, Nick Cassavetes", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blow Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blow", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blow", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blow Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blue Valentine", "author": "Derek Cianfrance, Cami Delavigne, Joey Curtis", "year": "2009-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blue Valentine Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blue Valentine", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blue Valentine", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blue Valentine Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blue Velvet", "author": "David Lynch", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blue Velvet Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blue Velvet", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blue Velvet", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blue Velvet Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Blues Brothers, The", "author": "John Landis, Dan Aykroyd", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blues Brothers, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Blues Brothers, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Blues Brothers, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Blues Brothers, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bodies, Rest & Motion", "author": "Roger Hedden", "year": "1993 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bodies, Rest & Motion Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bodies, Rest & Motion", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bodies, Rest & Motion", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bodies, Rest & Motion Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Body Heat", "author": "Lawrence Kasdan", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Body Heat Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Body Heat", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Body Heat", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Body Heat Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Body of Evidence", "author": "Brad Mirman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Body of Evidence Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Body of Evidence", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Body of Evidence", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Body of Evidence Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bodyguard", "author": "Lawrence Kasdan", "year": "1992-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bodyguard Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bodyguard", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bodyguard", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bodyguard Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bones", "author": "Adam Simon, Tim Metcalfe", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bones Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bones", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bones", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bones Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bonfire of the Vanities", "author": "Michael Cristofer", "year": "1990-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bonfire of the Vanities Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bonfire of the Vanities", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bonfire of the Vanities", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bonfire of the Vanities Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bonnie and Clyde", "author": "David Newman, Robert Benton", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bonnie and Clyde Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bonnie and Clyde", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bonnie and Clyde", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bonnie and Clyde Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Boogie Nights", "author": "Paul Thomas Anderson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Boogie Nights Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Boogie Nights", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Boogie Nights", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Boogie Nights Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Book of Eli, The", "author": "Gary Whitta", "year": "2007-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Book of Eli, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Book of Eli, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Book of Eli, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Book of Eli, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bookworm", "author": "Toby Harvard", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bookworm Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bookworm", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bookworm", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bookworm Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Boondock Saints 2: All Saints Day", "author": "Troy Duffy", "year": "2007-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Boondock Saints 2: All Saints Day Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Boondock Saints 2: All Saints Day", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Boondock Saints 2: All Saints Day", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Boondock Saints 2: All Saints Day Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Boondock Saints, The", "author": "Troy Duffy", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Boondock Saints, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Boondock Saints, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Boondock Saints, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Boondock Saints, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bottle Rocket", "author": "Owen Wilson, Wes Anderson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bottle Rocket Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bottle Rocket", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bottle Rocket", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bottle Rocket Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bound", "author": "Andy Wachowski, Larry Wachowski", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bound Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bound", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bound", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bound Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bounty Hunter, The", "author": "Sarah Thorp", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bounty Hunter, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bounty Hunter, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bounty Hunter, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bounty Hunter, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bourne Identity, The", "author": "Tony Gilroy, Robert Ludlum", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bourne Identity, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bourne Identity, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bourne Identity, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bourne Identity, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bourne Supremacy, The", "author": "Tony Gilroy, Brian Helgeland, Robert Ludlum", "year": "2003-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bourne Supremacy, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bourne Supremacy, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bourne Supremacy, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bourne Supremacy, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bourne Ultimatum, The", "author": "Tony Gilroy, Scott Z. Burns, George Nolfi", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bourne Ultimatum, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bourne Ultimatum, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bourne Ultimatum, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bourne Ultimatum, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Box, The", "author": "Richard Kelly, Richard Matheson", "year": "2006-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Box, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Box, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Box, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Box, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Boxtrolls, The", "author": "Irena Brignull, Adam Pava", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Boxtrolls, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Boxtrolls, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Boxtrolls, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Boxtrolls, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Boyhood", "author": "Richard Linklater", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Boyhood Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Boyhood", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Boyhood", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Boyhood Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Braveheart", "author": "Randall Wallace", "year": "1995 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Braveheart Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Braveheart", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Braveheart", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Braveheart Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Brazil", "author": "Terry Gilliam, Charles McKeown", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Brazil Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Brazil", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Brazil", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Brazil Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Break", "author": "Oliver Stone", "year": "1969-00 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Break Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Break", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Break", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Break Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Breakdown", "author": "Jonathan Mostow", "year": "1996-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Breakdown Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Breakdown", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Breakdown", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Breakdown Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Breakfast Club, The", "author": "John Hughes", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Breakfast Club, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Breakfast Club, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Breakfast Club, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Breakfast Club, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Breaking Away", "author": "Steve Tesich", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Breaking Away Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Breaking Away", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Breaking Away", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Breaking Away Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Brick", "author": "Rian Johnson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Brick Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Brick", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Brick", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Brick Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bridesmaids", "author": "Annie Mumolo", "year": "2009-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bridesmaids Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bridesmaids", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bridesmaids", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bridesmaids Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bringing Out the Dead", "author": "Paul Schrader", "year": "1997-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bringing Out the Dead Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bringing Out the Dead", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bringing Out the Dead", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bringing Out the Dead Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Broadcast News", "author": "James L. Brooks", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Broadcast News Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Broadcast News", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Broadcast News", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Broadcast News Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Broken Arrow", "author": "Graham Yost", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Broken Arrow Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Broken Arrow", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Broken Arrow", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Broken Arrow Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Broken Embraces", "author": "Pedro Almodovar", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Broken Embraces Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Broken Embraces", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Broken Embraces", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Broken Embraces Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Brothers Bloom, The", "author": "Rian Johnson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Brothers Bloom, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Brothers Bloom, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Brothers Bloom, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Brothers Bloom, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bruce Almighty", "author": "Steve Koren, Mark O'Keefe, Steve Oedekerk", "year": "2002-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bruce Almighty Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bruce Almighty", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bruce Almighty", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bruce Almighty Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Brutalist, The", "author": "Brady Corbet, Mona Fastvold", "year": "2023-03 Final Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Brutalist, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Brutalist, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Brutalist, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Brutalist, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Buffy the Vampire Slayer", "author": "Joss Whedon", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Buffy the Vampire Slayer Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Buffy the Vampire Slayer", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Buffy the Vampire Slayer", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Buffy the Vampire Slayer Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Bull Durham", "author": "Ron Shelton", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bull Durham Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Bull Durham", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Bull Durham", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Bull Durham Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Buried", "author": "Chris Sparling", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Buried Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Buried", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Buried", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Buried Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Burlesque", "author": "Steven Antin", "year": "2009-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Burlesque Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Burlesque", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Burlesque", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Burlesque Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Burn After Reading", "author": "Joel Coen, Ethan Coen", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Burn After Reading Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Burn After Reading", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Burn After Reading", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Burn After Reading Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Burning Annie", "author": "Zack Ordynans", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Burning Annie Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Burning Annie", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Burning Annie", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Burning Annie Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Butterfly Effect, The", "author": "J. Mackye Gruber, Eric Bress", "year": "Undated Shooting Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Butterfly Effect, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Butterfly Effect, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Butterfly Effect, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Butterfly Effect, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cable Guy", "author": "Lou Holtz Jr., Judd Apatow", "year": "1996-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cable Guy Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cable Guy", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cable Guy", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cable Guy Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Candle to Water", "author": "Nick Green", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Candle to Water Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Candle to Water", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Candle to Water", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Candle to Water Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Capote", "author": "Dan Futterman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Capote Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Capote", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Capote", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Capote Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Carrie", "author": "Lawrence D. Cohen, Stephen King", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Carrie Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Carrie", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Carrie", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Carrie Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cars 2", "author": "Ben Queen", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cars 2 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cars 2", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cars 2", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cars 2 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Casablanca", "author": "Julius Epstein, Philip Epstein, Howard Koch", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Casablanca Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Casablanca", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Casablanca", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Casablanca Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Case 39", "author": "Ray Wright", "year": "2006-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Case 39 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Case 39", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Case 39", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Case 39 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Casino", "author": "Nicholas Pileggi, Martin Scorsese", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Casino Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Casino", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Casino", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Casino Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cassandro", "author": "David Teague, Roger Ross Williams", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cassandro Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cassandro", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cassandro", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cassandro Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cast Away", "author": "William Broyles Jr.", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cast Away Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cast Away", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cast Away", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cast Away Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Catch Me If You Can", "author": "Jeff Nathanson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Catch Me If You Can Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Catch Me If You Can", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Catch Me If You Can", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Catch Me If You Can Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Catwoman", "author": "Daniel Waters", "year": "2003-02 Second Draft Polish", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Catwoman Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Catwoman", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Catwoman", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Catwoman Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cecil B. Demented", "author": "John Waters", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cecil B. Demented Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cecil B. Demented", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cecil B. Demented", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cecil B. Demented Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cedar Rapids", "author": "Phil Johnston", "year": "2009-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cedar Rapids Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cedar Rapids", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cedar Rapids", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cedar Rapids Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Celeste & Jesse Forever", "author": "Rashida Jones, Will McCormack", "year": "2011-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Celeste & Jesse Forever Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Celeste & Jesse Forever", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Celeste & Jesse Forever", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Celeste & Jesse Forever Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cell, The", "author": "Mark Protosevich", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cell, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cell, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cell, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cell, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cellular", "author": "Larry Cohen, Chris Morgan, J. Mackye Gruber, Eric Bress", "year": "2003-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cellular Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cellular", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cellular", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cellular Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Change-Up, The", "author": "Jon Lucas, Scott Moore", "year": "2009-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Change-Up, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Change-Up, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Change-Up, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Change-Up, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Changeling", "author": "J Michael Straczynski", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Changeling Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Changeling", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Changeling", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Changeling Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Chaos", "author": "Tony Giglio", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chaos Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Chaos", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Chaos", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chaos Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Charade", "author": "Peter Stone", "year": "1962-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Charade Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Charade", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Charade", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Charade Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Charlie's Angels", "author": "Ed Solomon, John August, Zak Penn", "year": "1999-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Charlie's Angels Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Charlie's Angels", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Charlie's Angels", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Charlie's Angels Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Chasing Amy", "author": "Kevin Smith", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chasing Amy Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Chasing Amy", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Chasing Amy", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chasing Amy Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Chasing Sleep", "author": "Michael Walker", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chasing Sleep Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Chasing Sleep", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Chasing Sleep", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chasing Sleep Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cherry Falls", "author": "Ken Selden", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cherry Falls Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cherry Falls", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cherry Falls", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cherry Falls Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Chinatown", "author": "Robert Towne", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chinatown Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Chinatown", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Chinatown", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chinatown Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Christ Complex", "author": "Jeffrey Scott Richards", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Christ Complex Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Christ Complex", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Christ Complex", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Christ Complex Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Chronicle", "author": "Max Landis, Josh Trank", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chronicle Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Chronicle", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Chronicle", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chronicle Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "author": "C.S. Lewis, Ann Peacock", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chronicles of Narnia: The Lion, the Witch and the Wardrobe Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Chronicles of Narnia: The Lion, the Witch and the Wardrobe Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cider House Rules, The", "author": "John Irving", "year": "Undated Production Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cider House Rules, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cider House Rules, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cider House Rules, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cider House Rules, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cincinnati Kid, The", "author": "Ring Lardner Jr, Terry Southern, Richard Jessup", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cincinnati Kid, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cincinnati Kid, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cincinnati Kid, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cincinnati Kid, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cinema Paradiso", "author": "Giuseppe Tornatore", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cinema Paradiso Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cinema Paradiso", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cinema Paradiso", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cinema Paradiso Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cirque du Freak: The Vampire's Assistant", "author": "Brian Helgeland", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cirque du Freak: The Vampire's Assistant Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cirque du Freak: The Vampire's Assistant", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cirque du Freak: The Vampire's Assistant", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cirque du Freak: The Vampire's Assistant Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Citizen Kane", "author": "Herman J. Mankiewicz, Orson Welles", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Citizen Kane Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Citizen Kane", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Citizen Kane", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Citizen Kane Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "City of Joy", "author": "Gerald Brach, Roland Joffe", "year": "1990-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/City of Joy Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "City of Joy", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "City of Joy", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/City of Joy Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Clash of the Titans", "author": "John Glenn, Travis Wright", "year": "2008-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Clash of the Titans Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Clash of the Titans", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Clash of the Titans", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Clash of the Titans Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Clerks", "author": "Kevin Smith", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Clerks Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Clerks", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Clerks", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Clerks Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cliffhanger", "author": "Michael France", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cliffhanger Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cliffhanger", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cliffhanger", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cliffhanger Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Clockwork Orange, A", "author": "Stanley Kubrick", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Clockwork Orange, A Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Clockwork Orange, A", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Clockwork Orange, A", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Clockwork Orange, A Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Clueless", "author": "Amy Heckerling", "year": "1995 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Clueless Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Clueless", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Clueless", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Clueless Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cobb", "author": "Ron Shelton", "year": "1993-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cobb Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cobb", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cobb", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cobb Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Coco", "author": "Lee Unkrich, Jason Katz, Matthew Aldrich, Adrian Molina", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Coco Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Coco", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Coco", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Coco Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Code of Silence", "author": "Michael Butler, Dennis Shryack, Mike Gray, John Mason", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Code of Silence Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Code of Silence", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Code of Silence", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Code of Silence Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cold Mountain", "author": "Charles Frazier, Anthony Minghella", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cold Mountain Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cold Mountain", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cold Mountain", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cold Mountain Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Collateral", "author": "Stuart Beattie, Frank Darabont, Michael Mann", "year": "2003-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Collateral Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Collateral", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Collateral", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Collateral Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Collateral Damage", "author": "Ronald Roose", "year": "2000-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Collateral Damage Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Collateral Damage", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Collateral Damage", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Collateral Damage Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Colombiana", "author": "Robert Mark Kamen, Luc Besson", "year": "2009-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Colombiana Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Colombiana", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Colombiana", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Colombiana Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Color of Night", "author": "Billy Ray, Matthew Chapman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Color of Night Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Color of Night", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Color of Night", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Color of Night Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Color Purple, The", "author": "Marcus Gardley, Alice Walker, Marsha Norman", "year": "2023-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Color Purple, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Color Purple, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Color Purple, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Color Purple, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Commando", "author": "Richard Tuggle", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Commando Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Commando", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Commando", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Commando Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Conan the Barbarian", "author": "Thomas Dean Donnelly, Joshua Oppenheimer", "year": "2009-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Conan the Barbarian Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Conan the Barbarian", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Conan the Barbarian", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Conan the Barbarian Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Confessions of a Dangerous Mind", "author": "Charlie Kaufman", "year": "1998-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Confessions of a Dangerous Mind Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Confessions of a Dangerous Mind", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Confessions of a Dangerous Mind", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Confessions of a Dangerous Mind Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Confidence", "author": "Doug Jung", "year": "2000-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Confidence Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Confidence", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Confidence", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Confidence Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Constantine", "author": "Jamie Delano, Garth Ennis", "year": "2002-11 Early Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Constantine Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Constantine", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Constantine", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Constantine Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Contact", "author": "Carl Sagan, Ann Druyan, James V. Hart, Michael Goldenberg", "year": "1995-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Contact Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Contact", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Contact", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Contact Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cooler, The", "author": "Frank Hannah, Wayne Kramer", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cooler, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cooler, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cooler, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cooler, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Copycat", "author": "Frank Pierson, Ann Biderman, Jay Presson Allen", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Copycat Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Copycat", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Copycat", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Copycat Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Coraline", "author": "Henry Selick, Neil Gaiman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Coraline Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Coraline", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Coraline", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Coraline Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Coriolanus", "author": "John Logan, William Shakespeare", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Coriolanus Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Coriolanus", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Coriolanus", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Coriolanus Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Corpse Bride", "author": "Caroline Thompson, Pamela Pettler, John August", "year": "2004-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Corpse Bride Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Corpse Bride", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Corpse Bride", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Corpse Bride Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Courage Under Fire", "author": "Patrick Sheane Duncan", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Courage Under Fire Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Courage Under Fire", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Courage Under Fire", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Courage Under Fire Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cowboys & Aliens", "author": "Alex Kurtzman, Roberto Orci, Damon Lindelof", "year": "2009-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cowboys & Aliens Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cowboys & Aliens", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cowboys & Aliens", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cowboys & Aliens Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cradle 2 the Grave", "author": "John O'Brian, Channing Gibson", "year": "2002-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cradle 2 the Grave Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cradle 2 the Grave", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cradle 2 the Grave", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cradle 2 the Grave Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Crank", "author": "Mark Neveldine, Brian Taylor", "year": "2005-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crank Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Crank", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Crank", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crank Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Crash", "author": "J.G. Ballard, David Cronenberg", "year": "1996 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crash Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Crash", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Crash", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crash Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Crazy, Stupid, Love", "author": "Dan Fogelman", "year": "2010-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crazy, Stupid, Love Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Crazy, Stupid, Love", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Crazy, Stupid, Love", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crazy, Stupid, Love Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Crazylove", "author": "Carol Watson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crazylove Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Crazylove", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Crazylove", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crazylove Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Creation", "author": "John Collee", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Creation Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Creation", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Creation", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Creation Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Crime Spree", "author": "Brad Mirman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crime Spree Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Crime Spree", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Crime Spree", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crime Spree Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Croods, The", "author": "Kirk DeMicco, Chris Sanders", "year": "2012-12 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Croods, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Croods, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Croods, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Croods, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Crouching Tiger, Hidden Dragon", "author": "Wang Hui Ling, James Schamus, Tsai Kuo Jung", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crouching Tiger, Hidden Dragon Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Crouching Tiger, Hidden Dragon", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Crouching Tiger, Hidden Dragon", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crouching Tiger, Hidden Dragon Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Croupier", "author": "Paul Mayersberg", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Croupier Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Croupier", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Croupier", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Croupier Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Crow Salvation, The", "author": "Chip Johannessen", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crow Salvation, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Crow Salvation, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Crow Salvation, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crow Salvation, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Crow, The", "author": "David Schow", "year": "1992-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crow, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Crow, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Crow, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crow, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Crow: City of Angels, The", "author": "David S Goyer, James O'Barr", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crow: City of Angels, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Crow: City of Angels, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Crow: City of Angels, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crow: City of Angels, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cruel Intentions", "author": "Roger Kumble", "year": "1998-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cruel Intentions Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cruel Intentions", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cruel Intentions", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cruel Intentions Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Crying Game", "author": "Neil Jordan", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crying Game Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Crying Game", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Crying Game", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Crying Game Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Cube", "author": "Andr� Bijelic, Vincenzo Natali, Graeme Manson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cube Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Cube", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Cube", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Cube Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Curious Case of Benjamin Button, The", "author": "Eric Roth", "year": "2007-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Curious Case of Benjamin Button, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Curious Case of Benjamin Button, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Curious Case of Benjamin Button, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Curious Case of Benjamin Button, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Custody", "author": "Eric Stuyvesant", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Custody Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Custody", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Custody", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Custody Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dallas Buyers Club", "author": "Craig Borten, Melisa Wallack", "year": "2012-12 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dallas Buyers Club Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dallas Buyers Club", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dallas Buyers Club", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dallas Buyers Club Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Damned United, The", "author": "Peter Morgan, David Peace", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Damned United, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Damned United, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Damned United, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Damned United, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dances with Wolves", "author": "Michael Blake", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dances with Wolves Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dances with Wolves", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dances with Wolves", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dances with Wolves Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Danish Girl, The", "author": "Lucinda Coxon, David Ebershoff", "year": "2015-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Danish Girl, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Danish Girl, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Danish Girl, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Danish Girl, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dark City", "author": "Alex Proyas", "year": "1994-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dark City Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dark City", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dark City", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dark City Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dark Knight Rises, The", "author": "Jonathan Nolan, Christopher Nolan", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dark Knight Rises, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dark Knight Rises, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dark Knight Rises, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dark Knight Rises, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dark Knight, The", "author": "Jonathan Nolan, Christopher Nolan", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dark Knight, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dark Knight, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dark Knight, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dark Knight, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dark Star", "author": "John Carpenter, Dan O'Bannon", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dark Star Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dark Star", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dark Star", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dark Star Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Darkman", "author": "Joshua Goldin, Daniel Goldin, Sam Raimi, Ivan Raimi, Chuck Pfarrer", "year": "1989-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Darkman Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Darkman", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Darkman", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Darkman Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Date Night", "author": "Josh Klausner", "year": "2008-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Date Night Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Date Night", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Date Night", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Date Night Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dave Barry's Complete Guide to Guys", "author": "Jeff Arch, Dave Barry", "year": "2004-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dave Barry's Complete Guide to Guys Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dave Barry's Complete Guide to Guys", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dave Barry's Complete Guide to Guys", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dave Barry's Complete Guide to Guys Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dawn of the Dead", "author": "George A. Romero", "year": "1977 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dawn of the Dead Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dawn of the Dead", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dawn of the Dead", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dawn of the Dead Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Day of the Dead", "author": "George A. Romero", "year": "1985 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Day of the Dead Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Day of the Dead", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Day of the Dead", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Day of the Dead Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Day the Clown Cried, The", "author": "Charles Denton, Jerry Lewis", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Day the Clown Cried, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Day the Clown Cried, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Day the Clown Cried, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Day the Clown Cried, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Day the Earth Stood Still, The", "author": "Edmund H. North", "year": "1951-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Day the Earth Stood Still, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Day the Earth Stood Still, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Day the Earth Stood Still, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Day the Earth Stood Still, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Days of Heaven", "author": "Terrance Malick", "year": "1976-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Days of Heaven Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Days of Heaven", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Days of Heaven", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Days of Heaven Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dead Poets Society", "author": "Tom Schulman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dead Poets Society Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dead Poets Society", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dead Poets Society", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dead Poets Society Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Deadpool", "author": "Rhett Reese, Paul Wernick", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deadpool Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Deadpool", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Deadpool", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deadpool Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Deadpool & Wolverine", "author": "Ryan Reynolds, Rhett Reese, Paul Wernick", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deadpool & Wolverine Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Deadpool & Wolverine", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Deadpool & Wolverine", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deadpool & Wolverine Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dear White People", "author": "Justin Simien", "year": "2013-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dear White People Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dear White People", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dear White People", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dear White People Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Death at a Funeral", "author": "Chris Rock, Aeysha Carr", "year": "2009-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Death at a Funeral Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Death at a Funeral", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Death at a Funeral", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Death at a Funeral Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Death to Smoochy", "author": "Marty Kaplan", "year": "1997-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Death to Smoochy Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Death to Smoochy", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Death to Smoochy", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Death to Smoochy Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Debt, The", "author": "Matthew Vaughn, Jane Goldman, Peter Straughan", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Debt, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Debt, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Debt, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Debt, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Deception", "author": "Mark Bomback, Patrick Marber", "year": "2005-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deception Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Deception", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Deception", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deception Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Deep Cover", "author": "Michael Tolkin, Henry Bean", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deep Cover Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Deep Cover", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Deep Cover", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deep Cover Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Deep Rising", "author": "Steven Sommers, Robert Mark Kamen", "year": "1996-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deep Rising Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Deep Rising", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Deep Rising", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deep Rising Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Deer Hunter, The", "author": "Deric Washburn", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deer Hunter, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Deer Hunter, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Deer Hunter, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Deer Hunter, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Defiance", "author": "Clayton Frohman, Edward Zwick", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Defiance Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Defiance", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Defiance", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Defiance Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Departed, The", "author": "William Monahan", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Departed, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Departed, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Departed, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Departed, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Descendants, The", "author": "Alexander Payne, Nat Faxon, Jim Rash", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Descendants, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Descendants, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Descendants, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Descendants, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Despicable Me 2", "author": "Cinco Paul, Ken Daurio", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Despicable Me 2 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Despicable Me 2", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Despicable Me 2", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Despicable Me 2 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Detroit Rock City", "author": "Carl V Dupre", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Detroit Rock City Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Detroit Rock City", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Detroit Rock City", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Detroit Rock City Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Devil in a Blue Dress", "author": "Carl Franklin, Walter Mosley", "year": "1994-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Devil in a Blue Dress Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Devil in a Blue Dress", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Devil in a Blue Dress", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Devil in a Blue Dress Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Devil Wears Prada, The", "author": "Aline Brosh McKenna, Lauren Weisberger", "year": "2005-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Devil Wears Prada, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Devil Wears Prada, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Devil Wears Prada, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Devil Wears Prada, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Devil's Advocate", "author": "Andrew Neiderman, Jonathan Lemkin", "year": "1997-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Devil's Advocate Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Devil's Advocate", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Devil's Advocate", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Devil's Advocate Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Die Hard", "author": "Jeb Stuart, Steven E. De Souza", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Die Hard Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Die Hard", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Die Hard", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Die Hard Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Die Hard 2", "author": "Doug Richardson, Steven E. de Souza", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Die Hard 2 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Die Hard 2", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Die Hard 2", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Die Hard 2 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Diner", "author": "Barry Levinson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Diner Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Diner", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Diner", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Diner Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Distinguished Gentleman, The", "author": "Adam Resnick", "year": "2000-12 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Distinguished Gentleman, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Distinguished Gentleman, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Distinguished Gentleman, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Distinguished Gentleman, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Disturbia", "author": "Christopher Landon, Carl Ellsworth", "year": "2006-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Disturbia Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Disturbia", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Disturbia", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Disturbia Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Django Unchained", "author": "Quentin Tarantino", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Django Unchained Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Django Unchained", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Django Unchained", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Django Unchained Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Do The Right Thing", "author": "Spike Lee", "year": "1988-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Do The Right Thing Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Do The Right Thing", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Do The Right Thing", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Do The Right Thing Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dog Day Afternoon", "author": "Frank Pierson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dog Day Afternoon Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dog Day Afternoon", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dog Day Afternoon", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dog Day Afternoon Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dogma", "author": "Kevin Smith", "year": "1999 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dogma Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dogma", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dogma", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dogma Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Donnie Brasco", "author": "Paul Attanasio", "year": "1992-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Donnie Brasco Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Donnie Brasco", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Donnie Brasco", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Donnie Brasco Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Donnie Darko", "author": "Richard Kelly", "year": "2001 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Donnie Darko Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Donnie Darko", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Donnie Darko", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Donnie Darko Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Doors, The", "author": "Randall Jahnson, Oliver Stone", "year": "Undated Shooting Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Doors, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Doors, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Doors, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Doors, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Double Indemnity", "author": "James M. Cain, Billy Wilder, Raymond Chandler", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Double Indemnity Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Double Indemnity", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Double Indemnity", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Double Indemnity Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Drag Me to Hell", "author": "Ivan Raimi, Sam Raimi", "year": "2007-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Drag Me to Hell Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Drag Me to Hell", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Drag Me to Hell", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Drag Me to Hell Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dragonslayer", "author": "Hal Barwood, Matthew Robbins", "year": "1981 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dragonslayer Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dragonslayer", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dragonslayer", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dragonslayer Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dream Scenario", "author": "Kristoffer Borgli", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dream Scenario Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dream Scenario", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dream Scenario", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dream Scenario Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Drive", "author": "Hossein Amini, James Sallis", "year": "2010-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Drive Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Drive", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Drive", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Drive Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Drive Angry", "author": "Todd Farmer, Patrick Lussier", "year": "2009-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Drive Angry Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Drive Angry", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Drive Angry", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Drive Angry Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Drop Dead Gorgeous", "author": "Lona Williams", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Drop Dead Gorgeous Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Drop Dead Gorgeous", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Drop Dead Gorgeous", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Drop Dead Gorgeous Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dry White Season, A", "author": "Euzhan Palcy", "year": "1987-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dry White Season, A Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dry White Season, A", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dry White Season, A", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dry White Season, A Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Duck Soup", "author": "Bert Kelmer, Harry Ruby, Grover Jones", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Duck Soup Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Duck Soup", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Duck Soup", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Duck Soup Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dumb and Dumber", "author": "Peter Farrelly, Bobby Farrelly, Bennett Yellin", "year": "1993-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dumb and Dumber Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dumb and Dumber", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dumb and Dumber", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dumb and Dumber Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dune", "author": "David Lynch, Frank Herbert", "year": "1983-12 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dune Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dune", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dune", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dune Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Dune Part One", "author": "Jon Spaihts, Denis Villeneuve, Eric Roth", "year": "2020-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dune Part One Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Dune Part One", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Dune Part One", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Dune Part One Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "E.T.", "author": "Melissa Mathison", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/E.T. Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "E.T.", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "E.T.", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/E.T. Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Eagle Eye", "author": "John Glenn, Travis Wright", "year": "2007-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Eagle Eye Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Eagle Eye", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Eagle Eye", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Eagle Eye Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Eastern Promises", "author": "Steven Knight", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Eastern Promises Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Eastern Promises", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Eastern Promises", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Eastern Promises Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Easy A", "author": "Bert V. Royal", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Easy A Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Easy A", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Easy A", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Easy A Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ed TV", "author": "Emile Gaudreault, Sylvie Bochard", "year": "1997-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ed TV Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ed TV", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ed TV", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ed TV Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ed Wood", "author": "Scott Alexander, Larry Karaszewski, Tim Burton", "year": "1992-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ed Wood Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ed Wood", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ed Wood", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ed Wood Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Edward Scissorhands", "author": "Tim Burton, Caroline Thompson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Edward Scissorhands Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Edward Scissorhands", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Edward Scissorhands", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Edward Scissorhands Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Eight Legged Freaks", "author": "Jesse Alexander, Ellory Elkayem", "year": "2000-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Eight Legged Freaks Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Eight Legged Freaks", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Eight Legged Freaks", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Eight Legged Freaks Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "El Mariachi", "author": "Robert Rodriguez", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/El Mariachi Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "El Mariachi", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "El Mariachi", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/El Mariachi Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Election", "author": "Alexander Payne, Jim Taylor", "year": "1997-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Election Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Election", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Election", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Election Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Elemental", "author": "John Hoberg, Kat Likkel, Brenda Hsueh", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Elemental Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Elemental", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Elemental", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Elemental Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Elephant Man, The", "author": "Christopher De Vore, Eric Bergren, David Lynch", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Elephant Man, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Elephant Man, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Elephant Man, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Elephant Man, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Elizabeth: The Golden Age", "author": "William Nicholson, Michael Hirst", "year": "2006-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Elizabeth: The Golden Age Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Elizabeth: The Golden Age", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Elizabeth: The Golden Age", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Elizabeth: The Golden Age Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Elvis", "author": "Baz Luhrmann, Sam Bromell, Craig Pearce, Jeremy Doner", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Elvis Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Elvis", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Elvis", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Elvis Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Enemy of the State", "author": "David Marconi", "year": "1998 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Enemy of the State Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Enemy of the State", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Enemy of the State", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Enemy of the State Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "English Patient, The", "author": "Anthony Minghella", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/English Patient, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "English Patient, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "English Patient, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/English Patient, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Enough", "author": "Nicholas Kazan", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Enough Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Enough", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Enough", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Enough Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Entrapment", "author": "Ronald Bass, Michael Herzberg", "year": "1996-12 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Entrapment Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Entrapment", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Entrapment", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Entrapment Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Equilibrium", "author": "Kurt Wimmer", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Equilibrium Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Equilibrium", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Equilibrium", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Equilibrium Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Erik the Viking", "author": "Terry Jones", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Erik the Viking Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Erik the Viking", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Erik the Viking", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Erik the Viking Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Erin Brockovich", "author": "Susannah Grant", "year": "1999-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Erin Brockovich Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Erin Brockovich", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Erin Brockovich", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Erin Brockovich Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Escape From L.A.", "author": "John Carpenter, Debra Hill, Kurt Russell", "year": "1996 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Escape From L.A. Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Escape From L.A.", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Escape From L.A.", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Escape From L.A. Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Escape From New York", "author": "John Carpenter, Nick Castle", "year": "1981 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Escape From New York Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Escape From New York", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Escape From New York", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Escape From New York Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Eternal Sunshine of the Spotless Mind", "author": "Charlie Kaufman, Michel Gondry, Pierre Bismuth", "year": "2003 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Eternal Sunshine of the Spotless Mind Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Eternal Sunshine of the Spotless Mind", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Eternal Sunshine of the Spotless Mind", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Eternal Sunshine of the Spotless Mind Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Even Cowgirls Get the Blues", "author": "Tom Robbins, Gus Van Sant", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Even Cowgirls Get the Blues Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Even Cowgirls Get the Blues", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Even Cowgirls Get the Blues", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Even Cowgirls Get the Blues Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Event Horizon", "author": "Philip Eisner", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Event Horizon Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Event Horizon", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Event Horizon", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Event Horizon Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Evil Dead", "author": "Sam Raimi", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Evil Dead Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Evil Dead", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Evil Dead", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Evil Dead Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Evil Dead II: Dead by Dawn", "author": "Sam Raimi, Scott Spiegel", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Evil Dead II: Dead by Dawn Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Evil Dead II: Dead by Dawn", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Evil Dead II: Dead by Dawn", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Evil Dead II: Dead by Dawn Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ex Machina", "author": "Alex Garland", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ex Machina Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ex Machina", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ex Machina", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ex Machina Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Excalibur", "author": "Rospo Pallenberg, John Boorman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Excalibur Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Excalibur", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Excalibur", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Excalibur Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Executive Decision", "author": "Jim Thomas, John Thomas", "year": "1991-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Executive Decision Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Executive Decision", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Executive Decision", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Executive Decision Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "eXistenZ", "author": "David Cronenberg", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/eXistenZ Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "eXistenZ", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "eXistenZ", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/eXistenZ Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Extract", "author": "Mike Judge", "year": "2008-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Extract Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Extract", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Extract", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Extract Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Eyes Wide Shut", "author": "Stanley Kubrick, Frederic Raphael", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Eyes Wide Shut Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Eyes Wide Shut", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Eyes Wide Shut", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Eyes Wide Shut Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fabulous Baker Boys, The", "author": "Steven Kloves", "year": "1985-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fabulous Baker Boys, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fabulous Baker Boys, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fabulous Baker Boys, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fabulous Baker Boys, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Face Off", "author": "Mike Werb, Michael Colleary", "year": "1996-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Face Off Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Face Off", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Face Off", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Face Off Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fair Game", "author": "Jez Butterworth, John-Henry Butterworth", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fair Game Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fair Game", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fair Game", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fair Game Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "FairyTale: A True Story", "author": "Ernie Contreras", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/FairyTale: A True Story Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "FairyTale: A True Story", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "FairyTale: A True Story", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/FairyTale: A True Story Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Family Man, The", "author": "David Diamond, David Weissman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Family Man, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Family Man, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Family Man, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Family Man, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fantastic Beasts and Where to Find Them", "author": "J.K. Rowling", "year": "2015-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fantastic Beasts and Where to Find Them Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fantastic Beasts and Where to Find Them", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fantastic Beasts and Where to Find Them", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fantastic Beasts and Where to Find Them Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fantastic Beasts: The Crimes of Grindelwald", "author": "J.K. Rowling", "year": "2017-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fantastic Beasts: The Crimes of Grindelwald Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fantastic Beasts: The Crimes of Grindelwald", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fantastic Beasts: The Crimes of Grindelwald", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fantastic Beasts: The Crimes of Grindelwald Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fantastic Beasts: The Secrets of Dumbledore", "author": "J.K. Rowling, Steve Kloves", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fantastic Beasts: The Secrets of Dumbledore Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fantastic Beasts: The Secrets of Dumbledore", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fantastic Beasts: The Secrets of Dumbledore", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fantastic Beasts: The Secrets of Dumbledore Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fantastic Four", "author": "Mark Frost, Michael France", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fantastic Four Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fantastic Four", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fantastic Four", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fantastic Four Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fantastic Mr Fox", "author": "Roald Dahl, Wes Anderson, Noah Baumbach", "year": "2007-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fantastic Mr Fox Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fantastic Mr Fox", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fantastic Mr Fox", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fantastic Mr Fox Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fargo", "author": "Joel Coen, Ethan Coen", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fargo Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fargo", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fargo", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fargo Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fast Times at Ridgemont High", "author": "Cameron Crowe", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fast Times at Ridgemont High Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fast Times at Ridgemont High", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fast Times at Ridgemont High", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fast Times at Ridgemont High Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fatal Instinct", "author": "David O'Malley", "year": "1993 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fatal Instinct Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fatal Instinct", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fatal Instinct", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fatal Instinct Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fault in Our Stars, The", "author": "Scott Neustadter, Michael H. Weber", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fault in Our Stars, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fault in Our Stars, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fault in Our Stars, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fault in Our Stars, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fear and Loathing in Las Vegas", "author": "Terry Gilliam, Tony Grisoni", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fear and Loathing in Las Vegas Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fear and Loathing in Las Vegas", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fear and Loathing in Las Vegas", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fear and Loathing in Las Vegas Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Feast", "author": "Patrick Melton, Marcus Dunston", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Feast Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Feast", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Feast", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Feast Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ferrari", "author": "Troy Kennedy Martin, Brock Yates", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ferrari Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ferrari", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ferrari", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ferrari Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ferris Bueller's Day Off", "author": "John Hughes", "year": "1985-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ferris Bueller's Day Off Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ferris Bueller's Day Off", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ferris Bueller's Day Off", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ferris Bueller's Day Off Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Field of Dreams", "author": "Phil Alden Robinson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Field of Dreams Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Field of Dreams", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Field of Dreams", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Field of Dreams Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fifth Element, The", "author": "Luc Besson", "year": "1995-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fifth Element, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fifth Element, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fifth Element, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fifth Element, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fight Club", "author": "Jim Uhls", "year": "1998-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fight Club Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fight Club", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fight Club", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fight Club Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fighter, The", "author": "Scott Silver, Paul Tamasy, Eric Johnson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fighter, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fighter, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fighter, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fighter, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Final Destination", "author": "James Wong, Glen Morgan", "year": "1999-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Final Destination Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Final Destination", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Final Destination", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Final Destination Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Final Destination 2", "author": "J. Mackye Gruber, Eric Bress", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Final Destination 2 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Final Destination 2", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Final Destination 2", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Final Destination 2 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Finding Nemo", "author": "Andrew Stanton", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Finding Nemo Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Finding Nemo", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Finding Nemo", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Finding Nemo Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "First Cow", "author": "Jon Raymond, Kelly Reichardt", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/First Cow Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "First Cow", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "First Cow", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/First Cow Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Five Easy Pieces", "author": "Carole Eastman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Five Easy Pieces Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Five Easy Pieces", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Five Easy Pieces", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Five Easy Pieces Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Flash Gordon", "author": "Lorenzo Semple Jr.", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Flash Gordon Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Flash Gordon", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Flash Gordon", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Flash Gordon Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fletch", "author": "Phil A. Robinson, Andrew Bergman", "year": "1986-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fletch Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fletch", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fletch", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fletch Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Flight", "author": "John Gatins", "year": "2011-12 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Flight Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Flight", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Flight", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Flight Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Flintstones, The", "author": "Steven E. De Souza", "year": "1987-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Flintstones, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Flintstones, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Flintstones, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Flintstones, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Flora and Son", "author": "John Carney", "year": "2022-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Flora and Son Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Flora and Son", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Flora and Son", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Flora and Son Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Foe", "author": "Iain Reid, Garth Davis", "year": "2022-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Foe Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Foe", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Foe", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Foe Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Forrest Gump", "author": "Eric Roth, Winston Groom", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Forrest Gump Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Forrest Gump", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Forrest Gump", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Forrest Gump Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Four Feathers", "author": "Michael Chiffer, Hossein Amini", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Four Feathers Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Four Feathers", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Four Feathers", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Four Feathers Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Four Rooms", "author": "Allison Anders, Quentin Tarantino, Robert Rodriguez, Alexandre Rockwell", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Four Rooms Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Four Rooms", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Four Rooms", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Four Rooms Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Foxcatcher", "author": "E. Max Frye, Dan Futterman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Foxcatcher Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Foxcatcher", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Foxcatcher", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Foxcatcher Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fracture", "author": "Dan Pyne", "year": "2005-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fracture Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fracture", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fracture", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fracture Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Frances", "author": "Eric Bergren, Christopher De Vore, Nicholas Kazan", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frances Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Frances", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Frances", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frances Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Frankenstein", "author": "Steph Lady, Frank Darabont", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frankenstein Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Frankenstein", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Frankenstein", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frankenstein Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Frankenweenie", "author": "John August", "year": "2012-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frankenweenie Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Frankenweenie", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Frankenweenie", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frankenweenie Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Freaked", "author": "Tim Burns, Tom Stern, Alex Winter", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Freaked Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Freaked", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Freaked", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Freaked Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fred Claus", "author": "Dan Fogelman, Jessie Nelson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fred Claus Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fred Claus", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fred Claus", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fred Claus Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Freddy vs. Jason", "author": "Peter Briggs", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Freddy vs. Jason Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Freddy vs. Jason", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Freddy vs. Jason", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Freddy vs. Jason Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "French Connection, The", "author": "Ernest Tidyman", "year": "1971-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/French Connection, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "French Connection, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "French Connection, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/French Connection, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Frequency", "author": "Toby Emmerich", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frequency Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Frequency", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Frequency", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frequency Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Freud's Last Session", "author": "Mark St. Germain, Matthew Brown", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Freud's Last Session Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Freud's Last Session", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Freud's Last Session", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Freud's Last Session Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Friday the 13th", "author": "Victor Miller", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Friday the 13th Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Friday the 13th", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Friday the 13th", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Friday the 13th Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Friday the 13th Part VIII: Jason Takes Manhattan", "author": "Rob Hedden", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Friday the 13th Part VIII: Jason Takes Manhattan Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Friday the 13th Part VIII: Jason Takes Manhattan", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Friday the 13th Part VIII: Jason Takes Manhattan", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Friday the 13th Part VIII: Jason Takes Manhattan Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fright Night", "author": "Marti Noxon", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fright Night Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fright Night", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fright Night", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fright Night Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fright Night (1985)", "author": "Tom Holland", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fright Night (1985) Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fright Night (1985)", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fright Night (1985)", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fright Night (1985) Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "From Dusk Till Dawn", "author": "Quentin Tarantino", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/From Dusk Till Dawn Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "From Dusk Till Dawn", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "From Dusk Till Dawn", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/From Dusk Till Dawn Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "From Here to Eternity", "author": "Daniel Taradash", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/From Here to Eternity Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "From Here to Eternity", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "From Here to Eternity", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/From Here to Eternity Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Frozen", "author": "Adam Green", "year": "2009-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frozen Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Frozen", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Frozen", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frozen Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Frozen (Disney)", "author": "Jennifer Lee", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frozen (Disney) Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Frozen (Disney)", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Frozen (Disney)", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frozen (Disney) Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Frozen River", "author": "Courtney Hunt", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frozen River Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Frozen River", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Frozen River", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Frozen River Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fruitvale Station", "author": "Ryan Coogler", "year": "2012-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fruitvale Station Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fruitvale Station", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fruitvale Station", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fruitvale Station Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fugitive, The", "author": "Jeb Stuart, David N. Twohy", "year": "1992-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fugitive, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fugitive, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fugitive, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fugitive, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Full Metal Jacket", "author": "Stanley Kubrick, Michael Herr, Gustav Hasford", "year": "1987 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Full Metal Jacket Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Full Metal Jacket", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Full Metal Jacket", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Full Metal Jacket Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Funny People", "author": "Judd Apatow", "year": "2008-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Funny People Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Funny People", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Funny People", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Funny People Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Fury", "author": "David Ayer", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fury Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Fury", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Fury", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Fury Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "G.I. Jane", "author": "David Twohy", "year": "1995-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/G.I. Jane Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "G.I. Jane", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "G.I. Jane", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/G.I. Jane Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "G.I. Joe: The Rise of Cobra", "author": "Stuart Beattie, John Lee Hancock, Brian Koppelman, David Levien", "year": "2007-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/G.I. Joe: The Rise of Cobra Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "G.I. Joe: The Rise of Cobra", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "G.I. Joe: The Rise of Cobra", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/G.I. Joe: The Rise of Cobra Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Game 6", "author": "Don DeLillo", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Game 6 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Game 6", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Game 6", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Game 6 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Game, The", "author": "John Brancato, Michael Ferris, Larry Gross, Andrew Kevin Walker", "year": "1996-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Game, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Game, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Game, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Game, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gamer", "author": "Mark Neveldine, Brian Taylor", "year": "2007-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gamer Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gamer", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gamer", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gamer Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gandhi", "author": "John Briley", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gandhi Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gandhi", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gandhi", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gandhi Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gang Related", "author": "Jim Kouf", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gang Related Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gang Related", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gang Related", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gang Related Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gangs of New York", "author": "Jay Cocks, Steven Zaillian, Kenneth Lonergan", "year": "2002 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gangs of New York Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gangs of New York", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gangs of New York", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gangs of New York Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Garden State", "author": "Zach Braff", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Garden State Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Garden State", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Garden State", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Garden State Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gattaca", "author": "Andrew Niccol", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gattaca Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gattaca", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gattaca", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gattaca Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Get Carter", "author": "Mike Hodges, Ted Lewis", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Get Carter Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Get Carter", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Get Carter", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Get Carter Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Get Low", "author": "Chris Provenzano, Scott Seeke, C. Gaby Mitchell", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Get Low Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Get Low", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Get Low", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Get Low Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Get on Up", "author": "Steven Baigelman, Jez Butterworth, John-Henry Butterworth", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Get on Up Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Get on Up", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Get on Up", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Get on Up Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Get Out", "author": "Jordan Peele", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Get Out Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Get Out", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Get Out", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Get Out Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Get Shorty", "author": "Scott Frank", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Get Shorty Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Get Shorty", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Get Shorty", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Get Shorty Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Getaway, The", "author": "Walter Hill", "year": "1972-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Getaway, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Getaway, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Getaway, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Getaway, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ghost", "author": "Bruce Joel Rubin", "year": "1990 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghost Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ghost", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ghost", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghost Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ghost and the Darkness, The", "author": "William Goldman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghost and the Darkness, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ghost and the Darkness, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ghost and the Darkness, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghost and the Darkness, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ghost Rider", "author": "David S. Goyer", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghost Rider Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ghost Rider", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ghost Rider", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghost Rider Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ghost Ship", "author": "Mark Hanlon", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghost Ship Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ghost Ship", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ghost Ship", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghost Ship Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ghost World", "author": "Daniel Clowes, Terry Zwigoff", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghost World Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ghost World", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ghost World", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghost World Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ghostbusters", "author": "Dan Aykroyd, Harold Ramis", "year": "1988-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghostbusters Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ghostbusters", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ghostbusters", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghostbusters Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ghostbusters 2", "author": "Dan Aykroyd, Harold Ramis", "year": "1989-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghostbusters 2 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ghostbusters 2", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ghostbusters 2", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ghostbusters 2 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Ginger Snaps", "author": "Karen Walton", "year": "1996-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ginger Snaps Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Ginger Snaps", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Ginger Snaps", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Ginger Snaps Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Girl with the Dragon Tattoo, The", "author": "Steven Zaillian", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Girl with the Dragon Tattoo, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Girl with the Dragon Tattoo, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Girl with the Dragon Tattoo, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Girl with the Dragon Tattoo, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gladiator", "author": "David Franzoni, John Logan", "year": "1998-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gladiator Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gladiator", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gladiator", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gladiator Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Glengarry Glen Gross", "author": "David Mamet", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Glengarry Glen Gross Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Glengarry Glen Gross", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Glengarry Glen Gross", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Glengarry Glen Gross Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Go", "author": "John August", "year": "1997-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Go Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Go", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Go", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Go Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Godfather", "author": "Mario Puzo, Francis Ford Coppola", "year": "1971-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Godfather Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Godfather", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Godfather", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Godfather Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Godfather Part II", "author": "Mario Puzo, Francis Ford Coppola", "year": "1973-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Godfather Part II Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Godfather Part II", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Godfather Part II", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Godfather Part II Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Godfather Part III, The", "author": "Mario Puzo, Francis Ford Coppola", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Godfather Part III, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Godfather Part III, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Godfather Part III, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Godfather Part III, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gods and Monsters", "author": "Bill Condon", "year": "1997-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gods and Monsters Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gods and Monsters", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gods and Monsters", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gods and Monsters Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Godzilla", "author": "Dean Devlin, Roland Emmerich", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Godzilla Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Godzilla", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Godzilla", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Godzilla Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gone Baby Gone", "author": "Ben Affleck, Aaron Stockard", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gone Baby Gone Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gone Baby Gone", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gone Baby Gone", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gone Baby Gone Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gone in 60 Seconds", "author": "Scott Rosenberg", "year": "1999-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gone in 60 Seconds Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gone in 60 Seconds", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gone in 60 Seconds", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gone in 60 Seconds Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Good Girl, The", "author": "Mike White", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Good Girl, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Good Girl, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Good Girl, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Good Girl, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Good Will Hunting", "author": "Matt Damon, Ben Affleck", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Good Will Hunting Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Good Will Hunting", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Good Will Hunting", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Good Will Hunting Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Goodfellas", "author": "Nicholas Pileggi", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Goodfellas Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Goodfellas", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Goodfellas", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Goodfellas Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gothika", "author": "Sebastian Gutierrez", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gothika Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gothika", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gothika", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gothika Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Grabbers", "author": "Kevin Lehane", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grabbers Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Grabbers", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Grabbers", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grabbers Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Graduate, The", "author": "Buck Henry", "year": "1967-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Graduate, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Graduate, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Graduate, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Graduate, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gran Torino", "author": "Nick Schenk", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gran Torino Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gran Torino", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gran Torino", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gran Torino Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Grand Hotel", "author": "Bela Balazs", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grand Hotel Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Grand Hotel", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Grand Hotel", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grand Hotel Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Grand Theft Parsons", "author": "Jeremy Drysdale", "year": "2003-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grand Theft Parsons Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Grand Theft Parsons", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Grand Theft Parsons", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grand Theft Parsons Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Grapes of Wrath, The", "author": "Nunnally Johnson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grapes of Wrath, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Grapes of Wrath, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Grapes of Wrath, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grapes of Wrath, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gravity", "author": "Alfonso Cuaron, Jonas Cuaron", "year": "2012-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gravity Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gravity", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gravity", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gravity Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Great Gatsby, The", "author": "Baz Luhrmann, Craig Pearce", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Great Gatsby, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Great Gatsby, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Great Gatsby, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Great Gatsby, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Green Mile, The", "author": "Stephen King, Frank Darabont", "year": "1997-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Green Mile, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Green Mile, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Green Mile, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Green Mile, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gremlins", "author": "Chris Columbus", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gremlins Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gremlins", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gremlins", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gremlins Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Gremlins 2", "author": "Charlie Haas", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gremlins 2 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Gremlins 2", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Gremlins 2", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Gremlins 2 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Grifters, The", "author": "Donald E. Westlake", "year": "1989-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grifters, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Grifters, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Grifters, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grifters, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Grosse Point Blank", "author": "Tom Jankiewicz, D.V. deVincentis, S.K. Boatman, John Cusack", "year": "1994-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grosse Point Blank Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Grosse Point Blank", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Grosse Point Blank", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grosse Point Blank Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Groundhog Day", "author": "Danny Rubin", "year": "1992-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Groundhog Day Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Groundhog Day", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Groundhog Day", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Groundhog Day Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Grudge, The", "author": "Stephen Susco", "year": "2004-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grudge, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Grudge, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Grudge, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Grudge, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Guardians of the Galaxy Vol 2", "author": "James Gunn", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Guardians of the Galaxy Vol 2 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Guardians of the Galaxy Vol 2", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Guardians of the Galaxy Vol 2", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Guardians of the Galaxy Vol 2 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hackers", "author": "Rafael Moreu", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hackers Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hackers", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hackers", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hackers Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hall Pass", "author": "Peter Farrelly, Bobby Farrelly, Kevin Barnett, Pete Jones", "year": "2009-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hall Pass Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hall Pass", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hall Pass", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hall Pass Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Halloween", "author": "Jeff Fradley, Danny McBride, David Gordon Green", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Halloween Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Halloween", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Halloween", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Halloween Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Halloween: The Curse of Michael Myers", "author": "Daniel Farrands", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Halloween: The Curse of Michael Myers Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Halloween: The Curse of Michael Myers", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Halloween: The Curse of Michael Myers", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Halloween: The Curse of Michael Myers Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hancock", "author": "Vincent Ngo, Vince Gilligan", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hancock Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hancock", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hancock", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hancock Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hangover, The", "author": "Jon Lucas, Scott Moore", "year": "2007-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hangover, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hangover, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hangover, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hangover, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hanna", "author": "Seth Lochead", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hanna Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hanna", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hanna", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hanna Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hannah and Her Sisters", "author": "Woody Allen", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hannah and Her Sisters Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hannah and Her Sisters", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hannah and Her Sisters", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hannah and Her Sisters Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hannibal", "author": "Steven Zaillian", "year": "2000-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hannibal Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hannibal", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hannibal", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hannibal Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Happy Birthday, Wanda June", "author": "Kurt Vonnegut Jr.", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Happy Birthday, Wanda June Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Happy Birthday, Wanda June", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Happy Birthday, Wanda June", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Happy Birthday, Wanda June Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Happy Feet", "author": "George Miller, John Collee", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Happy Feet Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Happy Feet", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Happy Feet", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Happy Feet Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hard Rain", "author": "Graham Yost", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hard Rain Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hard Rain", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hard Rain", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hard Rain Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hard to Kill", "author": "Steven Pressfield, Ronald Shusett, Steven Seagal", "year": "1990-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hard to Kill Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hard to Kill", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hard to Kill", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hard to Kill Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Harold and Kumar Go to White Castle", "author": "Jon Hurwitz, Hayden Schlossberg", "year": "2003-05 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harold and Kumar Go to White Castle Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Harold and Kumar Go to White Castle", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Harold and Kumar Go to White Castle", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harold and Kumar Go to White Castle Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Harry Potter and the Chamber of Secrets", "author": "J.K. Rowling, Steven Kloves", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Chamber of Secrets Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Harry Potter and the Chamber of Secrets", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Harry Potter and the Chamber of Secrets", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Chamber of Secrets Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Harry Potter and the Deathly Hallows Part 1", "author": "Steve Kloves", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Deathly Hallows Part 1 Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Harry Potter and the Deathly Hallows Part 1", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Harry Potter and the Deathly Hallows Part 1", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Deathly Hallows Part 1 Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Harry Potter and the Goblet of Fire", "author": "Steven Kloves, J.K. Rowling", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Goblet of Fire Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Harry Potter and the Goblet of Fire", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Harry Potter and the Goblet of Fire", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Goblet of Fire Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Harry Potter and the Half-Blood Prince", "author": "Steve Kloves, J.K. Rowling", "year": "2007-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Half-Blood Prince Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Harry Potter and the Half-Blood Prince", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Harry Potter and the Half-Blood Prince", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Half-Blood Prince Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Harry Potter and the Prisoner of Azkaban", "author": "J.K. Rowling, Steven Kloves", "year": "2003-02 Full Tan Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Prisoner of Azkaban Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Harry Potter and the Prisoner of Azkaban", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Harry Potter and the Prisoner of Azkaban", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Prisoner of Azkaban Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Harry Potter and the Sorcerer's Stone", "author": "J.K. Rowling, Steven Kloves", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Sorcerer's Stone Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Harry Potter and the Sorcerer's Stone", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Harry Potter and the Sorcerer's Stone", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Harry Potter and the Sorcerer's Stone Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Haunting, The", "author": "David Self, Michael Tolkin", "year": "1998-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Haunting, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Haunting, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Haunting, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Haunting, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "He's Just Not That Into You", "author": "Abby Kohn, Marc Silverstein", "year": "2007-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/He's Just Not That Into You Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "He's Just Not That Into You", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "He's Just Not That Into You", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/He's Just Not That Into You Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Heat", "author": "Michael Mann", "year": "1994-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Heat Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Heat", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Heat", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Heat Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Heathers", "author": "Daniel Waters", "year": "1988-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Heathers Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Heathers", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Heathers", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Heathers Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Heavenly Creatures", "author": "Fran Walsh, Peter Jackson", "year": "1994 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Heavenly Creatures Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Heavenly Creatures", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Heavenly Creatures", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Heavenly Creatures Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Heavy Metal", "author": "Dan Goldberg, Len Blum", "year": "1980-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Heavy Metal Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Heavy Metal", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Heavy Metal", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Heavy Metal Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hebrew Hammer, The", "author": "Jonathan Kesselman", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hebrew Hammer, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hebrew Hammer, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hebrew Hammer, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hebrew Hammer, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Heist", "author": "David Mamet", "year": "1999-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Heist Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Heist", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Heist", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Heist Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hellbound: Hellraiser II", "author": "Peter Atkins, Clive Barker", "year": "2000-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellbound: Hellraiser II Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hellbound: Hellraiser II", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hellbound: Hellraiser II", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellbound: Hellraiser II Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hellboy", "author": "Mike Mignola, Guillermo del Toro, Peter Briggs", "year": "2003-06 Production Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellboy Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hellboy", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hellboy", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellboy Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hellboy 2: The Golden Army", "author": "Guillermo del Toro", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellboy 2: The Golden Army Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hellboy 2: The Golden Army", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hellboy 2: The Golden Army", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellboy 2: The Golden Army Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hellraiser", "author": "Clive Barker", "year": "1986-11 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellraiser Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hellraiser", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hellraiser", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellraiser Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hellraiser 3: Hell on Earth", "author": "Peter Atkins, Tony Randel", "year": "1991-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellraiser 3: Hell on Earth Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hellraiser 3: Hell on Earth", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hellraiser 3: Hell on Earth", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellraiser 3: Hell on Earth Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hellraiser: Deader", "author": "Clive Barker, Neal Marshall Stevens, Tim Day", "year": "2002-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellraiser: Deader Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hellraiser: Deader", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hellraiser: Deader", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellraiser: Deader Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hellraiser: Hellseeker", "author": "Carl Dupre, Clive Barker", "year": "2000-10 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellraiser: Hellseeker Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hellraiser: Hellseeker", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hellraiser: Hellseeker", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hellraiser: Hellseeker Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Help, The", "author": "Tate Taylor, Kathryn Stockett", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Help, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Help, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Help, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Help, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Henry Fool", "author": "Hal Hartley", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Henry Fool Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Henry Fool", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Henry Fool", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Henry Fool Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Henry's Crime", "author": "Sacha Gervasi", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Henry's Crime Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Henry's Crime", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Henry's Crime", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Henry's Crime Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Her", "author": "Spike Jonze", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Her Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Her", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Her", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Her Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Here Comes Peter Cottontail", "author": "Priscilla Friedrich, Otto Friedrich, Thornton W. Burgess, Romeo Muller", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Here Comes Peter Cottontail Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Here Comes Peter Cottontail", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Here Comes Peter Cottontail", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Here Comes Peter Cottontail Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hesher", "author": "Spencer Susser, David Michod", "year": "2008-07 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hesher Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hesher", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hesher", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hesher Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "High Fidelity", "author": "Nick Hornby, D.V. DeVincentis", "year": "1998-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/High Fidelity Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "High Fidelity", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "High Fidelity", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/High Fidelity Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Highlander", "author": "Gregory Widen", "year": "1986 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Highlander Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Highlander", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Highlander", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Highlander Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Highlander: Endgame", "author": "Gillian Horvath, William N. Panzer, Joel Soisson", "year": "1999-09 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Highlander: Endgame Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Highlander: Endgame", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Highlander: Endgame", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Highlander: Endgame Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hills Have Eyes, The", "author": "Alexandre Aja, Gregory Levasseur", "year": "2005-02 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hills Have Eyes, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hills Have Eyes, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hills Have Eyes, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hills Have Eyes, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "His Girl Friday", "author": "Ben Hecht, Charles MacArthur", "year": "Undated Shooting Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/His Girl Friday Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "His Girl Friday", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "His Girl Friday", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/His Girl Friday Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hitchcock", "author": "John J. McLaughlin, Stephen Rebello", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hitchcock Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hitchcock", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hitchcock", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hitchcock Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hitchhiker's Guide to the Galaxy, The", "author": "Douglas Adams", "year": "2003-08 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hitchhiker's Guide to the Galaxy, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hitchhiker's Guide to the Galaxy, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hitchhiker's Guide to the Galaxy, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hitchhiker's Guide to the Galaxy, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Holdovers, The", "author": "David Hemingson", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Holdovers, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Holdovers, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Holdovers, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Holdovers, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hollow Man", "author": "Gary Scott Thompson, Andrew W. Marlowe", "year": "1998-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hollow Man Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hollow Man", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hollow Man", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hollow Man Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Honeydripper", "author": "John Sayles", "year": "2006-06 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Honeydripper Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Honeydripper", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Honeydripper", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Honeydripper Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Horrible Bosses", "author": "Michael Markowitz", "year": "2010-04 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Horrible Bosses Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Horrible Bosses", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Horrible Bosses", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Horrible Bosses Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Horse Whisperer, The", "author": "Eric Roth", "year": "1997-01 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Horse Whisperer, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Horse Whisperer, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Horse Whisperer, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Horse Whisperer, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hospital, The", "author": "Paddy Chayefsky", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hospital, The Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hospital, The", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hospital, The", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hospital, The Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hostage", "author": "Robert Crais", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hostage Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hostage", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hostage", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hostage Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hot Tub Time Machine", "author": "Josh Heald", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hot Tub Time Machine Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hot Tub Time Machine", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hot Tub Time Machine", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hot Tub Time Machine Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Hotel Rwanda", "author": "Keir Pearson, Terry George", "year": "Undated Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hotel Rwanda Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "Hotel Rwanda", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "Hotel Rwanda", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/Hotel Rwanda Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "House of 1000 Corpses", "author": "Rob Zombie", "year": "2000-03 Draft", "type": "copyright", "region": "foreign", "tags": ["电影剧本", "IMSDB", "版权索引"], "sourceInstitution": "IMSDb", "link": "https://imsdb.com/Movie Scripts/House of 1000 Corpses Script.html", "summary": "IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。", "framework": "救猫咪喜剧节拍表 / 群像压力锅结构", "access": "合法剧本链接；版权作品不内嵌全文", "chineseVersions": [{"title": "House of 1000 Corpses", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠汉译版本链接，暂留空。"}], "originalVersion": {"title": "House of 1000 Corpses", "language": "英语/待核验", "publisher": "IMSDb", "link": "https://imsdb.com/Movie Scripts/House of 1000 Corpses Script.html", "reliability": "trusted", "note": "IMSDb 电影剧本索引页；本站仅保存链接和结构索引。"}, "structure": {"acts": "电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。", "turns": "关键转折需结合合法链接页面或正式出版剧本逐场复核。", "climax": "高潮设计不做未核验概括，保留为结构学习入口。", "arcs": "人物弧线待按授权文本或正式书目细读后补全。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "A. 电影剧本索引"},
  {"title": "Doubt: A Parable", "author": "John Patrick Shanley", "year": "2005", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2005 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2005 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Doubt: A Parable", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Doubt: A Parable", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Rabbit Hole", "author": "David Lindsay-Abaire", "year": "2007", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2007 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2007 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Rabbit Hole", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Rabbit Hole", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Ruined", "author": "Lynn Nottage", "year": "2009", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2009 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2009 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Ruined", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Ruined", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Next to Normal", "author": "Brian Yorkey / Tom Kitt", "year": "2010", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2010 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2010 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Next to Normal", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Next to Normal", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Clybourne Park", "author": "Bruce Norris", "year": "2011", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2011 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2011 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Clybourne Park", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Clybourne Park", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Water by the Spoonful", "author": "Quiara Alegría Hudes", "year": "2012", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2012 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2012 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Water by the Spoonful", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Water by the Spoonful", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Disgraced", "author": "Ayad Akhtar", "year": "2013", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2013 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2013 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Disgraced", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Disgraced", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "The Flick", "author": "Annie Baker", "year": "2014", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2014 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2014 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "The Flick", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "The Flick", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Between Riverside and Crazy", "author": "Stephen Adly Guirgis", "year": "2015", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2015 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2015 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Between Riverside and Crazy", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Between Riverside and Crazy", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Hamilton", "author": "Lin-Manuel Miranda", "year": "2016", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2016 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2016 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Hamilton", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Hamilton", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Sweat", "author": "Lynn Nottage", "year": "2017", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2017 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2017 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Sweat", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Sweat", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Cost of Living", "author": "Martyna Majok", "year": "2018", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2018 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2018 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Cost of Living", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Cost of Living", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Fairview", "author": "Jackie Sibblies Drury", "year": "2019", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2019 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2019 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Fairview", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Fairview", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "A Strange Loop", "author": "Michael R. Jackson", "year": "2020", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2020 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2020 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "A Strange Loop", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "A Strange Loop", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Fat Ham", "author": "James Ijames", "year": "2022", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2022 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2022 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Fat Ham", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Fat Ham", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "English", "author": "Sanaz Toossi", "year": "2023", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2023 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2023 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "English", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "English", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
  {"title": "Primary Trust", "author": "Eboni Booth", "year": "2024", "type": "copyright", "region": "foreign", "tags": ["普利策戏剧奖", "近年获奖剧本", "版权索引"], "sourceInstitution": "The Pulitzer Prizes", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "summary": "2024 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。", "framework": "群像压力锅结构 / 问题剧剥洋葱结构", "access": "获奖/书目索引，不收录全文", "awardInfo": "2024 Pulitzer Prize for Drama winner", "chineseVersions": [{"title": "Primary Trust", "translator": "待核验", "publisher": "", "isbn": "", "link": "", "reliability": "biblio", "note": "未找到可靠中文出版/汉译链接，暂留空。"}], "originalVersion": {"title": "Primary Trust", "language": "英语", "publisher": "The Pulitzer Prizes / official award index", "link": "https://www.pulitzer.org/prize-winners-by-category/218", "reliability": "official", "note": "普利策官方分类索引；购买/出版页待逐本补充。"}, "structure": {"acts": "近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。", "turns": "关键转折不做未核验细节扩写，保留奖项与书目入口。", "climax": "高潮设计待依据正式出版版本补充。", "arcs": "人物弧线待按授权剧本或出版社版本复核。"}, "expansionBatch": "2026-08-01-script-library-expansion", "expansionCategory": "B. 普利策近年获奖剧本"},
];

libraryExpansion20260801.forEach((script) => {
  if (!scriptLibrary.some((existing) => existing.title === script.title && existing.author === script.author)) {
    scriptLibrary.push(script);
  }
});

(() => {
  const readableDomains = [
    'gutenberg.org',
    'wikisource.org',
    'imsdb.com',
    'simplyscripts.com',
    'scriptslug.com',
    'opensourceshakespeare.org',
    'xiaoshuo.com',
    'juben68.com',
    'wenku.baidu.com',
    'shuku.net',
    'xirr.net',
    '5000yan.com',
    'gushiwen.cn',
    'gushiwen.org'
  ];
  const authorityDomains = [
    'douban.com',
    'book.douban.com',
    'amazon.',
    'jd.com',
    'dangdang.com',
    'wikipedia.org',
    'baike.baidu.com',
    'bloomsbury.com',
    'penguinrandomhouse.com',
    'penguin.co.uk',
    'pulitzer.org',
    'nobelprize.org',
    'tonyawards.com',
    'newdramatists.org',
    'ghibli.jp'
  ];
  const replacementMap = {
    'www.gutenberg.org/ebooks/100': 'https://www.gutenberg.org/files/100/100-0.txt',
    'www.gutenberg.org/ebooks/662': 'https://www.gutenberg.org/files/662/662-0.txt',
    'www.gutenberg.org/ebooks/849': 'https://www.gutenberg.org/files/849/849-0.txt',
    'www.gutenberg.org/ebooks/4015': 'https://www.gutenberg.org/files/4015/4015-0.txt',
    'www.gutenberg.org/ebooks/4022': 'https://www.gutenberg.org/files/4022/4022-0.txt'
  };
  const knownAuthorityLinks = {
    '雷雨|曹禺': 'https://book.douban.com/subject/1013416/',
    '日出|曹禺': 'https://book.douban.com/subject/30289610/',
    '原野|曹禺': 'https://book.douban.com/subject/36240090/',
    '获虎之夜|田汉': 'https://book.douban.com/subject/6963699/',
    '屈原|郭沫若': 'https://book.douban.com/subject/1202366/',
    '琥珀·恋爱的犀牛|廖一梅': 'https://book.douban.com/subject/3010133/',
    '恋爱的犀牛|廖一梅': 'https://book.douban.com/subject/27103796/',
    '两只狗的生活意见|孟京辉': 'https://www.douban.com/location/drama/7058113/',
    '等待戈多|塞缪尔·贝克特': 'https://book.douban.com/subject/25760473/',
    '培尔·金特|亨利克·易卜生': 'https://zh.wikipedia.org/wiki/%E5%9F%B9%E7%88%BE%C2%B7%E9%87%91%E7%89%B9'
  };
  const normalizeLink = (value) => {
    if (!value) return value;
    const mapped = Object.entries(replacementMap).find(([key]) => value.includes(key));
    if (mapped) return mapped[1];
    return value;
  };
  const isAuthority = (value) => Boolean(value) && authorityDomains.some((domain) => value.includes(domain));
  const isReadable = (value) => {
    if (!value) return true;
    const normalized = normalizeLink(value);
    if (isAuthority(normalized)) return false;
    return readableDomains.some((domain) => normalized.includes(domain));
  };
  const addAuthority = (script, value) => {
    if (!value || isReadable(value)) return;
    const normalized = normalizeLink(value);
    if (!script.authorityLink) {
      script.authorityLink = normalized;
    }
  };
  const clearAsNoText = (container) => {
    if (!container) return;
    container.link = '';
    container.reliability = 'biblio';
    container.note = '暂无在线正文';
  };
  scriptLibrary.forEach((script) => {
    const authorityKey = `${script.title}|${script.author}`;
    if (knownAuthorityLinks[authorityKey] && !script.authorityLink) {
      script.authorityLink = knownAuthorityLinks[authorityKey];
    }
    if (script.link) {
      const normalized = normalizeLink(script.link);
      if (isReadable(script.link)) {
        script.link = normalized;
      } else {
        addAuthority(script, script.link);
        script.link = '';
        script.access = '暂无在线正文';
        script.note = script.note || '暂无在线正文';
      }
    }
    if (script.originalVersion && script.originalVersion.link) {
      const normalized = normalizeLink(script.originalVersion.link);
      if (isReadable(script.originalVersion.link)) {
        script.originalVersion.link = normalized;
      } else {
        addAuthority(script, script.originalVersion.link);
        clearAsNoText(script.originalVersion);
      }
    }
    if (Array.isArray(script.chineseVersions)) {
      script.chineseVersions.forEach((version) => {
        if (!version.link) {
          version.note = version.note || '暂无在线正文';
          return;
        }
        const normalized = normalizeLink(version.link);
        if (isReadable(version.link)) {
          version.link = normalized;
        } else {
          addAuthority(script, version.link);
          clearAsNoText(version);
        }
      });
    }
    if (script.chineseLink && !isReadable(script.chineseLink)) {
      addAuthority(script, script.chineseLink);
      script.chineseLink = '';
      script.note = script.note || '暂无在线正文';
    }
    const bestChinese = Array.isArray(script.chineseVersions) ? script.chineseVersions.find((version) => version.link) : null;
    const chineseReadableLink = script.link && isReadable(script.link) && (script.region === 'cn' || /[\u4e00-\u9fa5]/.test(script.title)) ? script.link : '';
    script.chineseLink = bestChinese ? bestChinese.link : (script.chineseLink || chineseReadableLink);
  });
})();

const authorAliasDictionary = {
  '威廉·莎士比亚': ['威廉·莎士比亚', '莎士比亚', 'William Shakespeare', 'Shakespeare'],
  'William Shakespeare': ['威廉·莎士比亚', '莎士比亚', 'William Shakespeare', 'Shakespeare'],
  '契诃夫': ['契诃夫', '安东·契诃夫', 'Anton Chekhov', 'Anton Pavlovich Chekhov', 'Chekhov', 'Tchekhov', 'Чехов', 'Антон Павлович Чехов'],
  '亨利克·易卜生': ['易卜生', '亨利克·易卜生', 'Henrik Ibsen', 'Henrik Johan Ibsen'],
  '奥古斯特·斯特林堡': ['斯特林堡', '奥古斯特·斯特林堡', 'August Strindberg', 'Johan August Strindberg'],
  '奥斯卡·王尔德': ['王尔德', '奥斯卡·王尔德', 'Oscar Wilde', 'Oscar Fingal O\'Flahertie Wills Wilde'],
  '曹禺': ['曹禺', '万家宝', 'Cao Yu', 'Wan Jiabao'],
  '田汉': ['田汉', 'Tian Han'],
  '郭沫若': ['郭沫若', 'Guo Moruo'],
  '老舍': ['老舍', '舒庆春', 'Lao She', 'Shu Qingchun'],
  '塞缪尔·贝克特': ['贝克特', '塞缪尔·贝克特', 'Samuel Beckett'],
  '贝托尔特·布莱希特': ['布莱希特', '贝托尔特·布莱希特', 'Bertolt Brecht', 'Bert Brecht'],
  '尤金·奥尼尔': ['奥尼尔', '尤金·奥尼尔', 'Eugene O\'Neill', 'Eugene Gladstone O\'Neill'],
  '阿瑟·米勒': ['阿瑟·米勒', '米勒', 'Arthur Miller'],
  '田纳西·威廉斯': ['田纳西·威廉斯', 'Tennessee Williams', 'Thomas Lanier Williams'],
  '哈罗德·品特': ['品特', '哈罗德·品特', 'Harold Pinter'],
  'Harold Pinter': ['品特', '哈罗德·品特', 'Harold Pinter'],
  'Jon Fosse': ['约恩·福瑟', '琼·福瑟', 'Jon Fosse'],
  '让-保罗·萨特': ['萨特', '让-保罗·萨特', 'Jean-Paul Sartre', 'Jean Paul Sartre'],
  '阿尔贝·卡缪': ['卡缪', '阿尔贝·卡缪', 'Albert Camus'],
  '汤姆·斯托帕德': ['斯托帕德', '汤姆·斯托帕德', 'Tom Stoppard', 'Tomáš Straussler'],
  '爱德华·阿尔比': ['阿尔比', '爱德华·阿尔比', 'Edward Albee'],
  '托尼·库什纳': ['库什纳', '托尼·库什纳', 'Tony Kushner'],
  '廖一梅': ['廖一梅', 'Liao Yimei'],
  '孟京辉': ['孟京辉', 'Meng Jinghui'],
  '史铁生': ['史铁生', 'Shi Tiesheng'],
  '高行健': ['高行健', 'Gao Xingjian'],
  '查理·考夫曼': ['查理·考夫曼', 'Charlie Kaufman'],
  'Charlie Kaufman': ['查理·考夫曼', 'Charlie Kaufman'],
  '亚伦·索金': ['亚伦·索金', 'Aaron Sorkin'],
  'Aaron Sorkin': ['亚伦·索金', 'Aaron Sorkin'],
  '宫崎骏': ['宫崎骏', 'Hayao Miyazaki', '宮崎駿'],
  '是枝裕和': ['是枝裕和', 'Hirokazu Kore-eda'],
  '王家卫 / 编剧团队': ['王家卫', '王家衛', 'Wong Kar-wai', 'Wong Kar Wai'],
  '张艺谋 / 编剧团队': ['张艺谋', '張藝謀', 'Zhang Yimou'],
  '陈可辛 / 编剧团队': ['陈可辛', '陳可辛', 'Peter Chan', 'Peter Ho-sun Chan'],
  'Branden Jacobs-Jenkins': ['布兰登·雅各布斯-詹金斯', 'Branden Jacobs-Jenkins', 'Branden Jacobs Jenkins'],
  'Katori Hall': ['卡托里·霍尔', 'Katori Hall']
};

function normalizeAuthorAliasesForScriptLibrary() {
  const splitAuthorParts = (author = '') => String(author).split(/\s*(?:,|\/|、| and | & |，)\s*/).map((part) => part.trim()).filter(Boolean);
  const unique = (items) => [...new Set(items.map((item) => String(item || '').trim()).filter(Boolean))];
  const aliasesForAuthor = (author = '') => {
    const directAliases = authorAliasDictionary[author] || [];
    const partAliases = splitAuthorParts(author).flatMap((part) => authorAliasDictionary[part] || [part]);
    return unique([author, ...directAliases, ...partAliases]);
  };
  [scriptLibrary, typeof libraryExpansion20260801 !== 'undefined' ? libraryExpansion20260801 : []].filter(Array.isArray).forEach((list) => {
    list.forEach((script) => {
      script.authorAliases = unique([...(Array.isArray(script.authorAliases) ? script.authorAliases : []), ...aliasesForAuthor(script.author)]);
    });
  });
}

normalizeAuthorAliasesForScriptLibrary();
