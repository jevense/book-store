<template>
    <div class="imed-reader">
        <div class="imed-title" v-text="title"></div>
        <div v-if="guide" style="padding: .5rem 0">
            <div class="imed-title" v-text="guide.title"></div>
            <p class="imed-content" v-text="guide.text"></p>
        </div>
        <div v-for="item in chapter">
            <div v-for="content in item.content">
                <div class="imed-title">【图文并茂——章节解析】</div>
                <div class="imed-chapter" v-text="content.title"></div>
                <imed-content v-for="node in content.nodes" :data="node"/>
            </div>
            <div>
                <div class="imed-title">【临考必备——记忆点睛】</div>
                <imed-content v-for="keyPoint in item.keyPoint" :data="keyPoint"/>
            </div>
        </div>

    </div>
</template>

<script>
    import ImedContent from "../../components/imed-content"

    export default {
        components: {
            ImedContent
        },
        name: "reader",
        data() {
            return {
                "_id": "5b3f22206d4969e9a9487552",
                "title": "第一版块",
                "text": "消化系统",
                "content": [
                    {
                        "guide": [
                            {
                                "text": "执业医师考试——本版块约占临床执业医师考试的19.17%，出题量约为115道题目。其中消化性溃疡、肝硬化、急性胰腺炎、肠梗阻为考试重点，重在考查疾病特点和诊断，其中首选检查方法和首选治疗药物及处理为高频考点。"
                            }
                        ],
                        "content": [
                            {
                                "title": "第一章",
                                "text": "胃食管反流病",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "胃食管反流病"
                                                    },
                                                    {
                                                        "text": "1. 发病机制2. 临床表现3. 辅助检查4. 诊断5. 治疗与预防"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、发病机制",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "胃食管反流病是由多种因素造成的消化道动力障碍性疾病。胃食管反流病的主要发病机制是抗反流防御机制减弱（LES功能障碍）和反流物对食管黏膜攻击作用的结果。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 抗反流屏障结构与功能异常",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "主要为食管下括约肌（LES），指食管末端约3～4cm长的环形肌束。正常人静息时LES压为10～30mmHg，为一高压带，防止胃内容物反流入食管。当LES功能受损，且食管清除能力和黏膜屏障不足以抵抗反流物时，即可引起胃食管反流病。",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "使LES降低的因素"
                                                                            },
                                                                            {
                                                                                "text": "某些激素（如缩胆囊素、胰升糖素、血管活性肠肽等）、食物（如高脂肪、巧克力等）、药物（如钙拮抗剂、地西泮）等"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "使LES相对降低的因素"
                                                                            },
                                                                            {
                                                                                "text": "腹内压增高（如妊娠、腹水、呕吐、负重劳动等）及胃内压增高（如胃扩张、胃排空延迟等）"
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
                                                "type": "h2",
                                                "text": "2. 食管清除作用降低"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 食管黏膜屏障功能降低"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "食管症状"
                                                            },
                                                            {
                                                                "text": "1. 典型症状：烧心和反流；2. 非典型症状：胸痛、吞咽困难等"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "食管外症状"
                                                            },
                                                            {
                                                                "text": "咽喉炎、慢性咳嗽和哮喘等"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "并发症"
                                                            },
                                                            {
                                                                "text": "上消化道出血、食管狭窄食管炎、Barrett食管"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 食管症状",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）典型症状",
                                                        "text": "烧心和反流（反酸）是本病最常见的症状，而且具有特征性。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "title": "2. 非典型症状",
                                                "text": "如胸痛、吞咽困难等。胸痛由反流物刺激食管引起，疼痛发生在胸骨后。注意结合病史特点与心源性胸痛鉴别。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 食管外症状",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "由反流物刺激或损伤食管以外的组织或器官引起，如咽喉炎、慢性咳嗽和哮喘。一些患者诉咽部不适，有异物感、棉团感或堵塞感，但无真正吞咽困难，称为癔球症。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 并发症",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）上消化道出血；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）食管狭窄；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）Barrett食管。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "Barrett食管内镜下的表现为正常呈现均匀粉红带灰白的食管黏膜出现胃黏膜的橘红色，分布可为环形、舌形或岛状。Barrett食管是食管腺癌的癌前病变，其腺癌的发生率较正常人高30～50倍。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、辅助检查",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "内镜检查"
                                                            },
                                                            {
                                                                "text": "诊断反流性食管炎最准确的方法，结合活检可与其他原因引起的食管炎和其他食管病变（如食管癌等）作鉴别"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "24小时食管pH监测"
                                                            },
                                                            {
                                                                "text": "诊断胃食管反流病重要检查方法"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "食管吞钡X线检查"
                                                            },
                                                            {
                                                                "text": "其目的主要是排除食管癌等其他食管疾病"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "食管测压"
                                                            },
                                                            {
                                                                "text": "测定LES压力，评估食管功能，辅助诊断"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 有烧心、反酸症状；"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 内镜下可能有反流性食管炎的表现；"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 食管过度酸反流的客观证据。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、治疗与预防",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "胃食管反流病的治疗目的是控制症状、治愈食管炎、减少复发和防治并发症。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 一般治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "改变生活方式与饮食习惯。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 药物治疗",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "促胃肠动力药"
                                                                    },
                                                                    {
                                                                        "text": "如多潘立酮、莫沙必利、伊托必利等"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "抑酸药"
                                                                    },
                                                                    {
                                                                        "text": "1. H2受体拮抗剂：如西咪替丁、雷尼替丁、法莫替丁等。2. 质子泵抑制剂（proton pump inhibitor，PPI）：包括奥美拉唑、兰索拉唑、泮托拉唑、雷贝拉唑和埃索美拉唑等。这类药物抑酸作用强，因此对本病的疗效优于H2受体拮抗剂。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 维持治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "H<sub>2</sub>RA和PPI均可用于维持治疗，其中以PPI效果最好。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "4. 抗反流手术治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "抗反流手术是不同术式的胃底折叠术，目的是阻止胃内容反流入食管。抗反流手术的疗效与PPI相当，但术后有一定并发症。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 反酸、烧心是胃食管反流病最常见的症状，需牢记！"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 内镜检查是诊断反流性食管炎最准确的方法；24小时食管pH检测是诊断胃食管反流病重要的检查方法。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3. 胃、食管病变首选药物多为质子泵抑制剂（PPI），如奥美拉唑。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第二章",
                                "text": "食管癌",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "食管癌"
                                                    },
                                                    {
                                                        "text": "1. 病理2. 临床表现3. 诊断与鉴别诊断4. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病理",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "食管癌的病变部位以中段居多，下段次之，上段最少。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 病理形态分型",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "早期食管癌"
                                                                    },
                                                                    {
                                                                        "text": "隐伏型（充血型）、糜烂型、斑块型和乳头型。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "中晚期食管癌"
                                                                    },
                                                                    {
                                                                        "text": "髓质型、蕈伞型、溃疡型、缩窄型和未定型。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 组织学分类",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "我国约占90％为鳞状细胞癌。少数为腺癌（腺癌与Barrett食管恶变有关）。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 食管癌的扩散和转移方式",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "直接扩散"
                                                                    },
                                                                    {
                                                                        "text": "早中期食管癌主要为壁内扩散；因食管无浆膜层，容易直接侵犯其邻近器官"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "淋巴转移"
                                                                    },
                                                                    {
                                                                        "text": "食管癌转移的主要方式"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "血行转移"
                                                                    },
                                                                    {
                                                                        "text": "晚期血行转移至肝、肺、骨、肾、肾上腺、脑等处"
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
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "早期症状"
                                                            },
                                                            {
                                                                "text": "主要症状为胸骨后不适、烧灼感、针刺样或牵拉样痛，进食通过缓慢并有滞留的感觉或轻度哽噎感。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "中晚期症状"
                                                            },
                                                            {
                                                                "text": "1. 进行性吞咽困难：由不能咽下固体食物发展至液体食物亦不能咽下。2. 食物反流。3. 咽下疼痛。4. 其他症状：长期摄食不足导致明显的慢性脱水、营养不良、消瘦与恶病质。有左锁骨上淋巴结肿大等。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、实验室检查",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 食管黏膜脱落细胞学检查",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "主要用于食管癌高发区现场普查，可发现早期黏膜病变。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 内镜检查与活组织检查",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "是发现与诊断食管癌的首选检查方法。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 食管钡餐X线检查",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "早期征象：①黏膜皱襞增粗，迂曲及中断；②食管边缘毛刺状；③小充盈缺损与小龛影；④局限性管壁僵硬或有钡剂滞留。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "凡年龄在50岁以上（高发区在40岁以上），出现进食后胸骨后停滞感或咽下困难者，应及时做有关检查，以明确诊断。通过详细的病史询问、症状分析和实验室检查（如内镜检查与活组织检查）等，确诊一般无困难。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "需与食管贲门失弛缓症、胃食管反流病、食管良性狭窄等疾病相鉴别。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 手术治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "主要适用于中下段食管癌，心肺功能正常的患者。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 放射治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "主要适用于手术难度大的上段食管癌和不能切除的中、下段食管癌，以及心肺功能差不能耐受手术的患者。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 化疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "一般用于食管癌切除术后。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "4. 内镜介入治疗"
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 典型临床表现：进行性吞咽困难（哽噎停滞感）。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 食管癌和食管静脉曲张的钡餐特点对比理解记忆。（癌则乱，曲则曲）。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "食管癌"
                                                                    },
                                                                    {
                                                                        "text": "癌对组织破坏严重，所以黏膜紊乱、中断"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "食管静脉曲张"
                                                                    },
                                                                    {
                                                                        "text": "静脉曲张所以黏膜迂曲"
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
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3. 食管疾病好发部位：食管中段。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "4. 食管癌的治疗原则及适应证。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第三章",
                                "text": "胃、十二指肠解剖、生理",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "胃、十二指肠解剖、生理"
                                                    },
                                                    {
                                                        "text": "1. 胃的解剖与生理2. 十二指肠的解剖"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、胃的解剖与生理",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 胃的解剖",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）胃的位置和分区",
                                                        "text": "胃位于食管和十二指肠之间，上端与食管相连的入口部位称贲门，距离门齿约40cm，下端与十二指肠相连接的出口为幽门。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（2）胃的韧带",
                                                        "text": "胃与周围器官有韧带相连接，包括胃隔韧带、肝胃韧带、脾胃韧带、胃结肠韧带和胃胰韧带。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（3）胃的血管",
                                                        "text": "胃的动脉血供丰富，来源于腹腔动脉。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "胃幽门部环状肌增厚，浆膜面可见一环形浅沟，幽门前静脉沿此沟的腹侧面下行，是术中区分胃幽门与十二指肠的解剖标志。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（4）胃的淋巴引流",
                                                        "text": "胃黏膜下淋巴管网丰富，并经贲门与食管、经幽门与十二指肠交通。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（5）胃的神经",
                                                        "text": "胃受自主神经支配，支配胃的运动神经包括交感神经与副交感神经。交感神经为来自腹腔神经丛的节后纤维，和动脉分支伴行进入胃，主要抑制胃的分泌和运动并传出痛觉；副交感神经来自迷走神经，主要促进胃的分泌和运动。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（6）胃壁的结构",
                                                        "text": "胃壁从外向内分为浆膜层、肌层、黏膜下层和黏膜层。胃黏膜层由黏膜上皮、固有膜和黏膜肌构成。主细胞分泌胃蛋白酶原等物质，壁细胞分泌盐酸和内因子等物质。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 胃的生理",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "胃具有运动和分泌两大功能。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、十二指肠的解剖与生理",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "十二指肠是幽门和十二指肠悬韧带（Treitz韧带）之间的小肠，长约25 cm，呈C形，是小肠最粗和最固定的部分。十二指肠分为四部分：球部、降部、水平部、升部。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "十二指肠接受胃内食糜以及胆汁、胰液。十二指肠黏膜分泌的十二指肠液含有多种消化酶如蛋白酶、脂肪酶、蔗糖酶、麦芽糖酶等。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、常考相关概念：",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "小网膜将左肝下间隙分为左肝下前间隙和左肝下后间隙，左肝下后间隙又叫网膜囊。肝脏居膈下间隙，肝脏及其韧带将膈下区分为肝上和肝下间隙。肝上间隙被镰状韧带分为右肝上和左肝上间隙，前者又被右冠状韧带和右三角韧带分为右前肝上和右后肝上间隙。肝下间隙被肝圆韧带和静脉韧带分为右肝下和左肝下间隙，后者又被肝胃韧带分为左前肝下和左后肝下间隙。这些间隙加上肝后上部冠状韧带前后叶之间的肝裸区，具有重要的临床意义，其中右肝上和右肝下间隙为肝脏手术后膈下脓肿的好发部位。"
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 主细胞（胃酶细胞）分泌胃蛋白酶原。记忆：主媒（酶）。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 壁细胞（泌酸细胞）分泌盐酸和内因子等物质。（对比记忆）。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第四章",
                                "text": "急性胃炎",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "急性胃炎"
                                                    },
                                                    {
                                                        "text": "1. 病因和发病机制2. 临床表现3. 诊断4. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因和发病机制",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "病因"
                                                            },
                                                            {
                                                                "text": "发病机制"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "药物（如阿司匹林、口服氯化钾）"
                                                            },
                                                            {
                                                                "text": "直接损伤胃黏膜上皮层非甾体抗炎药（NSAID）还通过抑制环氧合酶的作用"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "应激"
                                                            },
                                                            {
                                                                "text": "严重创伤、大手术、大面积烧伤、颅内病变、多器官功能衰竭均可引起胃黏膜糜烂、出血。烧伤所致者称Curling溃疡（黏膜缺血、缺氧）；中枢神经系统病变所致者称Cushing溃疡"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "乙醇"
                                                            },
                                                            {
                                                                "text": "直接破坏胃黏膜屏障"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "多以突然发生呕血和（或）黑粪的上消化道出血症状而就诊。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "有近期服用NSAID史、严重疾病状态或大量饮酒患者，如发生呕血和（或）黑便，应考虑急性糜烂出血性胃炎的可能，确诊有赖急诊胃镜检查。内镜可见弥漫分布的胃黏膜多发性糜烂、出血灶和浅表溃疡。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "去除病因，积极治疗原发病和创伤。常用质子泵抑制剂PPI、H2RA及胃黏膜保护剂促进胃黏膜修复和止血。其中首选质子泵抑制剂PPI（如奥美拉唑）。"
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 急性糜烂出血性胃炎诊断要点： 服用非甾体类药物史、严重疾病或大量饮酒后突然出现呕血或黑便、上腹部不适。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. Cushing溃疡——Cushing——shing——shenjing（神经）——中枢神经系统病变所致；Curling溃疡——rl——rulu（入炉） ——烧伤所致。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3. 药物治疗首选质子泵抑制剂PPI（如奥美拉唑）。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第五章",
                                "text": "慢性胃炎",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "慢性胃炎"
                                                    },
                                                    {
                                                        "text": "1. 病因和发病机制2. 临床表现3. 辅助检查4. 诊断5. 治疗"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "胃炎是由各种病因引起的胃黏膜慢性炎症。根据病理组织学改变，将慢性胃炎分为：慢性萎缩性胃炎、慢性非萎缩性胃炎和特殊类型胃炎。慢性萎缩性胃炎又可分为多灶萎缩性胃炎和自身免疫性胃炎。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因和发病机制",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "病因"
                                                            },
                                                            {
                                                                "text": "发病机制"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "幽门螺杆菌感染"
                                                            },
                                                            {
                                                                "text": "通过产氨作用、分泌空泡毒素A（Vac A）等物质而引起细胞损害，最常见因素。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "十二指肠-胃反流"
                                                            },
                                                            {
                                                                "text": "胃肠慢性炎症、消化不良及动力异常所致。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "自身免疫"
                                                            },
                                                            {
                                                                "text": "自身免疫性胃炎以富含壁细胞的胃体黏膜萎缩为主；患者血液中存在自身抗体如壁细胞抗体伴恶性贫血者还可查到内因子抗体。内因子抗体与内因子结合，阻碍维生素B12吸收不良从而导致恶性贫血。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "年龄因素和胃黏膜营养因子缺乏"
                                                            },
                                                            {
                                                                "text": "长期消化吸收不良，食物单一、营养缺乏均可使胃黏膜修复能力下降；老年人胃黏膜退行性改变。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "由幽门螺杆菌引起的慢性胃炎"
                                                            },
                                                            {
                                                                "text": "多数患者无症状；有症状者表现为上腹痛或不适、上腹胀、早饱、嗳气、恶心等消化不良症状"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "自身免疫性胃炎"
                                                            },
                                                            {
                                                                "text": "可伴有贫血，在典型恶性贫血时除贫血外还可伴有维生素B12缺乏的其他临床表现"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、辅助检查",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 胃镜及活组织检查",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "胃镜检查并同时取活组织作病理组织学检查是诊断慢性胃炎的最可靠方法。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "内镜下非萎缩性胃炎可见红斑（点、片状或条状）、黏膜粗糙不平、出血点/斑、黏膜水肿、渗出等基本表现。",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "内镜下萎缩性胃炎有两种类型，即单纯萎缩性胃炎和萎缩性胃炎伴增生。前者主要表现为黏膜红白相间/白相为主、血管显露、色泽灰暗、皱襞变平甚至消失；后者主要表现为黏膜呈颗粒状或结节状。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 幽门螺杆菌检测。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 血清抗壁细胞抗体、内因子抗体及维生素B12水平测定，有助于诊断自身免疫性胃炎。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "确诊必须依靠胃镜检查及胃黏膜活组织病理学检查。幽门螺杆菌检测有助于病因诊断。怀疑自身免疫性胃炎应检测相关自身抗体。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 对因治疗",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "幽门螺杆菌（Hp）相关胃炎"
                                                                    },
                                                                    {
                                                                        "text": "根除幽螺杆菌方案：1种PPI+2种抗生素或1种铋剂+2种抗生素，疗程7～14天"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "十二指肠-胃反流"
                                                                    },
                                                                    {
                                                                        "text": "助消化、促胃肠动力药物"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "自身免疫"
                                                                    },
                                                                    {
                                                                        "text": "可考虑使用糖皮质激素"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胃黏膜营养因子缺乏"
                                                                    },
                                                                    {
                                                                        "text": "补充复合维生素，改善胃肠营养"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 对症治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "    中和胃酸（PPI/H2RA）、胃黏膜保护剂，恶性贫血者终生注射维生素B<sub>12</sub>。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. A、B型胃炎的比较：",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": ""
                                                                    },
                                                                    {
                                                                        "text": "A型胃炎"
                                                                    },
                                                                    {
                                                                        "text": "B型胃炎"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "别名"
                                                                    },
                                                                    {
                                                                        "text": "自身免疫性胃炎、慢性胃体炎"
                                                                    },
                                                                    {
                                                                        "text": "慢性多灶萎缩性胃炎，慢性胃窦炎"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "受累部位"
                                                                    },
                                                                    {
                                                                        "text": "胃底、胃体"
                                                                    },
                                                                    {
                                                                        "text": "胃窦"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "病因"
                                                                    },
                                                                    {
                                                                        "text": "多为自身免疫"
                                                                    },
                                                                    {
                                                                        "text": "多为幽门螺杆菌感染"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "内因子、壁细胞抗体"
                                                                    },
                                                                    {
                                                                        "text": "多为阳性"
                                                                    },
                                                                    {
                                                                        "text": "多为阴性"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "贫血"
                                                                    },
                                                                    {
                                                                        "text": "多见"
                                                                    },
                                                                    {
                                                                        "text": "无"
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
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "记忆：①A为Anti（抗）的首字母，所以A型胃炎多种抗体阳性，内因子抗体阳性，内因子少，致贫血。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "      ②字母顺序为A→B，食物在胃中流动顺序为胃体→胃窦，所以A型胃炎对应慢性胃体炎；B型胃炎对应慢性胃窦炎。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 慢性萎缩性胃炎的内镜表现。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第六章",
                                "text": "功能性消化不良",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "功能性消化不良"
                                                    },
                                                    {
                                                        "text": "1. 临床表现2. 诊断与鉴别诊断3. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "主要症状包括上腹痛、上腹灼热感、餐后饱胀和早饱之一种或多种，起病多缓慢，病程经年累月，呈持续或反复发作，不少患者有饮食、精神等诱发因素。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 上腹痛",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "为常见症状，常与进食有关，表现为餐后痛，亦可表现为饥饿痛、进食后缓解，亦可无规律性。部分患者为上腹灼热感。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 餐后饱胀和早饱",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "与进食密切相关。餐后饱胀是指正常餐量即出现饱胀感。早饱是指有饥饿感但进食后不久即有饱感。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断标准",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）有上腹痛、上腹灼热感、餐后饱胀和早饱症状之一种或多种，呈持续或反复发作的慢性过程（罗马Ⅲ标准规定病程超过半年，近3个月来症状持续）；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）上述症状排便后不能缓解（排除症状由肠易激综合征所致）；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）排除可解释症状的器质性疾病。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "诊断程序：45岁以上，有“报警症状和体征”者（指近期消瘦、贫血、呕血、黑便、吞咽困难、腹部肿块、黄疸），必须行全面检查直至找到病因。45岁以下，且无“报警症状和体征”者，可选择基本的实验室检查和胃镜检查。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "需要鉴别的疾病包括：食管、胃和十二指肠的各种器质性疾病如消化性溃疡、胃癌等；各种肝胆胰疾病；由全身性或其他系统疾病引起的上消化道症状如糖尿病、肾脏病、结缔组织病及精神病等；药物引起的上消化道症状如服用非甾体类消炎药；其他功能性胃肠病和动力障碍性疾病如胃食管反流病、肠易激综合征等。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 一般治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "建立良好的生活习惯，避免烟、酒及服用非甾体抗炎药。注意根据患者不同特点进行心理治疗。失眠、焦虑者可适当予以镇静药。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 药物治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "无特效药，主要是经验性治疗。Eg：抑制胃酸分泌药、促胃肠动力药、有幽门螺杆据感染的患者可行根除幽门螺杆菌治疗、抗抑郁药"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "了解"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第七章",
                                "text": "消化性溃疡",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "消化性溃疡"
                                                    },
                                                    {
                                                        "text": "1. 概述2. 病因和发病机制3. 临床表现4. 辅助检查5. 诊断与鉴别诊断6. 并发症7. 非手术治疗8. 手术治疗的理论基础9. 手术适应证10. 主要手术目的、方法及术后并发症11. 急性穿孔的诊断、治疗、手术指征12. 瘢痕性幽门梗阻的临床表现、诊断、治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、概述",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "消化性溃疡指胃肠道黏膜被自身消化而形成的溃疡，可发生于食管、胃、十二指肠、胃-空肠吻合口附近及含有胃黏膜的Meckel憩室。胃、十二指肠溃疡最常见。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、病因和发病机制",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "病因"
                                                            },
                                                            {
                                                                "text": "发病机制"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "幽门螺杆菌感染"
                                                            },
                                                            {
                                                                "text": "最主要的病因"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "药物"
                                                            },
                                                            {
                                                                "text": "长期服用非甾体抗炎药（NSAID）、糖皮质激素、氯吡格雷等NSAID是胃黏膜损伤最常用药物：①局部作用：直接损伤胃黏膜上皮层，②系统作用：还通过抑制环氧合酶（COX）的作用（主要机制）"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "遗传易感性"
                                                            },
                                                            {
                                                                "text": "部分患者有该病家族史"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "胃排空障碍"
                                                            },
                                                            {
                                                                "text": "十二指肠-胃反流可导致胃黏膜损伤"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "其他因素"
                                                            },
                                                            {
                                                                "text": "吸烟、急性应激、进食无规律等"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "common",
                                                        "text": "胃溃疡发病机制以黏膜屏障功能降低为主要机制，十二指肠球部溃疡则以高胃酸分泌起主导作用。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "典型的消化性溃疡有如下临床特点：①慢性病程，病史可达数年或数十年；②周期性发作，发作常有季节性，多在秋冬或冬春之交发作；③发作时上腹痛呈节律性。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 症状",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "上腹痛为主要症状，性质多为灼痛，亦可为钝痛、胀痛、剧痛或饥饿样不适感。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "胃溃疡多表现为餐后痛；十二直肠溃疡多表现为饥饿痛或午夜痛。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 体征",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "溃疡活动时上腹部可有局限性轻压痛，缓解期无明显体征。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、辅助检查",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 胃镜及黏膜活检",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "胃镜是确诊消化性溃疡首选的检查方法。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. X线钡餐检查",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "适用于对胃镜检查有禁忌或不愿接受胃镜检查者。溃疡的X线征象：龛影是直接征象，对溃疡有确诊价值；局部压痛、十二指肠球部激惹和球部畸形、胃大弯侧痉挛性切迹均为间接征象，仅提示可能有溃疡。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 幽门螺杆菌检测（有消化性溃疡病史均应检测Hp）",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "侵入性检查"
                                                                    },
                                                                    {
                                                                        "text": "需通过胃镜检查取胃黏膜活组织进行检测，主要包括快速尿素酶试验（首选）、组织学检查和幽门螺杆菌培养。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "非侵入性检查"
                                                                    },
                                                                    {
                                                                        "text": "13C或14C尿素呼气试验、粪便幽门螺杆菌抗原检测及血清学检查（定性检测血清抗幽门螺杆菌IgG抗体）。13C或14C尿素呼气试验检测幽门螺杆菌敏感性及特异性高，可作为根治治疗后复查的首选。"
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
                                        "type": "h1",
                                        "text": "五、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "慢性病程、周期性发作的节律性上腹疼痛是疑诊消化性溃疡的重要病史，胃镜可以确诊，不能接受胃镜，X线钡餐发现龛影，可以诊断溃疡。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "其他引起慢性上腹痛疾病"
                                                                    },
                                                                    {
                                                                        "text": "肝胆胰疾病、慢性胃炎、功能性消化不良等"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胃癌"
                                                                    },
                                                                    {
                                                                        "text": "内镜特点：胃癌溃疡形态多不规则，底部凹凸不平、覆污秽状苔，周围皱襞中断，胃壁僵硬、蠕动减弱。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Zollinger-Ellison综合征"
                                                                    },
                                                                    {
                                                                        "text": "当溃疡治疗效果差、病理排除胃癌时，应考虑该综合征，该综合征由促胃液素瘤或促胃液素细胞增生所致"
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
                                        "type": "h1",
                                        "text": "六、并发症",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "并发症"
                                                            },
                                                            {
                                                                "text": "特点"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "出血"
                                                            },
                                                            {
                                                                "text": "最常见并发症，也是上消化道大出血中最常见的原因，表现为：呕血、黑便、贫血、恶心、心慌（周围循环衰竭）、氮质血症等。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "穿孔"
                                                            },
                                                            {
                                                                "text": "常位于十二指肠前壁或胃前壁；肝浊音界消失，腹部立位平片示：膈下新月形游离气体。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "幽门梗阻"
                                                            },
                                                            {
                                                                "text": "呕吐宿食，低钾低氯性碱中毒（呕吐后，钾、氯、酸大量丢失，可推导易碱中毒），振水音阳性。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "癌变"
                                                            },
                                                            {
                                                                "text": "少数胃溃疡可发生癌变，十二指肠溃疡则否。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "七、非手术治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "治疗的目的是消除病因、缓解症状、愈合溃疡、防止复发和防治并发症。针对病因的治疗如根除幽门螺杆菌，有可能彻底治愈溃疡病。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 药物治疗",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）抑制胃酸药物 （疗程4～6周，部分患者8周，根除幽门螺杆菌的疗程可重叠在其中或抑酸治疗结束后）",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "药物分类"
                                                                            },
                                                                            {
                                                                                "text": "质子泵抑制药PPI"
                                                                            },
                                                                            {
                                                                                "text": "H2受体阻断药"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "代表药"
                                                                            },
                                                                            {
                                                                                "text": "奥美拉唑"
                                                                            },
                                                                            {
                                                                                "text": "法莫替丁"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "作用机制"
                                                                            },
                                                                            {
                                                                                "text": "抑制胃酸和胃蛋白酶分泌"
                                                                            },
                                                                            {
                                                                                "text": "阻断H2受体，减少胃酸分泌"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）根除幽门螺杆菌的治疗方案 ",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "PPI或胶体铋为基础加上两种抗生素的三联治疗方案有较高根除率。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 患者教育",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "生活要有规律，避免过度劳累和精神紧张。注意饮食规律，戒烟、酒。服用NSAID者尽可能停用，即使未用亦要告诫患者今后慎用。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 维持治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "    消化性溃疡愈合后，大多患者可以停药。但对反复溃疡发作、Hp阴性及已去除其他危险因素者可给予维持治疗。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "八、手术治疗的理论基础",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "胃大部切除治疗胃十二指肠溃疡的原理：①切除了大部分胃，因壁细胞和主细胞数量减少，使得胃酸和胃蛋白酶分泌大为减少；②切除胃窦部，减少G细胞分泌胃泌素所引起的胃酸分泌；③切除溃疡本身及溃疡的好发部位。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "九、手术适应证",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 胃溃疡的手术适应证",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）包括抗HP措施在内的严格内科治疗无效的顽固性溃疡，如溃疡不愈合或短期内复发者；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）发生溃疡出血、瘢痕性幽门梗阻、溃疡穿孔及溃疡穿透至胃壁外者；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）溃疡巨大（直径>2.5 cm）或高位溃疡；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4）胃十二指肠复合性溃疡；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（5）溃疡不能除外恶变或已经恶变者。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 十二指肠溃疡的手术适应证",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）出现严重并发症:急性穿孔、大出血和瘢痕性幽门梗阻；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）经正规内科治疗无效的顽固性溃疡，由于药物治疗的有效性。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "十、主要手术目的、方法",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "胃大部切除术",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "胃的切除范围胃大部切除范围是胃的远侧2/3～3/4，包括胃体的远侧部分、胃窦部、幽门和十二指肠球部的近胃部分。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "胃大部切除后胃肠道重建基本方式是胃十二指肠吻合或胃空肠吻合。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）毕（Billroth） Ⅰ式胃大部切除术",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "远端胃大部切除后，将残胃与十二指肠吻合。优点是吻合后的胃肠道接近于正常解剖生理状态，食物经吻合口进入十二指肠，减少胆汁胰液反流人残胃，术后因胃肠功能紊乱而引起的并发症较少。胃溃疡多采用毕（Billroth）Ⅰ式胃大部切除术。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）毕（Billroth） Ⅱ式胃大部切除术",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "切除远端胃后，缝合关闭十二指肠残端，残胃和上端空肠端侧吻合。优点是即使胃切除较多，胃空肠吻合也不致张力过大，术后溃疡复发率低；十二指肠溃疡切除困难时允许行溃疡旷置。十二指肠溃疡多采用毕（Billroth） Ⅱ式胃大部切除术。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "十一、术后并发症",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "早期并发症",
                                                                "rowSpan": 5
                                                            },
                                                            {
                                                                "text": "术后胃出血"
                                                            },
                                                            {
                                                                "text": "术后不断吸出新鲜血液，24小时后仍未停止，则为术后出血"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "胃排空障碍"
                                                            },
                                                            {
                                                                "text": "病人出现上腹持续性饱胀、钝痛，并呕吐带有食物和胆汁的胃液"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "胃壁缺血坏死、吻合口破裂或瘘"
                                                            },
                                                            {
                                                                "text": "吻合口破裂或瘘常在术后一周左右发生。病人有高热、脉速、腹痛以及弥漫性腹膜炎的表现"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "十二指肠残端破裂"
                                                            },
                                                            {
                                                                "text": "突发上腹部剧痛，发热、腹膜刺激征以及白细胞计数增加，腹腔穿刺可有胆汁样液体"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "术后梗阻"
                                                            },
                                                            {
                                                                "text": "包括吻合口梗阻和输入袢、输出袢梗阻，后两者见于毕Ⅱ式胃大部切除术后"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "晚期并发症",
                                                                "rowSpan": 5
                                                            },
                                                            {
                                                                "text": "碱性反流性胃炎"
                                                            },
                                                            {
                                                                "text": "多在胃切除手术或迷走神经切断加胃引流术后数月至数年发生"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "倾倒综合征"
                                                            },
                                                            {
                                                                "text": "早期倾倒综合征：发生在进食后半小时内；晚期倾倒综合征：在餐后2～4小时出现症状"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "溃疡复发"
                                                            },
                                                            {
                                                                "text": "溃疡病症状再现，有腹痛及出血"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "营养性并发症"
                                                            },
                                                            {
                                                                "text": "胃容量减少，体重减轻、营养不良；内因子不足，壁细胞生成的铁与维生素B12吸收障碍，可引起贫血"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "迷走神经切断术后腹泻"
                                                            },
                                                            {
                                                                "text": "腹泻是迷走神经切断术后的常见并发症，以迷走神经干切断术后最为严重多见"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "残胃癌"
                                                            },
                                                            {
                                                                "text": "胃十二指肠溃疡病人行胃大部切除术后5年以上，残余胃发生的原发癌称残胃癌"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "十二、急性穿孔的诊断、治疗、手术指征",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "既往有溃疡病史，突发上腹部剧烈疼痛并迅速扩展为全腹疼痛，查体：板状腹，腹膜刺激征，肝浊音界消失。结合X线检查腹部发现膈下游离气体，可以确定诊断。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 治疗及手术指征",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）非手术治疗",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "1）持续胃肠减压，减少胃肠内容物继续外漏；",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "2）输液以维持水、电解质平衡并给予营养支持；",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "3）全身应用抗生素控制感染；",
                                                                                "content": [
                                                                                    {
                                                                                        "type": "common",
                                                                                        "text": "4）④经静脉给予H受体阻断剂或质子泵拮抗剂等制酸药物。"
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
                                                        "type": "h3",
                                                        "text": "（2）手术治疗及手术指征",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "手术方式"
                                                                            },
                                                                            {
                                                                                "text": "手术指征"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "单纯穿孔缝合术"
                                                                            },
                                                                            {
                                                                                "text": "穿孔时间超出8小时，腹腔内感染及炎症水肿严重，有大量脓性渗出液；以往无溃疡病史或有溃疡病史未经正规内科治疗，无出血、梗阻并发症，特别是十二指肠溃疡病人；有其他系统器质性疾病不能耐受急诊彻底性溃疡手术"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "彻底性溃疡手术"
                                                                            },
                                                                            {
                                                                                "text": "病人一般情况良好，穿孔在8小时内或超过8小时，腹腔污染不严重；慢性溃疡病特别是胃溃疡病人，曾行内科治疗，或治疗期间穿孔；十二指肠溃疡穿孔修补术后再穿孔，有幽门梗阻或出血史者"
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
                                        "type": "h1",
                                        "text": "十三、瘢痕性幽门梗阻的临床表现、诊断、治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 临床表现",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "症状",
                                                                        "rowSpan": 2
                                                                    },
                                                                    {
                                                                        "text": "腹痛"
                                                                    },
                                                                    {
                                                                        "text": "最初有上腹膨胀不适并出现阵发性胃收缩痛。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "反复发作的呕吐"
                                                                    },
                                                                    {
                                                                        "text": "呕吐多发生在下午或晚间，呕吐量大，含大量宿食，有腐败酸臭味。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "体征"
                                                                    },
                                                                    {
                                                                        "text": "胃型，有时有自左向右的胃蠕动波；振水音阳性。",
                                                                        "colSpan": 2
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "根据长期溃疡病史，特征性呕吐和体征，即可诊断幽门梗阻。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "瘢痕性梗阻是外科手术治疗的绝对适应证。手术目的在于解除梗阻，消除病因。术式以胃大部切除为主，也可行迷走神经干切断术加胃窦部切除术。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 消化道溃疡的鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "消化性溃疡类型"
                                                                    },
                                                                    {
                                                                        "text": "腹痛特点"
                                                                    },
                                                                    {
                                                                        "text": "并发症"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胃溃疡"
                                                                    },
                                                                    {
                                                                        "text": "餐后痛"
                                                                    },
                                                                    {
                                                                        "text": "出血（最常见）、穿孔、梗阻、癌变"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "十二指肠溃疡"
                                                                    },
                                                                    {
                                                                        "text": "饥饿痛、夜间痛"
                                                                    },
                                                                    {
                                                                        "text": "出血（最常见）、穿孔、梗阻"
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
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "记忆：①胃溃疡餐后痛的记忆：餐后（分泌胃酸）首先刺激胃。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "②十二溃疡夜间痛的记忆：饥饿痛，空腹痛，夜晚属饥饿和空腹，可推导。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 消化性溃疡最常见的并发症是出血。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3. 消化性溃疡合并穿孔的诊断：既往有溃疡病史，突发上腹部剧烈疼痛并迅速扩展为全腹疼痛，查体：板状腹，腹膜刺激症，肝浊音界消失。结合X线检查腹部发现隔下游离气体。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "4. 胃大部切除术的并发症。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第八章",
                                "text": "胃癌",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "胃癌"
                                                    },
                                                    {
                                                        "text": "1. 病因2. 病理3. 临床表现与诊断4. 诊断5. 治疗与预防"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "环境和饮食因素"
                                                            },
                                                            {
                                                                "text": "我国的西北与东部沿海地区胃癌发病率比南方地区明显为高；熏烤、盐腌食品（亚硝酸盘、真菌毒素、多环芳烃化合物），吸烟"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "幽门螺杆菌感染"
                                                            },
                                                            {
                                                                "text": "促使硝酸盐转化成亚硝酸盐及亚硝胺，炎症，毒性产物"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "癌前变化"
                                                            },
                                                            {
                                                                "text": "癌前疾病和癌前病变"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "遗传和基因"
                                                            },
                                                            {
                                                                "text": "胃癌家族发病高于普通人群2～3倍"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "common",
                                                        "text": "胃癌的癌前状态分为癌前疾病和癌前病变，癌前疾病是指与胃癌相关的胃良性疾病，有发生胃癌的危险性，癌前病变是指较易转变为癌组织的病理学变化。",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "癌前疾病"
                                                                            },
                                                                            {
                                                                                "text": "慢性萎缩性胃炎；2. 胃息肉；3. 胃溃疡；4. 残胃炎。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "癌前病变"
                                                                            },
                                                                            {
                                                                                "text": "肠型化生；2. 异型增生。"
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
                                        "type": "h1",
                                        "text": "二、病理",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 大体类型",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "早期胃癌"
                                                                    },
                                                                    {
                                                                        "text": "指病变仅限于黏膜或黏膜下层，不论病灶大小或有无淋巴结转移。（癌灶直径在10mm以下称小胃癌，5mm以下为微小胃癌）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "进展期胃癌"
                                                                    },
                                                                    {
                                                                        "text": "指癌组织浸润深度超过黏膜下层的胃癌"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "type": "common",
                                                                "text": "进展期胃癌的Borrmann分型法分为：",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "Ⅰ型（息肉型，也叫肿块型）：边界清楚突入胃腔的块状癌灶；",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "Ⅱ型（溃疡局限型）：边界清楚并略隆起的溃疡状癌灶；",
                                                                                "content": [
                                                                                    {
                                                                                        "type": "common",
                                                                                        "text": "Ⅲ型（溃疡浸润型）：边界模糊不清的溃疡，癌灶向周围浸润；",
                                                                                        "content": [
                                                                                            {
                                                                                                "type": "common",
                                                                                                "text": "Ⅳ型（弥漫浸润型）：癌肿沿胃壁各层全周性浸润生长，边界不清。若受累胃腔缩窄、胃壁僵硬如皮革囊状，称皮革胃，恶性程度极高，发生转移早。"
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
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 组织类型：WHO 2000年将胃癌分为：①腺癌（肠型和弥漫型）；②乳头状腺癌；③管状腺癌；④粘液腺癌；⑤印戒细胞癌；⑥腺鳞癌；⑦鳞状细胞癌；⑧小细胞癌；⑨未分化癌；⑩其他。胃癌绝大部分为腺癌。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 胃癌的扩散与转移",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "直接蔓延"
                                                                    },
                                                                    {
                                                                        "text": "侵袭至相邻器官"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "血行转移"
                                                                    },
                                                                    {
                                                                        "text": "晚期患者可占60％以上，最常转移到肝脏"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "种植转移"
                                                                    },
                                                                    {
                                                                        "text": "种植于肠壁和盆腔，如种植于卵巢，称为Krukenberg瘤"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "淋巴转移"
                                                                    },
                                                                    {
                                                                        "text": "主要转移途径，早期即可发生。转移到左锁骨上淋巴结时称为Virchow淋巴结"
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
                                        "type": "h1",
                                        "text": "三、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "早期胃癌"
                                                            },
                                                            {
                                                                "text": "多数病人无明显症状或非特异性症状。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "进展期胃癌"
                                                            },
                                                            {
                                                                "text": "疼痛与体重减轻，上腹不适、进食后饱胀。晚期胃癌病人常可出现贫血、消瘦、营养不良甚至恶病质等表现。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 常用检查",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "纤维胃镜检查（最有意义）、X线钡餐检查、腹部超声、螺旋CT和与正电子发射成像检查（PET）。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 早期筛查",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "有胃癌家族史或原有胃病史的人群定期检查；40岁以上有上消化道症状而无胆道疾病者；原因不明的消化道慢性失血者；短期内体重明显减轻，食欲不振者。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、治疗和预防",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 手术治疗",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "根治性手术"
                                                                    },
                                                                    {
                                                                        "text": "整块切除（胃壁的切线必须距肿瘤边缘5 cm以上；十二指肠侧或食管侧的切线应距离幽门或贲门3～4 cm）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "姑息性手术"
                                                                    },
                                                                    {
                                                                        "text": "原发灶无法切除，为了减轻梗阻、穿孔、出血等并发症"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 化疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "用于根治性手术的术前、术中和术后，延长生存期。早期胃癌根治术后原则上不必辅助化疗，有下列情况者应行辅助化疗：病理类型恶性程度高；癌灶面积大5 cm<sup>2</sup>；多发癌灶；年龄低于40岁。进展期一胃癌根治术后、姑息手术后、根治术后复发者需要化疗。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 其他治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "包括放疗、热疗、免疫治疗、靶向治疗、中医中药治疗等。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、肝脏的解剖结构",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "肝是人体内最大的实质性脏器。根据肝内血管、胆管的分布规律，将肝分为左、右两半。左、右半肝又分成左外叶、左内叶、右前叶、右后叶和尾状叶；左外叶和右后叶又分成上、下二段，尾状叶也分成左、右二段。肝脏有以下结构：",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "韧带"
                                                                    },
                                                                    {
                                                                        "text": "肝的隔面和前面分别有左、右三角韧带、冠状韧带、镰状韧带和肝圆韧带，使其与膈肌及前腹壁固定；脏面有肝胃韧带和肝十二指肠韧带，内有肝蒂。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肝蒂"
                                                                    },
                                                                    {
                                                                        "text": "肝胃韧带和肝十二指肠韧带内，包括门静脉、肝动脉、淋巴管、淋巴结和神经。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "第一肝门"
                                                                    },
                                                                    {
                                                                        "text": "门静脉、肝动脉和肝总管在肝脏面横沟各自分出左、右干进入肝实质内，称第一肝门。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Glisson纤维鞘"
                                                                    },
                                                                    {
                                                                        "text": "在肝实质内，由于门静脉、肝动脉和肝胆管的管道分布大体上相一致，且共同被包裹在Glisson纤维鞘内。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "第二肝门"
                                                                    },
                                                                    {
                                                                        "text": "肝静脉是肝血液的流出管道，三条主要的肝静脉在肝后上方的静脉窝进入下腔静脉，称第二肝门。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "第三肝门"
                                                                    },
                                                                    {
                                                                        "text": "肝有小部分血液经数支肝短静脉流人肝后方的下腔静脉，又称第三肝门。"
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
                                        "type": "h1",
                                        "text": "二、肝脏的血供",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "肝的血液供应25%~30%来自肝动脉，70%~75%来自门静脉。但由于肝动脉压力",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "大，其血液的含氧量高，所以它供给肝所需氧量的40%~60%。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、门静脉：门静脉由肠系膜上、下静脉和脾静脉汇合而成，其中约20%的血液来自于脾。"
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1.胃癌的转移，最常考的是种植性转移（如Krukenberg瘤）和淋巴结转移（如Virchow淋巴结）。有关淋巴结转移，总结记忆如下：",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "癌症名称"
                                                                    },
                                                                    {
                                                                        "text": "易转移淋巴结部位"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胃癌"
                                                                    },
                                                                    {
                                                                        "text": "左锁骨上淋巴结（Virchow淋巴结）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肺癌"
                                                                    },
                                                                    {
                                                                        "text": "右锁骨上淋巴结"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "乳腺癌"
                                                                    },
                                                                    {
                                                                        "text": "腋窝淋巴结"
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
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "记忆：就近原则，胃大部分在左边，所以易转移到左锁骨上淋巴结。胃癌与肺癌的易转移淋巴结进行对比记忆。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2.早期胃癌是指病变仅限于黏膜或黏膜下层，不论病灶大小或有无淋巴结转移。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "\n",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "第九章 肝脏的解剖",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "考纲要求"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "肝脏的解剖"
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
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 肝蒂的概念"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 肝脏的血供。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第十章",
                                "text": "肝硬化",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "肝硬化"
                                                    },
                                                    {
                                                        "text": "1. 病因和发病机制2. 临床表现3. 辅助检查4. 诊断与鉴别诊断5. 并发症6. 治疗与预防"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因和发病机制",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 病因",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "引起肝硬化病因很多，在我国以病毒性肝炎为主，欧美国家以慢性酒精中毒多见。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 发病机制",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "各种因素导致肝细胞损伤，发生变性坏死，进而肝细胞再生和纤维结缔组织增生（形成假小叶），肝纤维化形成，最终发展为肝硬化。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "代偿期肝硬化"
                                                            },
                                                            {
                                                                "text": "可无症状或症状轻微，可有乏力、食欲减退、腹胀不适等。可有肝脾肿大。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "失代偿期肝硬化"
                                                            },
                                                            {
                                                                "text": "症状明显，主要有肝功能减退和门静脉高压两类临床表现。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 症状",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "全身症状"
                                                                    },
                                                                    {
                                                                        "text": "乏力为早期症状，体重下降往往随病情进展而逐渐明显。少数患者有不规则低热，与肝细胞坏死有关，但注意与合并感染、肝癌鉴别。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "消化道症状"
                                                                    },
                                                                    {
                                                                        "text": "食欲不振为常见症状，可有恶心、偶伴呕吐。腹胀亦常见。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "出血倾向"
                                                                    },
                                                                    {
                                                                        "text": "主要与肝脏合成凝血因子减少及脾功能亢进所致血小板减少有关。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "与内分泌紊乱有关的症状"
                                                                    },
                                                                    {
                                                                        "text": "男性可有性功能减退、男性乳房发育：女性可发生闭经、不孕。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "门静脉高压症状"
                                                                    },
                                                                    {
                                                                        "text": "如食管胃底静脉曲张破裂而致上消化道出血时；脾功能亢进可致血细胞三系减少；发生腹水时腹胀更为突出。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 体征",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肝病病容"
                                                                    },
                                                                    {
                                                                        "text": "面色黝黑而无光泽"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "蜘蛛痣、肝掌、男性乳房发育"
                                                                    },
                                                                    {
                                                                        "text": "雌激素灭活障碍"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹壁静脉以脐为中心显露至曲张"
                                                                    },
                                                                    {
                                                                        "text": "门脉高压"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "黄疸"
                                                                    },
                                                                    {
                                                                        "text": "提示肝功能储备已明显减退"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹水"
                                                                    },
                                                                    {
                                                                        "text": "是失代偿期肝硬化最常见表现"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 肝硬化腹水形成的机制",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）门静脉压力升高",
                                                        "text": "门静脉高压时肝窦压升高，大量液体进入Disse间隙，造成肝脏淋巴液生成增加，当超过胸导管引流能力时，淋巴液直接漏入腹腔形成腹水。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）血浆胶体渗透压下降 肝脏合成白蛋白能力下降而发生低蛋白血症，血浆胶体渗透压下降，至部分液体进入腹腔形成腹水。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（3）有效血容量不足",
                                                        "text": "肝硬化时机体有效血容量下降，从而激活交感神经系统、肾素-血管紧张素-醛固酮系统，导致水钠潴留。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（4）其他因素",
                                                        "text": "心房钠尿肽相对不足、抗利尿激素分泌增加可能与水钠潴留有关。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、辅助检查",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "血常规"
                                                            },
                                                            {
                                                                "text": "脾功能亢进时白细胞、红细胞和血小板计数减少"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "转氨酶"
                                                            },
                                                            {
                                                                "text": "升高与肝脏炎症、坏死相关"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "蛋白代谢"
                                                            },
                                                            {
                                                                "text": "血清白蛋白下降、球蛋白升高，A/G倒置"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "凝血酶原时间"
                                                            },
                                                            {
                                                                "text": "不同程度延长，且不能为注射维生素K纠正"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "胆红素代谢"
                                                            },
                                                            {
                                                                "text": "结合胆红素及非结合胆红素均升高，仍以结合胆红素升高为主"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹部超声检查"
                                                            },
                                                            {
                                                                "text": "可提示肝硬化，但不能作为确诊依据"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "CT和MRI"
                                                            },
                                                            {
                                                                "text": "对肝硬化的诊断价值与B超相似"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "内镜检查"
                                                            },
                                                            {
                                                                "text": "可确定有无食管胃底静脉曲张"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肝穿刺活组织检查"
                                                            },
                                                            {
                                                                "text": "肝活检见假小叶形成，可建立诊断"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹腔镜检查"
                                                            },
                                                            {
                                                                "text": "可在直视下取活检，对诊断有困难者有价值"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）有病毒性肝炎、长期大量饮酒等可导致肝硬化的有关病史；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）有肝功能减退和门静脉高压的临床表现；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）肝功能试验有血清白蛋白下降、血清胆红素升高及凝血酶原时间延长等指标提示肝功能失代偿；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4）B超或CT提示肝硬化以及内镜发现食管胃底静脉曲张。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "肝活组织检查见假小叶形成是诊断本病的金标准。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肝脾肿大的鉴别诊断"
                                                                    },
                                                                    {
                                                                        "text": "如血液病引起的肝脾肿大，必要时可作肝穿刺活检"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹水的鉴别诊断"
                                                                    },
                                                                    {
                                                                        "text": "如结核性腹膜炎、缩窄性心包炎、慢性肾小球肾炎等"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肝硬化并发症的鉴别诊断"
                                                                    },
                                                                    {
                                                                        "text": "如上消化道出血、肝性脑病、肝肾综合征等"
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
                                        "type": "h1",
                                        "text": "五、并发症",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "1.食管胃底静脉曲张破裂出血"
                                                            },
                                                            {
                                                                "text": "最常见并发症，多突然发生呕血和（或）黑便。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "2.感染（特别是自发性细菌性腹膜炎-SBP）"
                                                            },
                                                            {
                                                                "text": "发热、腹痛、短期内腹水迅速增加，体检发现轻重不等的腹膜刺激征，血常规检查白细胞升高，腹水检查提示炎性腹水。腹水检查如白细胞＞500×106/L或多形核白细胞＞250×106/L，可诊断SBP。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "3.肝性脑病"
                                                            },
                                                            {
                                                                "text": "最严重的并发症。肝病基础上出现神经精神系统异常。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "4.电解质和酸碱平衡紊乱"
                                                            },
                                                            {
                                                                "text": "低钠低钾低氯碱中毒。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "5.原发性肝细胞癌"
                                                            },
                                                            {
                                                                "text": "当患者出现肝区疼痛、肝大、血性腹水、无法解释的发热时要考虑此病。行AFP、CT检查。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "6.肝肾综合征"
                                                            },
                                                            {
                                                                "text": "严重肝病基础上的肾衰竭，但肾脏本身并无器质性损害。血肌酐升高＞133 μmol/L。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "7.肝肺综合征"
                                                            },
                                                            {
                                                                "text": "严重肝病基础上的低氧血症，主要与肺内血管扩张相关而过去无心肺疾病基础。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "8.门静脉血栓形成"
                                                            },
                                                            {
                                                                "text": "如果血栓缓慢形成，可无明显的临床症状。如发生门静脉急性完全阻塞，可出现剧烈腹痛、腹胀、血便、休克，脾脏迅速增大和腹水迅速增加。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "六、治疗与预防",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 一般治疗",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "休息"
                                                                    },
                                                                    {
                                                                        "text": "适当减少活动、避免劳累"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "饮食"
                                                                    },
                                                                    {
                                                                        "text": "以高热量、高蛋白（肝性脑病时饮食限制蛋白质）和维生素丰富而易消化的食物为原则"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "支持疗法"
                                                                    },
                                                                    {
                                                                        "text": "纠正水电解质平衡，适当补充营养，视情况输注白蛋白或血浆"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 抗纤维化治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "治疗原发病。对病毒复制活跃的病毒性肝炎肝硬化患者可予抗病毒治疗。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 腹水的治疗",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "限制钠和水的摄入"
                                                                    },
                                                                    {
                                                                        "text": "限钠饮食和卧床休息是腹水的基础治疗。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "利尿剂"
                                                                    },
                                                                    {
                                                                        "text": "临床常用的利尿剂为螺内酯和呋塞米。目前主张两药合用，既可加强疗效，又可减少不良反应。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "提高血浆胶体渗透压"
                                                                    },
                                                                    {
                                                                        "text": "每周定期输注白蛋白或血浆。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "难治性腹水的治疗"
                                                                    },
                                                                    {
                                                                        "text": " 大量排放腹水加输注白蛋白  自身腹水浓缩回输：感染性或癌性腹水不能回输3. 经颈静脉肝内门体分流术（TIPS），但易诱发肝性脑病4. 肝移植"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "4. 门静脉高压症的手术治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "手术治疗的目的主要是切断或减少曲张静脉的血流来源、降低门静脉压力和消除脾功能亢进。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "5. 肝移植",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "是对晚期肝硬化治疗的最佳选择，掌握手术时机及尽可能充分做好术前准备可提高手术存活率。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 肝硬化特征性活组织检查——假小叶形成。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 乙肝三部曲：乙肝——肝硬化——肝癌。 "
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3. 肝硬化临床表现：肝功能减退和门静脉高压症状。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "4. 肝硬化的并发症。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "5. 自发性细菌性腹膜炎：发热、腹痛、短期内腹水迅速增加，体检发现轻重不等的腹膜刺激征。腹水检查如白细胞＞500×10<sup>6</sup>/L或多形核白细胞＞250×10<sup>6</sup>/L，可诊断SBP。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第十章",
                                "text": "门静脉高压症",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "门静脉高压症"
                                                    },
                                                    {
                                                        "text": "1. 病因和发病机制2. 临床表现3. 诊断4. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因和发病机制",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 病因",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肝前型",
                                                                        "colSpan": 2
                                                                    },
                                                                    {
                                                                        "text": "肝外门静脉血栓形成（脐炎、腹腔内感染如急性阑尾炎和胰腺炎、创伤等）、先天性畸形（闭锁、狭窄或海绵样变等）和外在压迫（转移癌、胰腺炎等）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肝内型",
                                                                        "rowSpan": 3
                                                                    },
                                                                    {
                                                                        "text": "窦前型"
                                                                    },
                                                                    {
                                                                        "text": "血吸虫病"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "窦后型"
                                                                    },
                                                                    {
                                                                        "text": "肝炎后肝硬化"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "窦型"
                                                                    },
                                                                    {
                                                                        "text": "肝炎后肝硬化"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肝后型",
                                                                        "colSpan": 2
                                                                    },
                                                                    {
                                                                        "text": "巴德-吉亚利综合征（Budd-Chiari syndrome）、缩窄性心包炎、严重右心衰竭"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 发病机制",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "临床表现"
                                                                    },
                                                                    {
                                                                        "text": "发病机制（外科学部分）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "脾肿大和脾功能亢进"
                                                                    },
                                                                    {
                                                                        "text": "脾脏因长期淤血而肿大，可发生脾功能亢进，表现为外周血白细胞、红细胞和血小板减少（三系减少）。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "食管胃底静脉曲张和呕血"
                                                                    },
                                                                    {
                                                                        "text": "交通支扩张（胃底-食管下段交通支、直肠下端-肛管交通支、前腹壁交通支及腹膜后交通支，其中食管胃底静脉曲张最常见）。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹水"
                                                                    },
                                                                    {
                                                                        "text": "1. 门静脉压力升高，使门静脉系统毛细血管床的滤过压增加；2. 肝硬化引起的低蛋白血症，血浆胶体渗透压下降；3. 淋巴液生成增加，促使液体从肝表面、肠浆膜面漏入腹腔而形成腹水；4. 门静脉高压症时虽然静脉内血流量增加，但中心血流量却是降低的，继发刺激醛固酮分泌过多，导致钠、水潴留而加剧腹水形成。"
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
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "门静脉高压症主要表现为脾肿大、脾功能亢进、呕血或黑便、腹水或非特异性全身症状（如疲乏、嗜睡、厌食）。出血量大者可引起肝组织严重缺氧，容易导致肝昏迷。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "体格检查：黄疸、腹水、前腹壁静脉曲张、肝大，但有时肝硬化缩小而难以触到。还可有慢性肝病的其他征象如蜘蛛痣、肝掌、男性乳房发育、睾丸萎缩等。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "三、诊断",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "主要根据肝炎和血吸虫病等肝病病史和脾肿大、脾功能亢进、呕血或黑便、腹水等临床表现。 ",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "四、治疗",
                                                                                "content": [
                                                                                    {
                                                                                        "type": "common",
                                                                                        "text": "外科治疗门静脉高压症主要是预防和控制食管胃底曲张静脉破裂出血。"
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
                                                "type": "h2",
                                                "text": "1. 非手术治疗 ",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "食管胃底曲张静脉破裂出血，尤其是对肝功能储备差的病人，尽可能采用非手术治疗。",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "扩充血容量"
                                                                            },
                                                                            {
                                                                                "text": "建立有效的静脉通道，扩充血容量，采取措施监测病人生命体征"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "药物止血"
                                                                            },
                                                                            {
                                                                                "text": "三甘氨酞赖氨酸加压素（特利加压素），生长抑素（药物治疗首选）及其拟似物等"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "内镜治疗"
                                                                            },
                                                                            {
                                                                                "text": "经内镜食管曲张静脉套扎术：控制急性出血的首选方法"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "三腔管压迫"
                                                                            },
                                                                            {
                                                                                "text": "通常用于对血管加压素或内镜治疗食管胃底静脉曲张出血无效的病人"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "经颈静脉肝内门体分流术（TIPS）"
                                                                            },
                                                                            {
                                                                                "text": "介入治疗。主要适应证是药物和内镜治疗无效、肝功能差的曲张静脉破裂出血病人和用于等待行肝移植的病人"
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
                                                "type": "h2",
                                                "text": "2. 手术治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "对于没有黄疸、没有明显腹水的病人发生大出血，应争取即时或经短时间准备后即行手术。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "手术治疗主要分为两类：一类是通过各种不同的分流手术，来降低门静脉压力；另一类是阻断门奇静脉间的反常血流，达到止血的目的。",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "手术治疗急诊手术的适应证:①病人以往有大出血的病史，或本次出血来势凶猛，出血量大，或经短期积极止血治疗，仍有反复出血者，应考虑急诊手术止血。②经过严格的内科治疗48小时内仍不能控制出血，或短暂止血又复发出血，应积极行急诊手术止血。",
                                                                        "content": [
                                                                            {
                                                                                "type": "table",
                                                                                "content": [
                                                                                    {
                                                                                        "content": [
                                                                                            {
                                                                                                "text": "门体分流术"
                                                                                            },
                                                                                            {
                                                                                                "text": "非选择性门体分流术：将人肝的门静脉血完全转流人体循环，代表术式是门静脉与下腔静脉端侧分流术选择性门体分流术：保存门静脉的人肝血流，同时降低食管胃底曲张静脉的压力，代表术式是远端脾一肾静脉分流术"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "content": [
                                                                                            {
                                                                                                "text": "断流手术"
                                                                                            },
                                                                                            {
                                                                                                "text": "脾切除，同时手术阻断门奇静脉间的反常血流，以达到止血的目的。断流手术的方式也很多，应用较多的有食管下端横断术、胃底横断术、食管下端胃底切除术以及贲门周围血管离断术等"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "type": "common",
                                                                                        "text": "严重脾肿大，合并明显的脾功能亢进，最多见于晚期血吸虫病，也见于脾静脉栓塞引起的左侧门静脉高压症。对于这类病人单纯行脾切除术效果良好。",
                                                                                        "content": [
                                                                                            {
                                                                                                "type": "common",
                                                                                                "text": "肝硬化引起的顽固性腹水有效的治疗方法是肝移植，是外科治疗终末期肝病的有效方法。其他疗法包括TIPS和腹腔-上腔静脉转流术。"
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
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 门静脉高压症的三大临床表现：脾肿大和脾功能亢进、食管胃底静脉曲张和呕血、腹水。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 门静脉高压症的处理原则。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第十二章",
                                "text": "肝性脑病",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "肝性脑病"
                                                    },
                                                    {
                                                        "text": "1. 病因和发病机制2. 临床表现3. 辅助检查4. 诊断与鉴别诊断5. 治疗与预防"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因和发病机制",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 病因",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "常见病因"
                                                                    },
                                                                    {
                                                                        "text": "肝硬化、重症肝炎、暴发性肝功能衰竭、原发性肝癌、严重胆道感染及妊娠期急性脂肪肝。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "常见诱因"
                                                                    },
                                                                    {
                                                                        "text": "药物、氨（蛋白食物摄入过多、消化道出血、感染、便秘、低钾导致代谢性碱中毒）、低血容量（肾前性氮质血症，如利尿、大量放胸腹水）、门体分流、血管阻塞、原发性肝癌。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 发病机制",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "学说"
                                                                    },
                                                                    {
                                                                        "text": "与临床的联系（常考点）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "氨中毒学说"
                                                                    },
                                                                    {
                                                                        "text": "1.限制蛋白饮食（蛋白产氨）2.碱中毒（低钾是诱因）3.酸性物质灌肠，不能用肥皂水等碱性物质灌肠4.降氨药：L-鸟氨酸-L-门冬氨酸"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "假性神经递质学说"
                                                                    },
                                                                    {
                                                                        "text": "芳香族氨基酸增多，补充支链氨基酸，使得芳香族氨基酸和支链氨基酸的比例恢复平衡。"
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
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "肝性脑病发生在严重肝病和（或）广泛门体分流的基础上，临床上主要表现为高级神经中枢的功能紊乱（如性格改变、智力下降、行为失常、意识障碍等）以及运动和反射异常（如扑翼样震颤、肌阵挛、反射亢进和病理反射等）。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "肝性脑病的临床过程分为四期，要点归纳如下：",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": ""
                                                                            },
                                                                            {
                                                                                "text": "0期"
                                                                            },
                                                                            {
                                                                                "text": "一期"
                                                                            },
                                                                            {
                                                                                "text": "二期"
                                                                            },
                                                                            {
                                                                                "text": "三期"
                                                                            },
                                                                            {
                                                                                "text": "四期"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "扑翼样震颤*"
                                                                            },
                                                                            {
                                                                                "text": "-"
                                                                            },
                                                                            {
                                                                                "text": "+"
                                                                            },
                                                                            {
                                                                                "text": "+"
                                                                            },
                                                                            {
                                                                                "text": "+"
                                                                            },
                                                                            {
                                                                                "text": "-"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "精神行为"
                                                                            },
                                                                            {
                                                                                "text": "无"
                                                                            },
                                                                            {
                                                                                "text": "睡眠倒错"
                                                                            },
                                                                            {
                                                                                "text": "嗜睡"
                                                                            },
                                                                            {
                                                                                "text": "昏睡，但可唤醒"
                                                                            },
                                                                            {
                                                                                "text": "昏迷，不可唤醒"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "行为"
                                                                            },
                                                                            {
                                                                                "text": "无"
                                                                            },
                                                                            {
                                                                                "text": "焦虑、欣快激动、淡漠"
                                                                            },
                                                                            {
                                                                                "text": "行为异常（如衣冠不整或随地大小便）"
                                                                            },
                                                                            {
                                                                                "text": "各种神经体征持续或加重"
                                                                            },
                                                                            {
                                                                                "text": "患者不能合作"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "common",
                                                                        "text": "*扑翼样震颤：当病人平伸手指及腕关节时，腕关节突然屈曲，然后又迅速伸直，加上震颤多动，类似鸟的翅膀在扇动，故称扑翼样震颤。",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "记忆方法：1. 2. 3震颤，2. 3. 4脑电。"
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
                                        "type": "h1",
                                        "text": "三、辅助检查",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "血氨"
                                                            },
                                                            {
                                                                "text": "临床重要指标。慢性肝性脑病尤其是门体分流性脑病患者多有血氨升高。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "脑电图"
                                                            },
                                                            {
                                                                "text": "有异常，但特异性不强。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "诱发电位"
                                                            },
                                                            {
                                                                "text": "可用于轻微肝性脑病的诊断和研究。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "影像学检查"
                                                            },
                                                            {
                                                                "text": "急性患者可发现脑水肿，慢性患者则可发现有不同程度的脑萎缩。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "在肝病基础上出现神经精神系统异常要想到肝性脑病可能。诊断要点如下："
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）有严重肝病和（或）广泛门体侧支循环形成的基础及肝性脑病诱因；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）出现精神紊乱、昏睡或昏迷，可引出扑翼样震颤；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）反映肝功能的血生化指标明显异常及（或）血氨增高；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4）脑电图异常；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（5）心理智能测验、诱发电位及临界视觉闪烁频率异常；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（6）头部CT或MRI排除脑血管意外及颅内肿瘤等疾病。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "应与可引起昏迷的其他疾病，如糖尿病、低血糖、尿毒症、脑血管意外、脑部感染和镇静药过量等相鉴别。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、治疗与预防",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 治疗",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "及早识别及去除HE发作的诱因"
                                                                    },
                                                                    {
                                                                        "text": "慎用镇静药及损伤肝功能的药物、纠正电解质和酸碱平衡紊乱、止血和清除肠道积血（乳果糖或弱酸液灌肠，用肥皂水等碱性液体灌肠）、预防和控制感染等"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "营养支持"
                                                                    },
                                                                    {
                                                                        "text": "急性起病数日内禁食蛋白质，神志清楚后从蛋白质20g/日开始逐渐增加致1g/（kg.d）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "减少肠内氮源性毒物的生成与吸收"
                                                                    },
                                                                    {
                                                                        "text": "限制蛋白质饮食、清洁肠道、乳果糖或乳梨醇、口服抗生素（抑制肠道产尿素酶的细菌，减少氨的生成）、益生菌制剂"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "促进体内氨的代谢"
                                                                    },
                                                                    {
                                                                        "text": "L-鸟氨酸-L-门冬氨酸、谷氨酸钠或钾"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "调节神经递质"
                                                                    },
                                                                    {
                                                                        "text": "支链氨基酸"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "人工肝"
                                                                    },
                                                                    {
                                                                        "text": "分子吸附剂再循环系统"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肝移植"
                                                                    },
                                                                    {
                                                                        "text": "肝移植是治疗各种终末期肝病的一种有效手段，严重和顽固性的肝性脑病有肝移植的指征"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 预防",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "防治各种肝病是预防HE的基础。对肝病患者应给予该病的常识教育，在生活中避免诱发肝性脑病的因素。医生在拟订治疗方案时应避免医源性的诱因，如不恰当的利尿、放腹水及药物等。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1.氨中毒学说及其与临床的联系。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "理解记忆：氨中毒，故而要限制蛋白饮食（蛋白产氨）；氨是碱性物质，体内碱多了，故而要用酸性物质灌肠，不能用肥皂水等碱性物质灌肠；降氨药：L-鸟氨酸-L-门冬氨酸（促进鸟苷酸循环，促进氨的代谢，减少氨）。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2.肝性脑病的临床表现与分期，记忆方法：肝病基础上出现扑翼样震颤等神经精神系统症状，即可诊断肝性脑病。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3.肝性脑病的诱因及处理原则。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第十三章",
                                "text": "脂肪性肝病",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "脂肪性肝病"
                                                    },
                                                    {
                                                        "text": "1. 病因2. 诊断3. 治疗与预防"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "脂肪性肝病是以肝细胞脂肪过度贮积和脂肪变性为特征的临床病理综合征。临床上，根据有无长期过量饮酒分为非酒精性脂肪性肝病和酒精性脂肪性肝病。这里重点介绍非酒精性脂肪性肝病。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "非酒精性脂肪性肝病"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "肥胖、2型糖尿病、高脂血症等单独或共同成为非酒精性脂肪性肝病的易感因素。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "临床诊断标准为：凡具备下列第1～5项和第6或第7项中任何一项者即可诊断为NAFLD。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 无饮酒史或饮酒折合乙醇量男性每周＜140g，女性每周＜70g。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 除外病毒性肝炎、药物性肝病、全胃肠外营养、肝豆状核变性等可导致脂肪性肝病的特定疾病。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "3 .除原发疾病的临床表现外，可有乏力、消化不良、肝区隐痛、肝脾肿大等非特异性症状及体征。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "4. 可有体重超重和（或）内脏性肥胖、空腹血糖增高、血脂代谢紊乱、高血压等代谢综合征相关组分。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "5. 血清转氨酶和谷氨酰转肽酶水平可有轻至中度增高（小于5倍正常值上限），通常以ALT增高为主。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "6. 肝脏影像学表现符合弥漫性脂肪性肝病的影像学诊断标准。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "7. 肝活体组织检查组织学改变符合脂肪性肝病的病理学诊断标准。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、治疗与预防",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 针对危险因素的治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "如能控制引起NAFLD的病因，单纯性脂肪性肝病和脂肪性肝炎可以逆转乃至完全恢复，是治疗NAFLD的最重要措施。减肥和运动可改善胰岛素抵抗，是治疗肥胖相关NAFLD的最佳措施。对糖尿病患者应积极控制血糖。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "一般认为降脂药只用于血脂升高明显者，用药过程中应密切监测肝功能情况。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 药物治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "目前临床用于治疗脂肪性肝病的药物疗效不肯定。多烯磷脂酰胆碱、S-腺苷甲硫氨酸等因不良反应少，可试用。维生素E具抗氧化作用，可减轻氧化应激反应，有建议可常规用于脂肪性肝炎治疗。 "
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "本章内容只需做了解（概念及诊断）。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第十四章",
                                "text": "肝脓肿",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "肝脓肿"
                                                    },
                                                    {
                                                        "text": "1. 病因和发病机制2. 临床表现3. 诊断与鉴别诊断4. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因和发病机制",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 细菌性肝脓肿",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "全身细菌性感染，特别是腹腔内感染时，细菌侵入肝，如病人抵抗力弱，可发生肝脓肿。致病菌多为大肠杆菌。细菌可经下列途径侵入肝：",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "胆道入侵"
                                                                            },
                                                                            {
                                                                                "text": "引起细菌性肝脓肿的主要原因。胆道蛔虫症、胆管结石等并发化脓性胆管炎时，细菌沿着胆管上行"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "肝动脉入侵"
                                                                            },
                                                                            {
                                                                                "text": "体内任何部位的化脓性病变并发生菌血症时，细菌可经肝动脉侵入肝"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "门静脉入侵"
                                                                            },
                                                                            {
                                                                                "text": "如坏疽性阑尾炎、痔核感染、菌痢等，细菌可经门静脉入肝内"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "其他"
                                                                            },
                                                                            {
                                                                                "text": "如肝毗邻感染病灶的细菌可循淋巴系统侵入"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "common",
                                                                        "text": "阿米巴性肝脓肿  ",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "肠道阿米巴感染的并发症。"
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
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "起病较急，主要症状是寒战、高热、肝区疼痛和肝肿大。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "B型超声检查可明确其部位和大小，为首选的检查方法。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、诊断与鉴别诊断"
                                    },
                                    {
                                        "type": "h1",
                                        "text": "1. 诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "根据病史，临床表现，以及B型超声和X线检查，即可诊断本病。诊断性穿刺抽出脓液即可证实本病。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 细菌性肝脓肿与阿米巴性肝脓肿鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": ""
                                                                    },
                                                                    {
                                                                        "text": "细菌性肝脓肿"
                                                                    },
                                                                    {
                                                                        "text": "阿米巴性肝脓肿"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "病史"
                                                                    },
                                                                    {
                                                                        "text": "继发于胆道感染或其他化脓性疾病"
                                                                    },
                                                                    {
                                                                        "text": "继发于阿米巴痢疾后"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "症状"
                                                                    },
                                                                    {
                                                                        "text": "病情急骤严重，全身中毒症症状明显，有寒战、高热"
                                                                    },
                                                                    {
                                                                        "text": "起病较缓慢，病程较长，可有高热，或不规则发热、盗汗"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "血液化验"
                                                                    },
                                                                    {
                                                                        "text": "白细胞计数及中性粒细胞可明显增加。血液细菌培养可阳性"
                                                                    },
                                                                    {
                                                                        "text": "白细胞计数可增加，如无继发细菌感染，血液细菌培养阴性。血清学阿米巴抗体检测阳性"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "粪便检查"
                                                                    },
                                                                    {
                                                                        "text": "无特殊表现"
                                                                    },
                                                                    {
                                                                        "text": "部分病人可找到阿米巴滋养体或包囊"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "脓液"
                                                                    },
                                                                    {
                                                                        "text": "多为黄白色脓液，涂片和培养可发现细菌"
                                                                    },
                                                                    {
                                                                        "text": "大多为棕褐色脓液，无臭味，镜检有时可找到阿米巴滋养体。若无混合感染，涂片和培养无细菌"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "诊断性治疗"
                                                                    },
                                                                    {
                                                                        "text": "抗阿米巴药物治疗无效"
                                                                    },
                                                                    {
                                                                        "text": "抗阿米巴药物治疗有好转"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "脓肿"
                                                                    },
                                                                    {
                                                                        "text": "较小，常为多发性"
                                                                    },
                                                                    {
                                                                        "text": "较大，多为单发，多见于肝右叶"
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
                                        "type": "h1",
                                        "text": "四、治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 细菌性肝脓肿",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "治疗细菌性肝脓肿是一种严重的疾病，必须早期诊断，积极治疗。",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "全身支持疗法"
                                                                            },
                                                                            {
                                                                                "text": "给予充分营养，纠正水和电解质平衡失调等。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "抗生素治疗"
                                                                            },
                                                                            {
                                                                                "text": "是主要治疗手段。经验性用药时主要针对大肠杆菌、金黄色葡萄球菌、厌氧菌。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "经皮肝穿刺脓肿置管引流术"
                                                                            },
                                                                            {
                                                                                "text": "适用于单个较大的脓肿。在B型超声引导下行穿刺。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "切开引流"
                                                                            },
                                                                            {
                                                                                "text": "适用于较大脓肿，估计有穿破可能，或已穿破胸腔或腹腔；胆源性肝脓肿；位于肝左外叶脓肿，穿刺易污染腹腔；以及慢性肝脓肿。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "中医中药治疗"
                                                                            },
                                                                            {
                                                                                "text": "多与抗生素和手术治疗配合应用，以清热解毒为主。"
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
                                                "type": "h2",
                                                "text": "2. 阿米巴性肝脓肿",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "首先应考虑非手术治疗，以抗阿米巴药物（甲硝唑、氯喹、依米丁）治疗和必要时反复穿刺吸脓以及支持疗法为主。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "手术治疗包括经皮肝穿刺置管闭式引流术、切开引流。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 细菌性肝脓肿以大肠杆菌感染、胆道入侵途径最常见。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 肝脓肿的临床表现：寒战、高热、肝区疼痛、肝肿大。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3. 首先检查：B超。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第十五章",
                                "text": "肝癌",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "肝癌"
                                                    },
                                                    {
                                                        "text": "1. 病因2. 病理3. 临床表现4. 辅助检查5. 诊断与鉴别诊断6. 治疗与预防"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 病毒性肝炎：在我国，慢性病毒性肝炎是原发性肝癌诸多致病因素中最主要的病因。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 肝硬化：在我国原发性肝癌主要在病毒性肝炎后肝硬化基础上发生，在欧美国家，肝癌常在酒精性肝硬化的基础上发生。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 黄曲霉毒素：黄曲霉毒素的代谢产物黄曲霉毒素B1有强烈的致癌作用。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "4. 饮用水污染"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "5. 遗传因素：在同一种族中，肝癌的发病常有家族聚集现象。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "6. 其他：一些化学物质如亚硝胺类、偶氮芥类、有机磷农药、酒精等均是可疑的致肝癌物质。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、病理",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 大体病理形态：块状型（多见，>5 cm，≤10 cm）、结节型（＜5cm）和弥漫型。按肿瘤大小分类为：微小肝癌（直径≤2 cm）、小肝癌（>2 cm，≤5 cm）、大肝癌（>5cm，≤10 cm）、巨大肝癌（>10 cm）。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 组织学分类：肝细胞型、胆管细胞型和二者同时出现的混合型，我国以肝细胞癌多见。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 肝癌的转移",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肝内转移（最早）",
                                                                        "colSpan": 2
                                                                    },
                                                                    {
                                                                        "text": "极易侵犯门静脉分支形成肝内播散，甚至阻塞门脉形成门脉高压"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肝外转移",
                                                                        "rowSpan": 2
                                                                    },
                                                                    {
                                                                        "text": "血行转移"
                                                                    },
                                                                    {
                                                                        "text": "最常见的转移部位为肺，因肝静脉中癌栓延至下腔静脉，经右心达肺动脉，在肺内形成转移灶"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "淋巴转移"
                                                                    },
                                                                    {
                                                                        "text": "肝门淋巴结最常见，其次为胰周、腹膜后、主动脉旁、锁骨上淋巴结"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "种植转移"
                                                                    },
                                                                    {
                                                                        "text": "少见，从肝表面脱落的癌细胞可种植在腹膜、横膈、盆腔等处"
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
                                        "type": "h1",
                                        "text": "三、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肝区疼痛"
                                                            },
                                                            {
                                                                "text": "多为首发症状，多为持续性钝痛、刺痛或胀痛。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肝肿大"
                                                            },
                                                            {
                                                                "text": "为中、晚期肝癌最常见的主要体征"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "黄疸"
                                                            },
                                                            {
                                                                "text": "一般晚期肝癌出现，多为阻塞性黄疸，少数为肝细胞性黄疸"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肝硬化征象"
                                                            },
                                                            {
                                                                "text": "在失代偿肝硬化基础上发病者有基础病的临床表现"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "全身性表现"
                                                            },
                                                            {
                                                                "text": "进行性消瘦、发热、乏力、恶病质等，如转移至肺、骨、脑，可出现相应症状"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "伴癌综合征"
                                                            },
                                                            {
                                                                "text": "肿瘤本身代谢异常或癌组织对机体影响而引起内分泌或代谢异常的一组症候群，主要表现为自发性低血糖、红细胞增多等"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、辅助检查：",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "甲胎蛋白（AFP）"
                                                            },
                                                            {
                                                                "text": "甲胎蛋白是诊断原发性肝癌最重要的肿瘤标记物，已广泛应用于原发性肝癌的普查，在排除妊娠、肝炎和生殖腺胚胎瘤的基础上，血清AFP诊断肝癌的标准为：1. AFP大于500ng/mL持续4周以上；2. AFP在200ug/L以上持续8周以上；3. AFP由低浓度逐渐升高不降。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "影像学检查"
                                                            },
                                                            {
                                                                "text": "超声：肝癌筛查首选方法，能检出＞1cm的占位性病变；协助引导肝穿刺活检；增强CT/MRI：1cm左右的肝癌检出率可＞80%，是诊断、确定治疗策略的重要手段；选择性肝动脉造影：CT/MRI对疑为肝癌的小病灶难以确诊时是肝癌诊断的重要补充手段"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肝穿刺行针吸细胞学检查"
                                                            },
                                                            {
                                                                "text": "有确定诊断意义，B超或CT导引下行细针穿刺，有出血或针道转移风险"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "有乙/丙型病毒性肝炎病史或酒精性肝病的中年、尤其是男性患者，有不明原因的肝区疼痛、消瘦、进行性肝脏肿大者，应考虑肝癌的可能，作血清AFP测定和有关影像学检查，必要时行肝穿刺活检，可获诊断。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "满足下列三项中的任一项即可诊断肝癌："
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（1） 具有两种典型影像学（超声、增强CT、MRI或选择性肝动脉造影）表现，病灶＞2cm；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2） 一项典型影像学表现，病灶＞2cm，AFP大于400ng/mL；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3） 肝脏活检阳性。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "原发性肝癌主要应与肝硬化、继发性肝癌、肝良胜肿瘤、肝脓肿、肝包虫病，以及与肝毗邻器官，如右肾、结肠肝曲、胃、胰腺等处的肿瘤相鉴别。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "六、治疗与预防",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "治疗早期诊断，早期治疗，根据不同病情进行综合治疗，是提高疗效的关键；而早期施行手术切除仍是目前首选的、最有效的治疗方法"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 手术治疗",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肝切除"
                                                                    },
                                                                    {
                                                                        "text": "目前仍是治疗肝癌首选的和最有效的方法。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "根治性肝切除适应证"
                                                                    },
                                                                    {
                                                                        "text": "1. 单发的微小肝癌和小肝癌；2. 单发的向肝外生长的大肝癌或巨大肝癌，受肿瘤破坏的肝组织少于30%，肿瘤包膜完整，周围界限清楚；3. 多发肿瘤，但肿瘤结节少于3个，且局限在肝的一段或一叶内。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 肝动脉化疗栓塞治疗：为原发性肝癌非手术治疗的首先方案。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 化学药物；"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "4. 放射治疗；"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "5. 药物治疗；"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "6. 中医中药治疗。"
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 肝癌的首发症状：肝区疼痛"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 肝癌常见的转移途径：肝内转移（最早），淋巴结转移中：肝门淋巴结转移最常见。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3. 甲胎蛋白是诊断原发性肝癌最重要的肿瘤标记物"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "4. 根治性肝切除术手术适应证。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第十六章",
                                "text": "胆道解剖",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "胆道解剖"
                                                    },
                                                    {
                                                        "text": "1. 胆囊与肝外胆管的解剖2. 胆管、胰管与十二指肠汇合部解剖"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、胆囊与肝外胆管的解剖",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 胆囊解剖",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "胆囊呈梨形，位于肝的胆囊窝内。颈上部呈囊性扩大，称Hartmann袋，胆囊结石常滞留于此处。胆囊管、肝总管、肝下缘所构成的三角区称为胆囊三角（Calot三角）。胆囊动脉、肝右动脉、副右肝管在此区穿过，是胆道手术极易发生误伤的区域。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 肝外胆管解剖",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "肝总管左、右肝管出肝后，在肝门部汇合形成肝总管。肝总管直径为0.4～0.6 cm，其下端与胆囊管汇合形成胆总管。胆总管分为四段：十二指肠上段（临床上胆总管探查、引流常在这个部位施行）、十二指肠后段、胰腺段和十二指肠壁内段。胆总管长约7～9cm，直径约0.4～0.8cm。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "二、胆管、胰管与十二指肠汇合部解剖",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "80%～90%人的胆总管与主胰管在肠壁内汇合，膨大形成胆胰壶腹，亦称乏特（Vater）壶腹。壶腹周围有括约肌（称Oddi括约肌），末端通常开口于十二指肠大乳头。Oddi括约肌主要包括胆管括约肌、胰管括约肌和壶腹括约肌，它具有控制和调节胆总管和胰管的排放，以及防止十二指肠内容物反流的重要作用。",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "三、胆囊的血供",
                                                                                "content": [
                                                                                    {
                                                                                        "type": "common",
                                                                                        "text": "胆囊血供丰富，主要来自胃十二指肠动脉、肝总动脉和肝右动脉，胆囊动脉74.4%～87%起源于肝右动脉，7%～20.5%起源于肝总或肝左动脉，2.5%～3%起源于胃十二指肠动脉。"
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
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1.Hartmann袋和胆囊三角、胆总管。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2.胆囊的血供。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第十七章",
                                "text": "胆囊结石",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "胆囊结石"
                                                    },
                                                    {
                                                        "text": "1. 临床表现2. 诊断3. 胆囊切除术适应证及手术方式"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "大多数病人可无症状，仅在体格检查、手术和尸体解剖时偶然发现，称为静止性胆囊结石。胆囊结石的典型症状为胆绞痛，只有少数病人出现。极少引起黄疸。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胆绞痛"
                                                                    },
                                                                    {
                                                                        "text": "典型的发作是在饱餐、进食油腻食物后或睡眠中体位改变时。疼痛位于右上腹部或上腹部，呈阵发性，或者持续疼痛阵发性加剧，可向右肩胛部和背部放射。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "上腹隐痛"
                                                                    },
                                                                    {
                                                                        "text": "多数病人仅在在进食过多、吃肥腻食物、工作紧张或休息不好时感到上腹部或右上腹部隐痛。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胆囊积液"
                                                                    },
                                                                    {
                                                                        "text": "胆囊结石长期嵌顿或阻塞胆囊管但未合并感染时，胆囊黏膜吸收胆汁中的胆色素，并分泌粘液性物质，导致胆囊积液。积液呈透明无色，称为白胆汁。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胆源性胰腺炎"
                                                                    },
                                                                    {
                                                                        "text": "进入胆总管的结石通过Oddi括约肌可引起损伤或嵌顿于壶腹部导致胰腺炎。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Mirizzi综合征"
                                                                    },
                                                                    {
                                                                        "text": "持续嵌顿于胆囊颈部的和较大的胆囊管结石压迫肝管，引起肝总管狭窄；反复的炎症发作更导致胆囊肝总管瘘管，胆囊管消失、结石部分或全部堵塞肝总管。临床特点是反复发作胆囊炎及胆管炎，明显的梗阻性黄疸。"
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
                                        "type": "h1",
                                        "text": "二、诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "临床典型的绞痛病史是诊断的重要依据，影像学检查可确诊。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "临床表现"
                                                                    },
                                                                    {
                                                                        "text": "典型的绞痛病史，在饱餐、进食油腻食物后或睡眠中体位改变时发作"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "B超"
                                                                    },
                                                                    {
                                                                        "text": "首选，准确率接近100%，发现胆囊内有强回声团、随体位改变而移动、其后有声影即可确诊"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹部X线"
                                                                    },
                                                                    {
                                                                        "text": "10%～15%的胆囊结石含有钙，腹部X线能确诊"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "CT 、MRI"
                                                                    },
                                                                    {
                                                                        "text": "也可显示胆囊结石，但不作为常规检查"
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
                                        "type": "h1",
                                        "text": "三、胆囊切除术适应证及手术方式",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 治疗原则",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "对于有症状和（或）并发症的胆囊结石，首选腹腔镜胆囊切除（LC）治疗。直径＜3cm的无症状的胆囊结石一般不需积极手术治疗可观察和随诊。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 无症状胆囊结石手术适应证",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）结石直径≥3cm；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）合并需要开腹的手术；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）伴有胆囊息肉＞1cm；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4）胆囊壁增厚；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（5）胆囊壁钙化或瓷性胆囊；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（6）儿童胆囊结石；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（7）合并糖尿病；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（8）有心肺功能障碍；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（9）发现胆囊结石10年以上；",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "（10）边远或交通不发达地区、野外工作人员。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 胆总管探查术适应证",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "行胆囊切除时，有下列情况应同时行胆总管探查术："
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）术前证实或高度怀疑胆总管有梗阻，包括有梗阻性黄疸，胆总管结石，反复发作胆绞痛、胆管炎、胰腺炎。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）术中证实胆总管内有结石、蛔虫、肿块，胆总管扩张直径超过1cm，胆管壁明显增厚，发现胰腺炎或胰头肿物，胆管穿刺抽出脓性、血性胆汁或泥沙样胆色素颗粒。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）胆囊结石小，有可能通过胆囊管进入胆总管。胆总管探查后一般需作T管引流，且可能有一定的并发症。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 胆囊结石典型胆绞痛的临床表现。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 手术适应证、同时胆总管探查适应证。 "
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第十八章",
                                "text": "急性胆囊炎",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "急性胆囊炎"
                                                    },
                                                    {
                                                        "text": "1. 临床表现2. 诊断与鉴别诊断3. 急症手术适应证"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "急性胆囊炎是胆囊管梗阻和细菌感染引起的炎症。约95%以上的病人有胆囊结石，称结石性胆囊炎；50%的病人无胆囊结石，称非结石性胆囊炎。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "急性结石性胆囊炎"
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "女性多见，50岁前为男性的3倍、50岁后为1.5倍。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "症状",
                                                                        "rowSpan": 4
                                                                    },
                                                                    {
                                                                        "text": "上腹部疼痛（右上腹部多见）"
                                                                    },
                                                                    {
                                                                        "text": "夜间发作常见，饱餐、进食肥腻食物常诱发发作，疼痛可放射到右肩、肩胛和背部"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "恶心、呕吐、厌食、便秘"
                                                                    },
                                                                    {
                                                                        "text": "非特异性消化道症状"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "发热"
                                                                    },
                                                                    {
                                                                        "text": "轻-中度发热，无寒战"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "黄疸"
                                                                    },
                                                                    {
                                                                        "text": "一般无黄疸"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "体征"
                                                                    },
                                                                    {
                                                                        "text": "Murphy征阳性"
                                                                    },
                                                                    {
                                                                        "text": "在吸气过程中发炎的胆囊下移时碰到用力按压的拇指，即可引起疼痛，此为胆囊触痛，如因剧烈疼痛而致吸气中止称Murphy征阳性"
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
                                        "type": "h1",
                                        "text": "二、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "典型的临床表现、结合实验室和影像学检查，诊断一般无困难。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "首选的辅助检查是：B超检查（可见胆囊增大、囊壁增厚（>4 mm），明显水肿时见“双边征”，囊内结石显示强回声、其后有声影。）"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "需要作出鉴别的疾病包括：消化性溃疡穿孔、急性胰腺炎、高位阑尾炎、肝脓肿、胆囊癌、结肠肝曲癌或小肠憩室穿孔，以及右侧肺炎、胸膜炎和肝炎等疾病。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 治疗（急诊手术的适应证）：",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "手术方式：首选腹腔镜胆囊切除术",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "急诊手术的适应证：①发病在48～72小时内者；②经非手术治疗无效或病情恶化者；③有胆囊穿孔、弥漫性腹膜炎、并发急性化脓性胆管炎、急性坏死性胰腺炎等并发症者。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1.急性胆囊炎的典型临床表现：进食油腻食物、饱食后出现右上腹部绞痛，夜间多发。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2.急性胆囊炎典型体征：Murphy征阳性，无黄疸。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3.首选的辅助检查是B超。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "4.急性结石性胆囊炎手术治疗：首选腹腔镜胆囊切除术。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第十九章",
                                "text": "肝外胆管结石",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "肝外胆管结石"
                                                    },
                                                    {
                                                        "text": "1. 临床表现2. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "临床表现一般平时无症状或仅有上腹不适，当结石造成胆管梗阻时可出现腹痛或黄疸，如继发胆管炎时，可有较典型的Charcot三联征：腹痛、寒战高热、黄疸的临床表现。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹痛"
                                                                    },
                                                                    {
                                                                        "text": "发生在剑突下或右上腹，多为绞痛，呈阵发性发作，可向右肩或背部放射。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "寒战高热"
                                                                    },
                                                                    {
                                                                        "text": "是继发感染导致胆管炎，胆管黏膜炎症水肿，加重梗阻致胆管内压升高，细菌及毒素逆行经毛细胆管进入体循环引起全身性感染。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "黄疸"
                                                                    },
                                                                    {
                                                                        "text": "梗阻性黄疸。"
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
                                        "type": "h1",
                                        "text": "二、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "治疗肝外胆管结石以手术治疗为主。术中应尽量取尽结石、解除胆道梗阻、术后保持胆汁引流通畅。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 非手术治疗：也可作为手术前的准备治疗。",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）应用抗生素，应根据敏感细菌选择用药，经验治疗可选用胆汁浓度高的、主要针对革兰阴性细菌的抗生素。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）解痉。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）利胆，包括一些中药和中成药。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4）纠正水、电解质及酸碱平衡紊乱。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（5）加强营养支持和补充维生素，禁食病人应使用肠外营养。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（6）护肝及纠正凝血功能异常的治疗。争取在胆道感染控制后才行择期手术治疗。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 手术治疗",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）胆总管切开取石、T管引流术",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "适用于单纯胆总管结石，胆管上、下端通畅，无狭窄或其他病变者。若伴有胆囊结石和胆囊炎，可同时行胆囊切除术。",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "术后10～14天可行T管造影，造影后应继续引流24小时以上。如造影发现有结石遗留，应在术后6周待纤维窦道形成后行纤维胆道镜检查和取石。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）胆肠吻合术（亦称胆汁内引流术）：近年已认识到内引流术废弃了Oddi括约肌的功能，因此使用逐渐减少。仅适用于：①胆总管远端炎症狭窄造成的梗阻无法解除，胆总管扩张；②胆胰汇合部异常，胰液直接流入胆管；③胆管因病变而部分切除无法再吻合。常用的吻合方式为胆管空肠Roux-en-Y吻合"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）对于嵌顿在胆总管开口的结石不能取出时可以应用内镜下或手术行Oddi括约肌切开取石。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 肝外胆管结石.继发胆管炎时，可出现典型的Charcot三联征：腹痛、寒战高热、黄疸。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 胆外胆管结石继发胆管炎，最重要的处理措施：胆总管切开取石、T管引流术。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第二十章",
                                "text": "急性梗阻性化脓性胆管炎",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "急性梗阻性化脓性胆管炎"
                                                    },
                                                    {
                                                        "text": "1. 病因2. 临床表现3. 诊断4. 治疗"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "急性化脓性胆管炎是急性胆管炎的严重阶段，也称急性重症胆管炎（ACST）。本病的发病基础是胆道梗阻及细菌感染。当急性胆管炎时，如胆道梗阻未解除，胆管内细菌引起的感染没有得到控制，逐渐发展至急性化脓性胆管炎并威胁病人生命。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "病因在我国最常见的原因是肝内胆管结石，其次为胆道寄生虫和胆管狭窄。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "在国外，恶性肿瘤、胆道良性病变引起狭窄、先天性胆道解剖异常、原发性硬化性胆管炎等较常见。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 典型临床表现",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "多数病人有较长胆道感染病史和急诊或择期胆道手术史。本病除有急性胆管炎的Charcot三联症（腹痛、寒战高热、黄疸）外，还有休克、神经中枢系统受抑制表现，称为Reynolds五联征。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 分型",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "本病可分为肝外梗阻和肝内梗阻两种，肝外梗阻腹痛、寒战高热、黄疸均较明显，肝内梗阻则主要表现为寒战高热，可有腹痛，黄疸较轻。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 体格检查",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "体温常呈弛张热或持续升高达39℃～40℃以上，脉搏快而弱，血压降低。嘴唇发绀，指甲床青紫，全身皮肤可能有出血点和皮下瘀斑。剑突下或右上腹有压痛，或可有腹膜刺激征。肝常肿大并有压痛和叩击痛。肝外梗阻可触及肿大的胆囊。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "结合病史及上述临床表现，以及下列辅助检查可以诊断。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 实验室检查",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "白细胞计数升高，可超过20×10<sup>9</sup> /L，中性粒细胞比例升高；肝功能有不同程度的损害，凝血酶原时间延长。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. B超",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "能及时了解胆道梗阻部位、肝内外胆管扩张情况及病变性质，对诊断很有帮助。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "治疗原则是立即解除胆道梗阻并引流。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 非手术治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "既是治疗手段，又可作为手术前准备。主要包括：尽快恢复血容量、联合应用足量抗生素、纠正水电解质和酸碱失衡、对症治疗。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 紧急胆管减压引流",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "包括胆总管切开减压、T管引流、胆管引流、 ENBD、 PTCD。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 后续治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "急诊胆管减压引流一般不可能完全去除病因，如病人一般情况恢复，宜在1～3个月后根据病因选择彻底的手术治疗。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 最常见的病因：肝内胆管结石。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. Reynolds五联征与Charcot三联征。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Charcot三联征"
                                                                    },
                                                                    {
                                                                        "text": "一般的胆管炎"
                                                                    },
                                                                    {
                                                                        "text": "腹痛、高热寒战、黄疸"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Reynolds五联征"
                                                                    },
                                                                    {
                                                                        "text": "急性梗阻性化脓性胆管炎"
                                                                    },
                                                                    {
                                                                        "text": "Charcot 三联症+休克+神经系统受抑制"
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
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "治疗原则：立即解除胆道梗阻并引流。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第二十一章",
                                "text": "胆管癌",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "胆管癌"
                                                    },
                                                    {
                                                        "text": "1. 临床表现2. 诊断3. 治疗"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "胆管癌是指发生在肝外胆管，即左、声肝管至胆总管下端的恶性肿瘤。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、临床表现及诊断",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "临床表现",
                                                                "rowSpan": 4
                                                            },
                                                            {
                                                                "text": "黄疸"
                                                            },
                                                            {
                                                                "text": "无痛性进行性加重的黄疸"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "胆囊肿大"
                                                            },
                                                            {
                                                                "text": "上段胆管癌（肝门部胆管癌）：胆囊不可触及；中、下段胆管癌：可触及肿大的胆囊"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肝大"
                                                            },
                                                            {
                                                                "text": "肋缘下可触及肝脏，黄疸时间较长可出现腹水或双下肢浮肿"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "胆道感染"
                                                            },
                                                            {
                                                                "text": "如发生，可出现典型Charcot三联症（腹痛、寒战高热、黄疸），甚至出现休克"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "辅助检查"
                                                            },
                                                            {
                                                                "text": "B超检查（首选）、肝功能、凝血功能、CA19-9、ERCP、CT、 MRI等",
                                                                "colSpan": 2
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "胆管癌化学治疗和放射治疗效果不肯定，主要采取手术治疗，各个部位的切除手术方法不尽相同。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 胆管癌切除手术应争取作根治性切除，即使姑息性切除也比单纯引流疗效好。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "上段胆管癌"
                                                                    },
                                                                    {
                                                                        "text": "根据Bismuth-Corlett分型采用不同的切除手术"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "中段胆管癌"
                                                                    },
                                                                    {
                                                                        "text": "切除肿瘤及距肿瘤边缘0.5 cm以上的胆管，肝十二指肠韧带“脉络化”，肝总管-空肠吻合术"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "下段胆管癌"
                                                                    },
                                                                    {
                                                                        "text": "需行胰十二指肠切除术"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 扩大根治术",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "适用于能根治切除，但有邻近脏器或血管侵犯、区域淋巴结转移、无远处转移的胆管癌。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 减黄手术",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "为解除胆道梗阻，可行各种肝管空肠吻合术。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "4. 胃空肠吻合术"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "5. 非手术胆道引流"
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1.胆管癌典型临床表现：无痛性进行性加重的黄疸"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2.有无胆囊肿大是鉴别上段胆管癌（肝门部胆管癌）与中、下段胆管癌的重要体征。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "\n"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第二十二章",
                                "text": "急性胰腺炎",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "急性胰腺炎"
                                                    },
                                                    {
                                                        "text": "1. 病因和发病机制2. 病理3. 临床表现4. 辅助检查5. 诊断与鉴别诊断6. 主要并发症7. 非手术治疗8. 手术治疗的适应证及手术方式"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因和发病机制",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 病因",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胆石症与胆道疾病"
                                                                    },
                                                                    {
                                                                        "text": "其中胆石症最常见。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "大量饮酒和暴饮暴食"
                                                                    },
                                                                    {
                                                                        "text": "两者可引起胰液分泌增加，同时可引起十二指肠乳头水肿和Oddi括约肌痉挛，导致胰液和胆汁排泄不畅，引发急性胰腺炎。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胰管阻塞"
                                                                    },
                                                                    {
                                                                        "text": "胰管结石、胰管狭窄、肿瘤均可导致胰管阻塞，导致胰液排泄不畅。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "手术和创伤"
                                                                    },
                                                                    {
                                                                        "text": "上腹部钝器伤、胰胆或胃手术、ERCP检查后，可直接或间接损伤胰腺组织与胰腺的血供引起胰腺炎。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "其他"
                                                                    },
                                                                    {
                                                                        "text": "饮食因素、感染因素、药物因素、高钙血症等"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 发病机制",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "在正常情况下，胰液中的酶原在十二指肠内被激活方有消化功能。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "各种胰酶将通过不同途径相继提前在胰管或腺泡内被激活，将对机体产生局部和全身损害。局部 “自身消化”，造成组织细胞坏死。胰液中的各种酶被激活后发挥作用的共同结果是胰腺和胰周组织广泛充血、水肿甚至出血、坏死，并在腹腔和腹膜后渗出大量的液体。",
                                                                "content": [
                                                                    {
                                                                        "type": "table",
                                                                        "content": [
                                                                            {
                                                                                "content": [
                                                                                    {
                                                                                        "text": "磷脂酶A"
                                                                                    },
                                                                                    {
                                                                                        "text": "产生有细胞毒性的溶血卵磷脂，溶解破坏细胞膜和线粒体膜的脂蛋白结构，致细胞死亡"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "content": [
                                                                                    {
                                                                                        "text": "弹力蛋白酶"
                                                                                    },
                                                                                    {
                                                                                        "text": "破坏血管壁和胰腺导管，使胰腺出血和坏死"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "content": [
                                                                                    {
                                                                                        "text": "胰舒血管素"
                                                                                    },
                                                                                    {
                                                                                        "text": "使血管扩张，通透性增加"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "content": [
                                                                                    {
                                                                                        "text": "脂肪酶"
                                                                                    },
                                                                                    {
                                                                                        "text": "将脂肪分解成脂肪酸后，与钙离子结合形成脂肪酸钙，可使血钙降低"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "content": [
                                                                                    {
                                                                                        "text": "胰蛋白酶"
                                                                                    },
                                                                                    {
                                                                                        "text": "细胞内的自身消化"
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
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、病理",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "基本病理改变是腺呈不同程度的水肿、充血、出血和坏死。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 急性水肿性胰腺炎：病变轻，多局限在体尾部，以水肿、充血为主。胰腺肿胀变硬，充血，被膜紧张，其下可有积液。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 急性出血坏死性胰腺炎：病变以胰腺实质出血、坏死为特征。胰腺肿胀，呈暗紫色，分叶结构模糊，坏死灶呈灰黑色，严重者整个胰腺变黑。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 临床表现",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "症状",
                                                                        "rowSpan": 6
                                                                    },
                                                                    {
                                                                        "text": "腹痛"
                                                                    },
                                                                    {
                                                                        "text": "是本病的主要表现和首发症状，常于饱餐、高脂饮食或饮酒后突然发作，腹痛剧烈。疼痛部位多位于左上腹部或中上腹部，可向腰背部放射，取弯腰抱膝位可减轻疼痛。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹胀"
                                                                    },
                                                                    {
                                                                        "text": "与腹痛同时存在。腹膜后炎症越严重，腹胀越明显。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "恶心、呕吐"
                                                                    },
                                                                    {
                                                                        "text": "早期即可出现，常与腹痛伴发。呕吐后腹痛不缓解。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "发热"
                                                                    },
                                                                    {
                                                                        "text": "多数患者有中度以上发热，持续3～5天。重症坏死性胰腺炎，可出现持续性高热。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "低血压或休克"
                                                                    },
                                                                    {
                                                                        "text": "重症胰腺炎常发生。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "水、电解质、酸碱平衡及代谢紊乱"
                                                                    },
                                                                    {
                                                                        "text": "多有轻重不等的脱水，低血钾。重者尚有明显脱水、代谢性酸中毒，低钙血症，血糖升高。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "体征",
                                                                        "rowSpan": 2
                                                                    },
                                                                    {
                                                                        "text": "腹膜炎体征"
                                                                    },
                                                                    {
                                                                        "text": "轻症患者腹部体征较轻，重症胰腺炎患者上腹或全腹压痛明显，并有肌紧张和反跳痛，可出现移动性浊音。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Grey-Turner征"
                                                                    },
                                                                    {
                                                                        "text": "外溢的胰液经腹膜后途径渗入皮下造成出血，在腰部、季肋部和下腹部皮肤出现大片青紫色瘀斑；重型胰腺炎体征。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Cullen征"
                                                                    },
                                                                    {
                                                                        "text": "外溢的胰液经腹膜后途径渗入皮下造成出血，在脐周皮肤出现大片青紫色瘀斑；重型胰腺炎体征。"
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
                                        "type": "h1",
                                        "text": "四、辅助检查",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 实验室检查",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "血、尿淀粉酶是检测胰腺炎最常用的诊断方法。",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": ""
                                                                            },
                                                                            {
                                                                                "text": "升高"
                                                                            },
                                                                            {
                                                                                "text": "峰值"
                                                                            },
                                                                            {
                                                                                "text": "持续时间"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "血清淀粉酶（大于正常值3倍可确诊）"
                                                                            },
                                                                            {
                                                                                "text": "6~12h"
                                                                            },
                                                                            {
                                                                                "text": "24h达峰值，48h开始下降"
                                                                            },
                                                                            {
                                                                                "text": "3~5d"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "尿淀粉酶"
                                                                            },
                                                                            {
                                                                                "text": "12~24h"
                                                                            },
                                                                            {
                                                                                "text": "48h达峰值，下降缓慢"
                                                                            },
                                                                            {
                                                                                "text": "3~10d"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "血清脂肪酶"
                                                                            },
                                                                            {
                                                                                "text": "24~72h"
                                                                            },
                                                                            {
                                                                                "text": ""
                                                                            },
                                                                            {
                                                                                "text": "7~10d"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "common",
                                                                        "text": " ",
                                                                        "content": [
                                                                            {
                                                                                "type": "table",
                                                                                "content": [
                                                                                    {
                                                                                        "content": [
                                                                                            {
                                                                                                "text": "血清淀粉酶"
                                                                                            },
                                                                                            {
                                                                                                "text": "尿淀粉酶"
                                                                                            },
                                                                                            {
                                                                                                "text": "血清脂肪酶"
                                                                                            },
                                                                                            {
                                                                                                "text": "CRP"
                                                                                            },
                                                                                            {
                                                                                                "text": "WBC"
                                                                                            },
                                                                                            {
                                                                                                "text": "血糖"
                                                                                            },
                                                                                            {
                                                                                                "text": "血钙"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "content": [
                                                                                            {
                                                                                                "text": "↑"
                                                                                            },
                                                                                            {
                                                                                                "text": "↑"
                                                                                            },
                                                                                            {
                                                                                                "text": "↑"
                                                                                            },
                                                                                            {
                                                                                                "text": "↑"
                                                                                            },
                                                                                            {
                                                                                                "text": "↑"
                                                                                            },
                                                                                            {
                                                                                                "text": "↑"
                                                                                            },
                                                                                            {
                                                                                                "text": "↓"
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
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 腹部B超：是首选的影像学诊断方法，可发现胰腺肿大和胰周液体积聚。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 增强CT扫描：是最具诊断价值的影像学检查，不仅能诊断急性胰腺炎，而且对鉴别水肿性和出血坏死性提供很有价值的依据，是诊断胰腺坏死的最佳方法。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "五、诊断与鉴别诊断",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": ""
                                                                            },
                                                                            {
                                                                                "text": "急性水肿型胰腺炎"
                                                                            },
                                                                            {
                                                                                "text": "出血坏死型胰腺炎"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "病情"
                                                                            },
                                                                            {
                                                                                "text": "轻型"
                                                                            },
                                                                            {
                                                                                "text": "重型"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "位置"
                                                                            },
                                                                            {
                                                                                "text": "多局限于胰腺体尾部或整个胰腺"
                                                                            },
                                                                            {
                                                                                "text": "严重者波及整个胰腺"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "病变特征"
                                                                            },
                                                                            {
                                                                                "text": "胰腺肿大、水肿、分叶模糊、质脆，胰周少量脂肪坏死"
                                                                            },
                                                                            {
                                                                                "text": "实质出血、坏死为特征，严重者整个胰腺变黑"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "症状和体征"
                                                                            },
                                                                            {
                                                                                "text": "腹痛、腹泻、恶心、呕吐，黄疸、发热等"
                                                                            },
                                                                            {
                                                                                "text": "除以上症状外，还可出现烦躁不安、四肢厥冷、皮肤呈斑点状等休克症状，特有的Cullen征，Grey-Turner征"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "腹膜炎体征"
                                                                            },
                                                                            {
                                                                                "text": "限于上腹，体征轻"
                                                                            },
                                                                            {
                                                                                "text": "范围宽，体征重"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "腹水"
                                                                            },
                                                                            {
                                                                                "text": "若有则为淡黄色"
                                                                            },
                                                                            {
                                                                                "text": "血性或脓性"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "实验室检查"
                                                                            },
                                                                            {
                                                                                "text": "WBC升高，血、尿淀粉酶升高"
                                                                            },
                                                                            {
                                                                                "text": "除以上表现外，血钙显著下降（2mmol/L以下），血糖>11.2mmol/L（无糖尿病史）"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "common",
                                                                        "text": "六、主要并发症"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 胰腺及胰周组织坏死",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "指胰腺实质的弥漫性或局灶性坏死，伴胰周（包括腹膜后间隙）脂肪坏死。根据有无感染又分为感染性和无菌性胰腺坏死。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 胰腺及胰周脓肿",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "指胰腺和（或）胰腺周围的包裹性积脓，由胰腺组织和（或）:胰周组织坏死液化继发感染所致，脓液培养有细菌或真菌生长。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 急性胰腺假性囊肿",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "胰腺周围液体积聚，被纤维组织包裹形成假性囊肿。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "4. 胃肠道瘘",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "胰液的消化和感染的腐蚀均可使胃肠道壁坏死、穿孔而发生瘘。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "5. 出血",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "由于胰液的消化作用，有时也会造成腹腔或腹膜后的大出血。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "七、治疗"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 非手术治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "适应于急性胰腺炎全身反应期、水肿性及尚无感染的出血坏死性胰腺炎。",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "禁食、胃肠减压"
                                                                            },
                                                                            {
                                                                                "text": "持续胃肠减压可防止呕吐、减轻腹胀并增加回心血量。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "补液、防治休克"
                                                                            },
                                                                            {
                                                                                "text": "静脉输液，补充电解质，纠正酸中毒，预防治疗低血压，维持循环稳定，改善微循环。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "镇痛解痉"
                                                                            },
                                                                            {
                                                                                "text": "在诊断明确的情况下给予止痛药，同时给予解痉药。禁用吗啡，以免引起Oddi括约肌痉挛。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "抑制胰腺分泌"
                                                                            },
                                                                            {
                                                                                "text": "生长抑素及其拟似物。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "营养支持"
                                                                            },
                                                                            {
                                                                                "text": "禁食期主要靠完全肠外营养。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "抗生素的应用"
                                                                            },
                                                                            {
                                                                                "text": "对重症急性胰腺炎，应经静脉使用致病菌敏感广谱抗生素。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "中药治疗"
                                                                            },
                                                                            {
                                                                                "text": "有一定复辅助治疗作用。"
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
                                                "type": "h2",
                                                "text": "2. 手术治疗",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）手术适应证",
                                                        "text": "①不能排除其他急腹症时；②胰腺和胰周坏死组织继发感染；③经非手术治疗，病情继续恶化；④暴发性胰腺炎经过短期（24小时）非手术治疗多器官功能障碍仍不能得到纠正；⑤伴胆总管下端梗阻或胆道感染者；⑥合并肠穿孔、大出血或胰腺假性囊肿。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（2）手术方式",
                                                        "text": "最常用的是坏死组织清除加引流术，同时行胃造瘘、空肠造瘘（肠内营养通道），酌情行胆道引流术；若继发肠炎，可将切口外置或行近端造瘘术；形成假性囊肿者，可酌情行内、外引流术；胆源性胰腺炎的处理宜急诊或早期（72小时内）手术，取出结石，解除梗阻，畅通引流，并清除坏死组织作广泛引流。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1.我国最常见的病因：胆石症。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2.典型的临床表现： 饱餐、高脂饮食或饮酒后突然发生左上腹部或中上腹部剧烈疼痛，可向腰背部放射，取弯腰抱膝位可减轻疼痛。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3.重型胰腺炎的重要体征：Grey-Turner征、Cullen征、血钙降低。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "4.重要生化指标：血淀粉酶、脂肪酶。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "5.常见体征归纳如下表：",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Murphy 征"
                                                                    },
                                                                    {
                                                                        "text": "吸气过程中胆囊下移时，碰到用力按压的拇指引起疼痛，因剧烈疼痛吸气终止"
                                                                    },
                                                                    {
                                                                        "text": "急性胆囊炎"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Charcot 三联征"
                                                                    },
                                                                    {
                                                                        "text": "腹痛、寒战高热、黄疸"
                                                                    },
                                                                    {
                                                                        "text": "急性胆管炎"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Reynolds五联征"
                                                                    },
                                                                    {
                                                                        "text": "腹痛、寒战高热、黄疸、休克、神经系统受抑制"
                                                                    },
                                                                    {
                                                                        "text": "急性梗阻性化脓性胆管炎"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Grey-Turner 征"
                                                                    },
                                                                    {
                                                                        "text": "在腰部、季肋部和下腹部出现大片青紫色瘀斑"
                                                                    },
                                                                    {
                                                                        "text": "出血坏死型胰腺炎"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Cullen 征"
                                                                    },
                                                                    {
                                                                        "text": "在脐周皮肤出现大片青紫色瘀斑"
                                                                    },
                                                                    {
                                                                        "text": "出血坏死型胰腺炎"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Whipple 三联征"
                                                                    },
                                                                    {
                                                                        "text": "1.发性周期性发作低血糖症状；2.发作时血糖低于2.78mmol/L；3.口服或静脉注射葡萄糖后，症状可立即消失"
                                                                    },
                                                                    {
                                                                        "text": "胰岛素瘤"
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
                                "title": "第二十三章",
                                "text": "胰腺癌与壶腹周围癌",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "胰腺癌与壶腹周围癌"
                                                    },
                                                    {
                                                        "text": "1. 临床表现2. 诊断3. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、胰腺癌",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 临床表现",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "上腹疼痛不适"
                                                                    },
                                                                    {
                                                                        "text": "是常见的首发症状。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "黄疸"
                                                                    },
                                                                    {
                                                                        "text": "是胰头癌最主要的临床表现，呈进行性加重。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "消化道症状和消瘦"
                                                                    },
                                                                    {
                                                                        "text": "消化道症状如食欲不振、腹胀、消化不良、腹泻或便秘。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 体征：典型的胰腺癌可见消瘦，上腹压痛和黄疸。可扪及囊状、无压痛、表面光滑并可推移的肿大胆囊，称为Courvoisier征。是诊断胰腺癌的重要体征。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "诊断主要依据临床表现、体征和影像学检查。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）实验室检查",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "CA19-9最常用于胰腺癌的辅助诊断和术后随访"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）影像学检查：影像学诊断技术是胰头癌的定位和定性诊断的重要手段",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "B超"
                                                                            },
                                                                            {
                                                                                "text": "可显示肝内、外胆管扩张，胆囊胀大，胰管扩张（正常直径＞3 mm），胰头部位病变，观察有无肝转移和淋巴结转移"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "CT"
                                                                            },
                                                                            {
                                                                                "text": "优于B超，且不受肠道气体的影响，对判定肿瘤可切除性具有重要意义"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "ERCP"
                                                                            },
                                                                            {
                                                                                "text": "可显示胆管和胰管近壶腹侧影像或肿瘤以远的胆、胰管扩张的影像，可能引起急性胰腺炎或胆道感染"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "PET"
                                                                            },
                                                                            {
                                                                                "text": "可显示早期胰腺癌，淋巴结转移及远处转移"
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
                                                "type": "h2",
                                                "text": "4. 治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "手术切除是胰头癌有效的治疗方法。常用的手术方式：①胰头十二指肠切除术（Whipple",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "手术）；②保留幽门的胰头十二指肠切除术（PPPD）；③姑息性手术。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、壶腹周围癌",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "壶腹周围癌主要包括壶腹癌、胆总管下端癌和十二指肠腺癌。壶腹周围癌的恶性程度明显低于胰头癌，手术切除率和5年生存率都明显高于胰头癌。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 临床表现：进行加重的黄疸、消瘦和腹痛，与胰头癌的临床表现易于混淆。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 诊断：根据上述症状及辅助检查可以诊断，化验及影像学检查方法与胰头癌基本相同。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 治疗：行Whipple手术或PPPD，远期效果较好，5年生存率可达40%～60%。"
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1.胰腺癌与胆管癌【上段胆管癌（肝门部胆管癌）与中、下段胆管癌】的鉴别。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "疾病名称"
                                                                    },
                                                                    {
                                                                        "text": "胆囊肿大"
                                                                    },
                                                                    {
                                                                        "text": "腹痛（参考）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "上段胆管癌（肝门部胆管癌）"
                                                                    },
                                                                    {
                                                                        "text": "（-）"
                                                                    },
                                                                    {
                                                                        "text": "（-）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "中、下段胆管癌"
                                                                    },
                                                                    {
                                                                        "text": "（+）"
                                                                    },
                                                                    {
                                                                        "text": "（-）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胰腺癌"
                                                                    },
                                                                    {
                                                                        "text": "（+）"
                                                                    },
                                                                    {
                                                                        "text": "（+）"
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
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2.胰头癌或壶腹周围癌典型临床表现：进行性加重的黄疸。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3.诊断胰腺癌重要体征：Courvoisier征。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第二十四章",
                                "text": "克罗恩病",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "克罗恩病"
                                                    },
                                                    {
                                                        "text": "1. 病理2. 临床表现3. 辅助检查4. 诊断与鉴别诊断5. 并发症6. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病理",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "病变多表现为同时累及回肠末段与邻近右侧结肠。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "大体形态上，克罗恩病特点为：①病变呈节段性或跳跃性，而不呈连续性；②黏膜溃疡的特点：鹅卵石样外观；③病变累及肠壁全层，肠壁增厚变硬，肠腔狭窄。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "组织学上，克罗恩病的特点为：①非干酪性肉芽肿；②裂隙溃疡，呈缝隙状，可深达黏膜下层甚至肌层；③肠壁各层炎症，伴固有膜底部和黏膜下层淋巴细胞聚集、黏膜下层增宽、淋巴管扩张及神经节炎等。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "消化系统表现",
                                                                "rowSpan": 5
                                                            },
                                                            {
                                                                "text": "腹痛"
                                                            },
                                                            {
                                                                "text": "为最常见症状。多位于右下腹或脐周，间歇性发作。常于进餐后加重，排便或肛门排气后缓解。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹泻"
                                                            },
                                                            {
                                                                "text": "主要由病变肠段炎症渗出、蠕动增加及继发性吸收不良引起，粪便多为糊状，无脓血和黏液。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹部包块"
                                                            },
                                                            {
                                                                "text": "由于肠粘连、肠壁增厚、肠系膜淋巴结肿大、内瘘或局部脓肿形成所致。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "瘘管形成"
                                                            },
                                                            {
                                                                "text": "是克罗恩病的特征性临床表现，因透壁性炎性病变穿透肠壁全层至肠外组织或器官而成。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肛门周围病变"
                                                            },
                                                            {
                                                                "text": "肛门周围瘘管、脓肿形成及肛裂等。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "全身表现",
                                                                "rowSpan": 2
                                                            },
                                                            {
                                                                "text": "发热"
                                                            },
                                                            {
                                                                "text": "与肠道炎症活动及继发感染有关。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "营养障碍"
                                                            },
                                                            {
                                                                "text": "由慢性腹泻、食欲减退及慢性消耗等因素所致。主要表现为：体重下降、贫血、低蛋白血症。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肠外表现"
                                                            },
                                                            {
                                                                "text": "以口腔黏膜溃疡、皮肤结节性红斑、关节炎及眼病为常见。",
                                                                "colSpan": 2
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "common",
                                                        "text": "三、辅助检查",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "实验室检查"
                                                                            },
                                                                            {
                                                                                "text": "贫血、血沉加快、C-反应蛋白升高、白细胞升高、粪便隐血试验阳性；抗酿酒酵母抗体（ASCA）阳性。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "影像学检查"
                                                                            },
                                                                            {
                                                                                "text": "肠道炎性病变，可见黏膜皱襞粗乱、纵行性溃疡或裂沟、鹅卵石征、假息肉、多发性狭窄或肠壁僵硬、瘘管形成等X线征象。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "结肠镜检查"
                                                                            },
                                                                            {
                                                                                "text": "病变呈节段性、非对称性分布，见阿弗他溃疡或纵行溃疡、鹅卵石样改变，肠腔狭窄或肠壁僵硬，炎性息肉，病变之间黏膜外观正常。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "活组织检查"
                                                                            },
                                                                            {
                                                                                "text": "典型的病理组织学改变是非干酪样肉芽肿。"
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
                                        "type": "h1",
                                        "text": "四、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "对慢性起病，反复发作性右下腹或脐周痛、腹泻、体重下降，特别是伴有肠梗阻、腹部压痛、腹块、肠瘘、肛周病变、发热等表现者，临床上应考虑本病。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "本病诊断，主要根据临床表现、X线检查、结肠镜检查和活组织检查所见进行综合分析。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "需与各种肠道感染性或非感染性炎症疾病及肠道肿瘤鉴别。应特别注意，急性发作时与阑尾炎；慢性发作时与肠结核及肠道淋巴瘤；病变单纯累及结肠者与溃疡性结肠炎进行鉴别。在我国，与肠结核的鉴别至关重要。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、并发症",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "肠梗阻最常见，其次是腹腔内脓肿，偶可并发急性穿孔或大量便血。直肠或结肠黏膜受累者可发生癌变。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "六、治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 一般治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "必须戒烟。强调营养支持，一般给高营养低渣饮食。腹痛、腹泻必要时可酌情使用抗胆碱能药物或止泻药，合并感染者静脉途径给予广谱抗生素。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 药物治疗",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）活动期治疗",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "氨基水杨酸制剂"
                                                                            },
                                                                            {
                                                                                "text": "轻、中度患者，柳氮磺吡啶、美沙拉嗪等"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "糖皮质激素"
                                                                            },
                                                                            {
                                                                                "text": "中～重度患者，对控制病情活动有较好疗效"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "免疫抑制剂"
                                                                            },
                                                                            {
                                                                                "text": "硫唑嘌呤或巯嘌呤适用于对激素治疗无效或对激素依赖的患者"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "抗菌药物"
                                                                            },
                                                                            {
                                                                                "text": "硝基咪唑类、喹诺酮类药物应用于本病有一定疗效"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "生物制剂"
                                                                            },
                                                                            {
                                                                                "text": "近年已逐步在临床推广使用"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）缓解期治疗 ",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "用氨基水杨酸制剂或糖皮质激素取得缓解者，可用氨基水杨酸制剂维持缓解，剂量与诱导缓解的剂量相同。",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "因糖皮质激素无效/依赖而加用硫唑嘌呤或巯嘌呤取得缓解者，继续以相同剂量硫唑嘌呤或巯嘌呤维持缓解。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 手术治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "手术后复发率高，故手术适应证主要是针对并发症，包括完全性肠梗阻、瘘管与腹腔脓肿、急性穿孔或不能控制的大量出血。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 克罗恩病的好发部位、病理特点"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 克罗恩病的内镜下表现：病变呈节段性、非对称性分布，见纵行溃疡、鹅卵石样改变。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第二十五章",
                                "text": "溃疡性结肠炎",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "溃疡性结肠炎"
                                                    },
                                                    {
                                                        "text": "1. 病理2. 临床表现3. 辅助检查4. 诊断与鉴别诊断5. 并发症6. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病理",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "病变主要限于大肠黏膜与黏膜下层，呈连续性弥漫性分布。病变多自直肠开始，逆行向近段发展，甚至累及全结肠及末段回肠。它可发生在结、直肠的任何部位，其中以直肠和乙状结肠最为常见。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "肉眼见黏膜弥漫性充血、水肿，表面呈细颗粒状，脆性增加、出血，糜烂及溃疡。由于结肠病变一般限于黏膜与黏膜下层，很少深入肌层。故并发结肠穿孔、瘘管等均少见。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "消化系统表现",
                                                                "rowSpan": 4
                                                            },
                                                            {
                                                                "text": "腹泻和黏液脓血便"
                                                            },
                                                            {
                                                                "text": "见于绝大多数患者。腹泻主要与炎症导致大肠黏膜对水钠吸收障碍以及结肠运动功能失常有关，粪便中的黏液脓血则为炎症渗出、黏膜糜烂及溃疡所致。粘液脓血是本病活动期的重要表现。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹痛"
                                                            },
                                                            {
                                                                "text": "一般诉有轻中度腹痛，多位于左下腹或下腹的阵痛，有疼痛便意便后缓解的规律，常有里急后重。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "其他症状"
                                                            },
                                                            {
                                                                "text": "可有腹胀，严重病例有食欲不振、恶心、呕吐。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "体征"
                                                            },
                                                            {
                                                                "text": "轻、中型患者仅有左下腹轻压痛；重型和暴发型患者常有明显压痛和鼓肠。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "全身表现"
                                                            },
                                                            {
                                                                "text": "一般出现在中、重型患者。中、重型患者活动期常有低度至中度发热，高热多提示合并症或见于急性暴发型。重症或病情持续活动可出现衰弱、消瘦、贫血、低蛋白血症、水与电解质平衡紊乱等表现。",
                                                                "colSpan": 2
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肠外表现"
                                                            },
                                                            {
                                                                "text": "外周关节炎、结节性红斑、坏疽性脓皮病、巩膜外层炎、前葡萄膜炎、口腔复发性溃疡等。",
                                                                "colSpan": 2
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、临床分型",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 临床类型",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）初发型，指无既往史的首次发作；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）慢性复发型，临床最多见，发作期与缓解期交替；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）慢性持续型，症状持续，间以症状加重的急性发作；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4）急性暴发型，少见，急性起病，病情严重，全身毒血症状明显，可伴有中毒性巨结肠、肠穿孔、败血症等并发症。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 临床严重程度：轻度：腹泻每日4次以下，便血轻或无，无发热、脉速，贫血无或轻，血沉正常；重度：腹泻每日6次以上，并有明显黏液脓血便，体温＞37.5℃、脉搏＞90次/分，血红蛋白＜100g/L，血沉＞30mm/h；中度：介于轻度与重度之间。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、辅助检查",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "血液检查"
                                                            },
                                                            {
                                                                "text": "血红蛋白下降、白细胞升高、血沉加快和C反应蛋白增高"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "粪便检查"
                                                            },
                                                            {
                                                                "text": "肉眼观常有黏液脓血，显微镜检见红细胞和脓细胞"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "自身抗体检测"
                                                            },
                                                            {
                                                                "text": "外周型抗中性粒细胞胞浆抗体（pANCA）阳性"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "结肠镜检查"
                                                            },
                                                            {
                                                                "text": "本病病变呈连续性、弥漫性分布，从肛端直肠开始逆行向上扩展①黏膜血管纹理模糊、紊乱或消失、充血、水肿、易脆、出血及脓性分泌物附着，并常见黏膜粗糙，呈细颗粒状；②病变明显处见弥漫性糜烂和多发性浅溃疡；③慢性病变见假息肉及桥状黏膜，结肠袋往往变浅、变钝或消失。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "结肠镜活检组织学检查"
                                                            },
                                                            {
                                                                "text": "见弥漫性慢性炎症细胞浸润，活动期表现为隐窝炎、隐窝脓肿，慢性期表现为隐窝结构紊乱、杯状细胞减少。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "X线钡剂灌肠检查"
                                                            },
                                                            {
                                                                "text": "黏膜粗乱和（或）颗粒样改变、多发性浅溃疡等"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "具有持续或反复发作腹泻和黏液脓血便、腹痛、里急后重，伴有（或不伴）不同程度全身症状者，在排除急性自限性结肠炎、阿米巴痢疾、慢性血吸虫病、肠结核等感染性结肠炎及结肠克罗恩病、缺血性肠炎、放射性肠炎等基础上，具有上述结肠镜检查重要改变中至少1项及黏膜活检组织学所见可以诊断本病"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "需与急性自限性结肠炎、阿米巴肠炎、血吸虫病、克罗恩病（Crohn病）、大肠癌、肠易激综合征、其他感染性肠炎（如抗生素相关性肠炎、肠结核、真菌性肠炎等）、缺血性结肠炎、放射性肠炎、过敏性紫癜、胶原性结肠炎、贝赫切特病、结肠息肉病、结肠憩室炎以及HIV感染合并的结肠炎等疾病相鉴别。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "六、并发症",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "中毒性巨结肠"
                                                            },
                                                            {
                                                                "text": "多发生在暴发型或重症溃疡性结肠炎患者，此时结肠病变广泛而严重，累及肌层与肠肌神经丛，肠壁张力减退，结肠蠕动消失，肠内容物与气体大量积聚，引起急性结肠扩张，一般以横结肠为最严重。常因低钾、钡剂灌肠、使用抗胆碱能药物或阿片类制剂而诱发。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "直肠结肠癌变"
                                                            },
                                                            {
                                                                "text": "多见于广泛性结肠炎、幼年起病而病程漫长者。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "其他并发症"
                                                            },
                                                            {
                                                                "text": "肠大出血、肠穿孔多，肠梗阻少见。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "七、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "治疗目的是控制急性发作，维持缓解，减少复发，防治并发症。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 一般治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "强调休息、饮食和营养。重症或暴发型患者应入院治疗，及时纠正水、电解质平衡紊乱，贫血者可输血，低蛋白血症者输注入血清白蛋白。病情严重应禁食，并予完全胃肠外营养治疗。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "对腹痛、腹泻的对症治疗，要权衡利弊，使用抗胆碱能药物或止泻药如地芬诺酯（苯乙哌啶）或洛哌丁胺宜慎重，在重症患者应禁用，因有诱发中毒性巨结肠的危险。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 药物治疗",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "氨基水杨酸制剂"
                                                                    },
                                                                    {
                                                                        "text": "柳氮磺吡啶（SASP）是治疗本病的常用药物。主要适用于轻、中度患者或重度经糖皮质激素治疗已有缓解者。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "糖皮质激素"
                                                                    },
                                                                    {
                                                                        "text": "对急性发作期有较好疗效。适用于对氨基水杨酸制剂疗效不佳的轻、中度患者，特别适用于重度患者及急性暴发型患者。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "免疫抑制剂"
                                                                    },
                                                                    {
                                                                        "text": "硫唑嘌呤或巯嘌呤可试用于对激素治疗效果不佳或对激素依赖的慢性持续型病例，加用这类药物后可逐渐减少激素用量甚至停用。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 手术治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "紧急手术指征为：并发大出血、肠穿孔、重型患者特别是合并中毒性巨结肠经积极内科治疗无效且伴严重毒血症状者。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "择期手术指征：①并发结肠癌变；②慢性持续型病例内科治疗效果不理想而严重影响生活质量，或虽然用糖皮质激素可控制病情但糖皮质激素不良反应太大不能耐受者。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1.溃疡性结肠炎的好发部位、病理特点、临床特点"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2.溃疡性结肠炎的内镜下表现。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3.溃疡性结肠炎的药物治疗原则。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "4.肠结核、克罗恩并、溃疡性结肠炎常考鉴别点记忆总结如下：",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": ""
                                                                    },
                                                                    {
                                                                        "text": "肠结核"
                                                                    },
                                                                    {
                                                                        "text": "克罗恩病"
                                                                    },
                                                                    {
                                                                        "text": "溃疡性结肠炎"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "受累部位"
                                                                    },
                                                                    {
                                                                        "text": "回盲部多见"
                                                                    },
                                                                    {
                                                                        "text": "回肠末端为主"
                                                                    },
                                                                    {
                                                                        "text": "直肠、乙状结肠为主"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "溃疡形态"
                                                                    },
                                                                    {
                                                                        "text": "横行，不规则"
                                                                    },
                                                                    {
                                                                        "text": "纵行，节段性"
                                                                    },
                                                                    {
                                                                        "text": "浅溃疡，连续性"
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
                                "title": "第二十六章",
                                "text": "肠易激综合征",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "肠易激综合征"
                                                    },
                                                    {
                                                        "text": "1. 临床表现2. 诊断3. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、临床表现"
                                    },
                                    {
                                        "type": "h1",
                                        "text": "起病隐匿，症状反复发作或慢性迁延，病程可长达数年至数十年，但全身健康状况却不受影响，最主要的临床表现是腹痛与排便习惯和粪便性状的改变。精神、饮食等因素常诱使症状复发或加重。",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹痛"
                                                            },
                                                            {
                                                                "text": "部位不定，以下腹和左下腹多间。多于排便或排气后缓解。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹泻"
                                                            },
                                                            {
                                                                "text": "一般每日3～5次左右，少数严重发作期可达十数次，大多呈稀糊状。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "便秘"
                                                            },
                                                            {
                                                                "text": "排便困难，粪便干结、量少，呈羊粪状或细杆状，表面可附黏液。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "其他消化道症状"
                                                            },
                                                            {
                                                                "text": "多伴腹胀感，可有排便不净感、排便窘迫感。部分患者同时有消化不良症状"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "全身症状"
                                                            },
                                                            {
                                                                "text": "可有失眠、焦虑、抑郁、头昏、头痛等精神症状"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "体征"
                                                            },
                                                            {
                                                                "text": "无明显体征，可在相应部位有轻压痛"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "分型"
                                                            },
                                                            {
                                                                "text": "可分为腹泻型、便秘型和腹泻便秘交替型"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "最新的罗马Ⅲ诊断标准：",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）病程半年以上且近3个月来持续存在腹部不适或腹痛，并伴有下列特点中至少2项：①症状在排便后改善；②症状发生伴随排便次数改变；③症状发生伴随粪便性状改变。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）以下症状不是诊断所必备，但属常见症状，这些症状越多越支持IBS的诊断：①排便频率异常（每天排便＞3次或每周＜3次）；②粪便性状异常（块状/硬便或稀水样便）；③粪便排出过程异常（费力、急迫感、排便不尽感）；④黏液便；⑤胃肠胀气或腹部膨胀感。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）缺乏可解释症状的形态学改变和生化异常。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "治疗主要是积极寻找并去除促发因素和对症治疗，强调综合治疗和个体化的治疗原则。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 一般治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "详细询问病史以求发现促发因素，并设法予以去除。教育患者建立良好的生活习惯。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 针对主要症状的药物治疗",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胃肠解痉药"
                                                                    },
                                                                    {
                                                                        "text": "抗胆碱药物可作为缓解腹痛的短期对症治疗。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "止泻药"
                                                                    },
                                                                    {
                                                                        "text": "适用于腹泻症状较重者，但不宜长期使用。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "泻药"
                                                                    },
                                                                    {
                                                                        "text": "对便秘型患者酌情使用泻药，宜使用作用温和的轻泻剂以减少不良反应和药物依赖性。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "抗抑郁药"
                                                                    },
                                                                    {
                                                                        "text": "对腹痛症状重，上述治疗无效且精神症状明显者可试用。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "其他"
                                                                    },
                                                                    {
                                                                        "text": "肠道菌群调节药如双歧杆菌、乳酸杆菌、酪酸菌等制剂。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 心理和行为疗法",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "症状严重而顽固，经一般治疗和药物治疗无效者应考虑予以心理行为治疗，包括心理治疗、认知疗法、催眠疗法和生物反馈疗法等。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1.功能性疾病，需排除器质性病因。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 最主要的临床表现是腹痛与排便习惯和粪便性状的改变。精神、饮食等因素常诱使症状复发或加重。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3.肠易激综合征——腹痛排便后能缓解；功能性消化不良——腹痛排便后不能缓解。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第二十七章",
                                "text": "肠梗阻",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "肠梗阻"
                                                    },
                                                    {
                                                        "text": "1. 病因和分类2. 病理和病理生理3. 临床表现4. 各种类型肠梗阻的特点5. 诊断6. 治疗"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "任何原因引起的肠内容物通过障碍统称为肠梗阻。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因和分类，及各种类型肠梗阻的特点",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 按肠梗阻发生的基本原因可以分为四类",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "机械性肠梗阻"
                                                                    },
                                                                    {
                                                                        "text": "临床最多见类型，是由于各种原因引起肠腔狭小或不通，使肠内容通过发生障碍。如：①肠腔堵塞，如异物、粪块等；②肠管受压，如粘连及束带压迫、嵌顿疝、肿瘤压迫等；③肠壁病变，如肠套叠、肠扭转等。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "动力性肠梗阻"
                                                                    },
                                                                    {
                                                                        "text": "分为麻痹性与痉挛性两类。麻痹性肠梗阻多发生于低钾血症、腹腔手术后、腹部创伤或弥漫性腹膜炎的病人。痉挛性肠梗阻较为少见，可发生于慢性铅中毒、急性肠炎的病人。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "血运性肠梗阻"
                                                                    },
                                                                    {
                                                                        "text": "是由于肠系膜血管栓塞或血栓形成，使肠管血运障碍，继而发生肠麻痹而使肠内容物不能运行。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "假性肠梗阻"
                                                                    },
                                                                    {
                                                                        "text": "无明显的病因，属慢性疾病，也可能是一种遗传性疾病，表现为反复发作的肠梗阻症状，但十二指肠与结肠蠕动可能正常。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 按肠壁有无血运障碍，分为单纯性和绞窄性二类",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "单纯性肠梗阻"
                                                                    },
                                                                    {
                                                                        "text": "只是肠内容物通过受阻，而无肠管血运障碍。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "绞窄性肠梗阻"
                                                                    },
                                                                    {
                                                                        "text": "梗阻并伴有肠壁血运障碍，可因肠系膜血管受压、血栓形成或栓塞等引起。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 按梗阻的部位",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "分为高位（空肠）梗阻、低位小肠（回肠）和结肠梗阻。后者因有回盲瓣作用，肠内容物只能由小肠进入结肠，而不能返流，故又称“闭袢性梗阻”。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "4. 根据梗阻的程度",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "分为完全性和不完全性肠梗阻。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "5. 按发展过程的快慢",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "分为急性和慢性肠梗阻。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、病理和病理生理",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 局部变化",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "机械性肠梗阻一旦发生，梗阻以上肠蠕动增加，肠腔内因气体和液体积聚而膨胀。肠梗阻部位愈低，时间愈长，肠膨胀愈明显。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "梗阻以下肠管则瘪陷、空虚或仅存积少量粪便。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 全身变化",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）水、电解质和酸碱失衡"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）血容量下降：肠膨胀影响肠壁血运，渗出大量血浆至肠腔和腹腔内，导致血容量下降。如有肠绞窄则丢失大量血浆和血液。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）休克：严重的水、电解质、酸碱失衡、血容量减少、感染、中毒，可引起休克。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4）呼吸和心功能障碍：肠膨胀时腹压升高，横膈上升，影响肺内气体交换，同时使下腔静脉回流减少，心排出量减少。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "记忆"
                                                            },
                                                            {
                                                                "text": "临床表现"
                                                            },
                                                            {
                                                                "text": "详述"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "痛"
                                                            },
                                                            {
                                                                "text": "腹痛"
                                                            },
                                                            {
                                                                "text": "梗阻部位以上强烈肠蠕动，表现为阵发性绞痛。自觉有“气块”在腹中窜动。有时能见到肠型和肠蠕动波。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "吐"
                                                            },
                                                            {
                                                                "text": "呕吐"
                                                            },
                                                            {
                                                                "text": "一般是梗阻部位愈高，呕吐出现愈早、愈频繁。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "胀"
                                                            },
                                                            {
                                                                "text": "腹胀"
                                                            },
                                                            {
                                                                "text": "低位肠梗阻及麻痹性肠梗阻腹胀显著，遍及全腹。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "闭"
                                                            },
                                                            {
                                                                "text": "停止自肛门排气排便"
                                                            },
                                                            {
                                                                "text": "完全性肠梗阻典型表现"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 是否肠梗阻",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "根据腹痛、呕吐、腹胀、停止自肛门排气排便四大症状和腹部可见肠型或蠕动波，肠鸣音亢进等，一般可作出诊断。X线检查对确定有否肠梗阻帮助较大。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 是机械性还是动力性梗阻",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "机械性肠梗阻具有上述典型临床表现，早期腹胀可不显著。麻痹性肠梗阻无阵发性绞痛等肠蠕动亢进的表现，相反为肠蠕动减弱或消失，腹胀显著。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 是单纯性还是绞窄性梗阻",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "有下列表现者，应考虑绞窄性肠梗阻的可能："
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）腹痛发作急骤，起始即为持续性剧烈疼痛，或在阵发性加重之间仍有持续性疼痛；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）病情发展迅速，早期出现休克，抗休克治疗后改善不显著；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）有明显腹膜刺激征，体温上升、脉率增快、白细胞计数增高；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4）腹胀不对称，腹部有局部隆起或触及有压痛的肿块（胀大的肠袢）；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（5）呕吐物、胃肠减压抽出液、肛门排出物为血性，或腹腔穿刺抽出血性液体；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（6）经积极非手术治疗而症状体征无明显改善；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（7）腹部X线检查见孤立、突出胀大的肠袢、不因时间而改变位置。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "4. 是高位还是低位梗阻",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "高位梗阻"
                                                                    },
                                                                    {
                                                                        "text": "呕吐早且频繁，腹胀不明显"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "低位梗阻"
                                                                    },
                                                                    {
                                                                        "text": "腹胀明显，呕吐晚且次数少，并可吐粪样物。X线可见扩张的肠袢在腹中部，呈“阶梯状”排列。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "5. 是完全性还是不完全性梗阻",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "完全梗阻"
                                                                    },
                                                                    {
                                                                        "text": "呕吐频繁，如为低位腹胀明显，完全停止排便、排气"
                                                                    },
                                                                    {
                                                                        "text": "梗阻以上肠袢明显充气扩张，梗阻以下肠管无气体。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "不完全梗阻"
                                                                    },
                                                                    {
                                                                        "text": "梗阻与腹胀都较轻或无呕吐"
                                                                    },
                                                                    {
                                                                        "text": "肠袢充气扩张都较不明显，结肠内仍有其体存在。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "6. 是什么原因引起梗阻",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "应根据年龄、病史、体征、X线、CT等影像学检查等几方面分析。在临床上粘连性肠梗阻最为常见。结肠梗阻多系肿瘤所致，新生婴儿以肠道先天性畸形为多见，2岁以内小儿肠套叠多见，蛔虫团所致的肠梗阻常发生于儿童，老年人则以肿瘤及粪块堵塞为常见。",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "疾病名称"
                                                                            },
                                                                            {
                                                                                "text": "好发人群"
                                                                            },
                                                                            {
                                                                                "text": "特点"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "小肠扭转"
                                                                            },
                                                                            {
                                                                                "text": "青壮年"
                                                                            },
                                                                            {
                                                                                "text": "饱餐后剧烈活动诱发"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "乙状结肠扭转"
                                                                            },
                                                                            {
                                                                                "text": "男性老年人"
                                                                            },
                                                                            {
                                                                                "text": "常有便秘习惯"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "肠套叠"
                                                                            },
                                                                            {
                                                                                "text": "小儿"
                                                                            },
                                                                            {
                                                                                "text": "腹痛，果酱样血便，“腊肠形”肿块"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "common",
                                                                        "text": "五、治疗",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "治疗原则是矫正因肠梗阻所引起的全身生理紊乱和解除梗阻。"
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
                                                "type": "h2",
                                                "text": "1. 基础疗法",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "即不论采用非手术或手术治疗，均需应用的基本处理。主要有：胃肠减压，纠正水、电解质紊乱和酸碱失衡，抗感染，可给予生长抑素减少胃肠液的分泌量以减轻胃肠道的膨胀。止痛剂的应用则应遵循急腹症治疗的原则。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 解除梗阻",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）手术治疗",
                                                        "text": "绞窄性肠梗阻、肿瘤及先天性肠道畸形引起的肠梗阻，以及非手术治疗无效的病人，适应手术治疗。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（2）非手术治疗",
                                                        "text": "主要适用于单纯性粘连性（特别是不完全性）肠梗阻，麻痹性或痉挛性肠梗阻，蛔虫或粪块堵塞引起的肠梗阻，肠结核等炎症引起的不完全性肠梗阻，肠套叠早期等。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 肠梗阻分类及各自临床特点：机械性、动力性、血运性，低位、高位，单纯性、绞窄性。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 临床表现：痛、吐、胀、闭（最具特征）"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3. 粘连性肠梗阻最多见（特别是手术后粘连）"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "4. 重要辅助检查：腹部立位平片"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "5. 几类特殊肠梗阻的特点：小肠扭转、乙状结肠扭转、肠套叠"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第二十八章",
                                "text": "结肠癌",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "结肠癌"
                                                    },
                                                    {
                                                        "text": "1. 病因2. 病理和分期3. 临床表现4. 诊断5. 治疗及预后"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "过多的动物脂肪及动物蛋白饮食，缺乏新鲜蔬菜及纤维素食品；缺乏适度的体力活动。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "遗传性非息肉性结肠癌的错配修复基因突变携带的家族成员，为结肠癌的一组高危人群。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "结肠腺瘤、溃疡性结肠炎以及结肠血吸虫病肉芽肿是结肠癌癌前病变，与结肠癌的发生有较密切的关系。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、病理和分期",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 病理",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）根据肿瘤的大体形态可区分为",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "肿块型"
                                                                            },
                                                                            {
                                                                                "text": "肿瘤向肠腔内生长，好发于右侧结肠，特别是盲肠。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "浸润型"
                                                                            },
                                                                            {
                                                                                "text": "沿肠壁浸润，容易引起肠腔狭窄和肠梗阻，多发生于左侧结肠。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "溃疡型"
                                                                            },
                                                                            {
                                                                                "text": "肿瘤向肠壁深层生长并向周围浸润，是结肠癌常见类型。"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）显微镜下组织学分类",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "腺癌"
                                                                            },
                                                                            {
                                                                                "text": "占结肠癌的大多数。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "粘液癌"
                                                                            },
                                                                            {
                                                                                "text": "预后较腺癌差。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "未分化癌"
                                                                            },
                                                                            {
                                                                                "text": "易侵入小血管和淋巴管，预后最差。"
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
                                                "type": "h2",
                                                "text": "2. 临床病理分期：",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "TNM分期法",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "T代表原发肿瘤，Tx为无法估计原发肿瘤。无原发肿瘤证据为T0；原位癌为Tis；肿瘤侵及黏膜肌层与黏膜下层为T<sub>1</sub>；侵及固有肌层为T<sub>2</sub>；穿透肌层至浆膜下为T<sub>3</sub>；穿透脏层腹膜或侵及其他脏器或组织为T<sub>4</sub>。",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "N为区域淋巴结，Nx为无法估计淋巴结；无淋巴结转移为N<sub>0</sub>；转移区域淋巴结1～3个为N<sub>1</sub>；4个及4个以上区域淋巴结为N<sub>2</sub>。",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "M为远处转移，无法估计远处转移为Mx；无远处转移为M<sub>0</sub>，凡有远处转移为M<sub>1</sub>。"
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
                                        "type": "h1",
                                        "text": "三、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "排便习惯与粪便性状改变"
                                                            },
                                                            {
                                                                "text": "常为最早出现的症状"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹痛"
                                                            },
                                                            {
                                                                "text": "常为定位不确切的持续性隐痛"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹部肿块"
                                                            },
                                                            {
                                                                "text": "多为瘤体本身，有时可能为近侧肠腔内的积粪梗阻"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肠梗阻症状"
                                                            },
                                                            {
                                                                "text": "一般属结肠癌的中晚期症状，多表现为慢性低位不完全肠梗阻"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "全身症状"
                                                            },
                                                            {
                                                                "text": "贫血、消瘦、乏力、低热等"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "common",
                                                        "text": "一般右半结肠癌以全身症状、贫血、腹部肿块为主要表现，左侧结肠癌以肠梗阻、便秘、腹泻、便血等症状为显著。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 高危人群：凡40岁以上有下列表现者，应列为高危人群：",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）Ⅰ级亲属有结直肠癌史者；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）有癌症史或肠道腺瘤或息肉史；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）大便隐血试验阳性者；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4）以下五种表现具两项以上者：粘液血便、慢性腹泻、慢性便秘、慢性阑尾炎史及精神创伤史。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 辅助检查",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）对高危人群，行纤维结肠镜检查或X线钡剂灌肠或气钡双重对比造影检查，不难明确诊断。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（2）B型超声和CT扫描检查",
                                                        "text": "对了解腹部肿块和肿大淋巴结，发现肝内有无转移等均有帮助。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（3）血清癌胚抗原（CEA）值",
                                                        "text": "约45%的结肠癌病人高于正常。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、治疗及预后",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 结肠癌根治性手术切除范围须包括癌肿所在肠袢及其系膜和区域淋巴结。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "右半结肠切除术"
                                                                    },
                                                                    {
                                                                        "text": "适用于盲肠、升结肠、结肠肝曲的癌肿"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "横结肠切除术"
                                                                    },
                                                                    {
                                                                        "text": "适用于横结肠癌"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "左半结肠切除术"
                                                                    },
                                                                    {
                                                                        "text": "适用于结肠脾曲和降结肠癌"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "乙状结肠癌的根治切除术"
                                                                    },
                                                                    {
                                                                        "text": "要根据乙状结肠的长短和癌肿所在的部位进行切除"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 结肠癌并发急性肠梗阻的手术应当在进行胃肠减压、纠正水和电解质紊乱以及酸碱失衡等适当的准备后，早期施行手术。",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）右侧结肠癌作右半结肠切除一期回肠结肠吻合术。如病人情况不许可先作盲肠造口解除梗阻，二期手术行根治性切除。如癌肿不能切除，可切断末端回肠，行近切端回肠横结肠端侧吻合，远切端回肠断端造口。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）左侧结肠癌并发急性肠梗阻时，一般应在梗阻部位的近侧作横结肠造口，在肠道充分准备的条件下，再二期手术行根治性切除。对肿瘤不能切除者，则行姑息性结肠造口。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1.临床表现：排便习惯与粪便性状的改变常为最早出现"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2.左半结肠癌、右半结肠癌的主要临床表现。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3.左半结肠癌、右半结肠癌的好发病理类型。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "4.结肠癌的手术治疗方式。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第二十九章",
                                "text": "肠结核",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "肠结核"
                                                    },
                                                    {
                                                        "text": "1. 病因和发病机制2. 病理3. 临床表现4. 辅助检查5. 诊断与鉴别诊断6. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因和发病机制",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "肠结核主要由人型结核分枝杆菌引起。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "结核分枝杆菌侵犯肠道主要是经口感染。结核分枝杆菌进入肠道后，多在回盲部引起结核病变，可能和下列因素有关：①含结核分枝杆菌的肠内容物在回盲部停留较久，增加了局部肠黏膜的感染机会；②结核分枝杆菌易侵犯淋巴组织，而回盲部有丰富的淋巴组织，因此成为肠结核的好发部位。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "肠结核也可由血行播散引起，见于粟粒性结核；或由腹腔内结核病灶如女性生殖器结核直接蔓延引起。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、病理",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "肠结核主要位于回盲部即回盲瓣及其相邻的回肠和结肠。按大体病理，肠结核可分为以下3型：",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "溃疡型肠结核"
                                                                    },
                                                                    {
                                                                        "text": "充血、水肿及炎症渗出性病变，进一步发展为干酪样坏死，随后形成溃疡"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "增生型肠结核"
                                                                    },
                                                                    {
                                                                        "text": "大量结核肉芽肿和纤维组织增生，使局部肠壁增厚、僵硬"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "混合型肠结核"
                                                                    },
                                                                    {
                                                                        "text": "兼有这两种病变"
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
                                        "type": "h1",
                                        "text": "三、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "本病一般见于中青年，女性稍多于男性。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹痛"
                                                                    },
                                                                    {
                                                                        "text": "多位于右下腹或脐周，间歇性发作，常为痉挛性阵痛伴腹鸣。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹泻与便秘"
                                                                    },
                                                                    {
                                                                        "text": "腹泻是溃疡型肠结核的主要临床表现之一；增生型肠结核可以便秘为主要表现。有时患者出现腹泻和便秘交替。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹部肿块"
                                                                    },
                                                                    {
                                                                        "text": "腹部肿块常位于右下腹，主要见于增生型肠结核。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "全身症状和肠外结核表现"
                                                                    },
                                                                    {
                                                                        "text": "不同热型的长期发热，伴有盗汗。患者倦怠、消瘦、贫血。"
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
                                        "type": "h1",
                                        "text": "四、辅助检查",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "实验室检查"
                                                            },
                                                            {
                                                                "text": "贫血、血沉多明显增快"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "X线检查"
                                                            },
                                                            {
                                                                "text": "在溃疡型肠结核，钡剂于病变肠段呈现激惹征象，排空很快，充盈不佳，而在病变的上、下肠段则钡剂充盈良好，称为X线钡影跳跃征象。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "结肠镜检查"
                                                            },
                                                            {
                                                                "text": "病变肠黏膜充血、水肿，溃疡形成（常呈横形、边缘呈鼠咬状），大小及形态各异的炎症息肉，肠腔变窄等。镜下取活体组织送病理检查具有确诊价值（干酪样肉芽肿）。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "如有以下情况应考虑本病："
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）中青年患者有肠外结核，主要是肺结核；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）临床表现有腹泻、腹痛、右下腹压痛，也可有腹块、原因不明的肠梗阻，伴有发热、盗汗等结核毒血症状；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）X线小肠钡剂检查发现跳跃征、溃疡、肠管变形和肠腔狭窄等征象；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4）结肠镜检查发现主要位于回盲部的肠黏膜炎症、溃疡、炎症息肉或肠腔狭窄；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（5）PPD（结核菌素）试验强阳性。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "如活体组织病检能找到干酪性肉芽肿具确诊意义，活检组织中找到抗酸染色阳性杆菌有助诊断。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "需与克罗恩（Crohn）病、右侧结肠癌、阿米巴病或血吸虫病性肉芽肿等疾病相鉴别。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "六、治疗",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "休息与营养"
                                                            },
                                                            {
                                                                "text": "休息与营养可加强患者的抵抗力，是治疗的基础。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "抗结核化学药物治疗"
                                                            },
                                                            {
                                                                "text": "是本病治疗的关键。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "对症治疗"
                                                            },
                                                            {
                                                                "text": "腹痛可用抗胆碱能药物。摄入不足或腹泻严重者应注意纠正水、电解质与酸碱平衡紊乱。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "手术治疗"
                                                            },
                                                            {
                                                                "text": "适应证包括：①完全性肠梗阻；②急性肠穿孔，或慢性肠穿孔瘘管形成经内科治疗而未能闭合者；③肠道大量出血经积极抢救不能有效止血者；④诊断困难需剖腹探查者。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 肠结核的好发部位、临床表现、溃疡特点。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 肠结核病的内镜下表现。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第三十章",
                                "text": "结、直肠息肉",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "结、直肠息肉"
                                                    },
                                                    {
                                                        "text": "1. 病理类型2. 临床表现3. 诊断4. 治疗"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "肠息肉及肠息肉病是一类从黏膜表面突出到肠腔内的隆起状病变的临床诊断。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病理类型",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腺瘤性息肉"
                                                            },
                                                            {
                                                                "text": "包括管状、绒毛状及管状绒毛状腺瘤"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "炎性息肉"
                                                            },
                                                            {
                                                                "text": "黏膜炎性增生或血吸虫卵性以及良性淋巴样息肉"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "错构瘤性"
                                                            },
                                                            {
                                                                "text": "幼年性息肉及色素沉着息肉综合征（Peutz-Jeghers综合征）"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "其他"
                                                            },
                                                            {
                                                                "text": "化生性息肉及黏膜肥大赘生物"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "约半数无临床症状，当发生并发症时才被发现，其表现为：",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）肠道刺激症状，腹泻或排便次数增多，继发感染者可出现粘液脓血便。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）便血：可因部位及出血量而表现不一，高位者粪便中混有血，直肠下段者粪便外附有血，出血量多者为鲜血或血块。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）肠梗阻及肠套叠，以盲肠息肉多见。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "发生在直肠中下段的息肉，直肠指检可以触及；",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "发生在乙状结肠镜能达到的范围内者，也易确诊；",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "位于乙状结肠以上的息肉需作钡剂灌肠气钡双重对比造影，或纤维结肠镜检查确认。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "有蒂者内镜下可摘除或圈套蒂切除，凡直径≥2 cm的广基腺瘤性息肉或有癌变，多采用腹腔镜下或开腹肠段切除。中下段直肠的息肉，可经肛或肛门镜下限位手术切除，要求切缘距腺瘤1 cm以上。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "腺瘤病需开腹行肠切除术。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "了解。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第三十一章",
                                "text": "急性阑尾炎",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "急性阑尾炎"
                                                    },
                                                    {
                                                        "text": "1. 阑尾的解剖与生理2. 病因3. 病理类型4. 临床表现5. 诊断与鉴别诊断6. 并发症7. 治疗与手术并发症8. 特殊类型阑尾炎的诊断与治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、阑尾的解剖与生理",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "阑尾（appendix）位于右骼窝部，长约5～10 cm，直径0.5～0.7 cm。阑尾起于盲肠根部，附于盲肠后内侧壁，三条结肠带的会合点。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 麦氏点（McBurney点）",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "阑尾体表投影约在脐与右骼前上棘连线中外1/3交界处，称为麦氏点（McBurney点）。麦氏点是选择阑尾手术切口的标记点。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 阑尾的血管",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "阑尾系膜内的血管，主要由阑尾动、静脉组成。阑尾动脉系回结肠动脉的分支，是一种无侧支的终末动脉，当血运障碍时，易导致阑尾坏死。阑尾静脉与阑尾动脉伴行，最终回流入门静脉。当阑尾炎症时，菌栓脱落可引起门静脉炎和细菌性肝脓肿。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 阑尾的神经",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "由交感神经纤维经腹腔丛和内脏小神经传入，由于其传人的脊髓节段在第10, 11胸节，所以当急性阑尾炎发病开始时，常表现为脐周的牵涉痛，属内脏性疼痛。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、病因",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 阑尾管腔阻塞",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "是急性阑尾炎最常见的病因。阑尾管腔阻塞的最常见原因是淋巴滤泡的明显增生，粪石、异物、炎性狭窄、食物残渣、蛔虫、肿瘤等也是急性阑尾炎的病因。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 细菌入侵",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "致病菌多为肠道内的各种革兰阴性杆菌和厌氧菌。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、病理类型",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "根据急性阑尾炎的临床过程和病理解剖学变化，可分为四种病理类型。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "急性单纯性阑尾炎"
                                                                    },
                                                                    {
                                                                        "text": "属于轻型阑尾炎或病变早期，临床症状和体征均较轻，表现为轻度隐痛。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "急性化脓性阑尾炎"
                                                                    },
                                                                    {
                                                                        "text": "临床症状及体征较重，呈阵发性胀痛和剧痛，可形成局限性腹膜炎。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "坏疽性及穿孔性阑尾炎"
                                                                    },
                                                                    {
                                                                        "text": "呈持续性剧烈腹痛，可引起急性弥漫性腹膜炎。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "阑尾周围脓肿"
                                                                    },
                                                                    {
                                                                        "text": "急性阑尾炎化脓坏疽或穿孔后，病程进展较慢，大网膜将阑尾包裹并形成粘连，形成炎症包块或阑尾周围脓肿。"
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
                                        "type": "h1",
                                        "text": "四、临床表现",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 症状",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹痛"
                                                                    },
                                                                    {
                                                                        "text": "转移性右下腹痛（上腹——脐周——右下腹）。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胃肠道症状"
                                                                    },
                                                                    {
                                                                        "text": "早期可能有厌食，恶心、呕吐也可发生，但程度较轻。弥漫性腹膜炎时可致麻痹性肠梗阻、腹胀、排气排便减少。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "全身症状"
                                                                    },
                                                                    {
                                                                        "text": "早期乏力，炎症重时出现中毒症状，发热、心率增快，发生门静脉炎时可出现寒战、高热和轻度黄疸。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 体征",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）右下腹压痛及反跳痛",
                                                        "text": "右下腹压痛是急性阑尾炎最常见的重要体征。压痛点通常位于麦氏点。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（2）腹膜刺激征象",
                                                        "text": "反跳痛，腹肌紧张，肠鸣音减弱或消失等。提示阑尾炎症加重，出现化脓、坏疽或穿孔"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（3）右下腹包块",
                                                        "text": "体检发现右下腹饱满，扪及一压痛性包块，边界不清，固定，应考虑阑尾周围脓肿的诊断。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4）可作为辅助诊断的其他体征",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "体征"
                                                                            },
                                                                            {
                                                                                "text": "检查方法"
                                                                            },
                                                                            {
                                                                                "text": "临床意义"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "结肠充气试验"
                                                                            },
                                                                            {
                                                                                "text": "仰卧位，用右手压迫左下腹，再用左手挤压近侧结肠，结肠内气体传至盲肠和阑尾"
                                                                            },
                                                                            {
                                                                                "text": "右下腹疼痛者为阳性，提示阑尾炎"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "腰大肌试验"
                                                                            },
                                                                            {
                                                                                "text": "左侧卧，右大腿后伸，引起右下腹疼痛者为阳性"
                                                                            },
                                                                            {
                                                                                "text": "阑尾位于腰大肌前方，盲肠后位或腹膜后位"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "闭孔内肌试验"
                                                                            },
                                                                            {
                                                                                "text": "仰卧位，右髓和右大腿屈曲，被动向内旋转，右下腹疼者为阳性"
                                                                            },
                                                                            {
                                                                                "text": "阑尾靠近闭孔内肌"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "经肛门指检"
                                                                            },
                                                                            {
                                                                                "text": "炎症阑尾所在位置压痛"
                                                                            },
                                                                            {
                                                                                "text": "压痛常在直肠右前方。"
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
                                        "type": "h1",
                                        "text": "五、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 临床诊断主要依靠病史、临床症状、体检所见和实验室检查。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "实验室检查"
                                                                    },
                                                                    {
                                                                        "text": "多数可有白细胞计数和中性粒细胞比例增高"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "腹部平片"
                                                                    },
                                                                    {
                                                                        "text": "可见盲肠扩张和液气平面，偶尔可见钙化的粪石和异物影"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "B超"
                                                                    },
                                                                    {
                                                                        "text": "可发现肿大的阑尾或脓肿"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "螺旋CT扫描"
                                                                    },
                                                                    {
                                                                        "text": "可获得与B超相似的效果，尤其有助于阑尾周围脓肿的诊断"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "type": "common",
                                                                "text": "鉴别诊断",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "有许多急腹症的症状和体征与急性阑尾炎很相似，需与其鉴别。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）胃十二指肠溃疡穿孔",
                                                        "text": "穿孔溢出的胃内容物可沿升结肠旁沟流至右下腹部，容易误认为是急性阑尾炎的转移性腹痛。病人多有溃疡病史，表现为突然发作的剧烈腹痛，腹壁板状强直等腹膜刺激症状也较明显。胸腹部X线检查如发现隔下有游离气体，则有助于鉴别诊断。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（2）右侧输尿管结石",
                                                        "text": "多呈突然发生的右下腹阵发性剧烈绞痛，疼痛向会阴部、外生殖器放射。尿中查到多量红细胞。B超检查或X线摄片在输尿管走行部位可呈现结石阴影。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（3）异位妊娠破裂",
                                                        "text": "表现为突然下腹痛，常有急性失血症状和腹腔内出血的体征，有停经史及阴道不规则出血史；检查时宫颈举痛、附件肿块、阴道后穹窿穿刺有血等。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（4）卵巢滤泡或黄体囊肿破裂",
                                                        "text": "与异位妊娠相似，但病情较轻，多发病于排卵期或月经中期以后。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（5）急性输卵管炎和急性盆腔炎",
                                                        "text": "下腹痛逐渐发生，可伴有腰痛；腹部压痛点较低，直肠指诊盆腔有对称性压痛；伴发热及白细胞计数升高，常有脓性白带，阴道后穹窿穿刺可获脓液，涂片检查细菌阳性。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（6）卵巢囊肿蒂扭转",
                                                        "text": "B超检查均有助于诊断和鉴别诊断。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（7）急性肠系膜淋巴结炎",
                                                        "text": "多见于儿童，往往先有上呼吸道感染史。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（8）其他",
                                                        "text": "急性胃肠炎，胆道系统感染性疾病，右侧肺炎、胸膜炎，回盲部肿瘤、Crohn病、美克耳（Meckel ）憩室炎或穿孔、小儿肠套叠。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "六、并发症",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 腹腔脓肿",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "是阑尾炎未经及时治疗的后果。在阑尾周围形成的阑尾周围脓肿最常见，临床表现有麻痹性肠梗阻的腹胀症状、压痛性包块和全身感染中毒症状等。B超和CT扫描可协助定位。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 内、外瘘形成",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "阑尾周围脓肿如未及时引流，少数病例脓肿可向小肠或大肠内穿破，亦可向膀胱、阴道或腹壁穿破，形成各种内瘘或外瘘，此时脓液可经瘘管排出。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 化脓性门静脉炎",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "急性阑尾炎时阑尾静脉中的感染性血栓，可沿肠系膜上静脉至门静脉，导致化脓性门静脉炎症。临床表现为寒战、高热、肝肿大、剑突下压痛、轻度黄疸等。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "七、治疗与手术并发症",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 治疗",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）手术治疗",
                                                        "text": "绝大多数急性阑尾炎一旦确诊，应早期施行阑尾切除术。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（2）非手术治疗",
                                                        "text": "仅适用于单纯性阑尾炎及急性阑尾炎的早期阶段，病人不接受手术治疗或客观条件不允许，或伴存其他严重器质性疾病有手术禁忌证者。主要措施包括选择有效的抗生素和补液治疗。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 手术并发症",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）出血",
                                                        "text": "阑尾系膜的结扎线松脱，引起系膜血管出血。表现为腹痛、腹胀和失血性休克等症状。一旦发生出血表现，应立即输血补液，紧急再次手术止血。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（2）切口感染",
                                                        "text": "是最常见的术后并发症。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（3）粘连性肠梗阻",
                                                        "text": "也是阑尾切除术后的较常见并发症，与局部炎症重、手术损伤、切口异物、术后卧床等多种原因有关。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（4）阑尾残株炎",
                                                        "text": "阑尾残端保留过长超过1 cm时，或者粪石残留，术后残株可炎症复发，仍表现为阑尾炎的症状。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（5）粪瘘。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "八、特殊类型阑尾炎的诊断与治疗   ",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": ""
                                                            },
                                                            {
                                                                "text": "新生儿急性阑尾炎"
                                                            },
                                                            {
                                                                "text": "小儿急性阑尾炎"
                                                            },
                                                            {
                                                                "text": "妊娠期急性阑尾炎"
                                                            },
                                                            {
                                                                "text": "老年人急性阑尾炎"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "主诉"
                                                            },
                                                            {
                                                                "text": "无"
                                                            },
                                                            {
                                                                "text": "无"
                                                            },
                                                            {
                                                                "text": "不强烈"
                                                            },
                                                            {
                                                                "text": "不典型"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "临床表现"
                                                            },
                                                            {
                                                                "text": "早期临床表现无特殊性，仅有厌食、恶心、呕吐、腹泻和脱水等，发热和白细胞升高均不明显"
                                                            },
                                                            {
                                                                "text": "病情发展较快且较重，早期即出现高热、呕吐等症状"
                                                            },
                                                            {
                                                                "text": "不明显"
                                                            },
                                                            {
                                                                "text": "轻"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "体征"
                                                            },
                                                            {
                                                                "text": "右下腹部压痛和腹胀"
                                                            },
                                                            {
                                                                "text": "右下腹体征不明显、不典型，但有局部压痛和肌紧张"
                                                            },
                                                            {
                                                                "text": "压痛部位上移，压痛、肌紧张和反跳痛均不明显"
                                                            },
                                                            {
                                                                "text": "不明显"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "穿孔率"
                                                            },
                                                            {
                                                                "text": "高达80%"
                                                            },
                                                            {
                                                                "text": "较高"
                                                            },
                                                            {
                                                                "text": "穿孔囊包裹，腹膜炎不易局限"
                                                            },
                                                            {
                                                                "text": "不高"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "死亡率"
                                                            },
                                                            {
                                                                "text": "很高"
                                                            },
                                                            {
                                                                "text": "较高"
                                                            },
                                                            {
                                                                "text": "易致流产或早产，威胁母子生命安全"
                                                            },
                                                            {
                                                                "text": "不高"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "治疗"
                                                            },
                                                            {
                                                                "text": "早期手术治疗"
                                                            },
                                                            {
                                                                "text": "早期手术，并配合输液、纠正脱水，应用广谱抗生素等"
                                                            },
                                                            {
                                                                "text": "以早期阑尾切除术为主，尽量不用腹腔引流，术后使用广谱抗生素"
                                                            },
                                                            {
                                                                "text": "一旦诊断应及时手术，同时注意处理伴发的内科疾病"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 最常见病因：阑尾管腔阻塞。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 特征性临床表现：转移性右下腹痛（上腹——脐周——右下腹）。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "3. 急性阑尾炎出现黄疸，应考虑并发门静脉炎。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "4. 最常见术后并发症：切口感染"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第三十二章",
                                "text": "直肠肛管疾病的解剖",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "解剖"
                                                    },
                                                    {
                                                        "text": "1. 直肠的解剖2. 肛管的解剖"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、直肠分段及直肠肛管重要结构",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "直肠长度约12～15cm，分为上段直肠和下段直肠，以腹膜返折为界。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "直肠环肌在直肠下端增厚而成为肛管内括约肌，属不随意肌，受自主神经支配，可协助排便，无括约肛门的功能。直肠纵肌下端与肛提肌和内、外括约肌相连。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "    肛垫：位于直肠、肛管结合处，亦称直肠肛管移行区（痔区）。该区为一环状、约1.5 cm宽的海绵状组织带，富含血管、结缔组织及与平滑肌纤维相混合的纤维肌性组织（Treitz肌）。",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "    直肠肛管肌：肛管内括约肌为肠壁环肌增厚而成，属不随意肌。肛管外括约肌是围绕肛管的环形横纹肌，属随意肌，分为皮下部、浅部和深部。",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "    肛管直肠环由肛管内括约肌、直肠壁纵肌的下部、肛管外括约肌的深部和邻近的部分肛提肌（耻骨直肠肌）纤维共同组成的肌环，绕过肛管和直肠分界处，在直肠指诊时可清楚们到。此环是括约肛管的重要结构，如手术时不慎完全切断，可引起大便失禁。"
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
                                        "type": "h1",
                                        "text": "二、直肠肛管周围间隙",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "在直肠与肛管周围有数个间隙，是感染的常见部位。在肛提肌以上的间隙有骨盆直肠间隙和直肠后间隙，在肛提肌以下的间隙有坐骨肛管间隙（亦称坐骨直肠间隙）和肛门周围间隙。 "
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、直肠肛管的血管、淋巴和神经",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 血管",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）动脉",
                                                        "text": "齿状线以上的供应动脉主要来自肠系膜下动脉的终末支直肠上动脉，其次为来自骼内动脉的直肠下动脉和骶正中动脉。齿状线以下的血液供应为肛管动脉。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（2）静脉",
                                                        "text": "直肠肛管有两个静脉丛。齿状线上方：直肠上静脉丛→直肠上静脉→肠系膜下静脉→门静脉。齿状线下方：直肠下静脉丛→直肠下静脉→骼内静脉→下腔静脉，直肠下静脉丛→肛管静脉→阴部内静脉→下腔静脉。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "2. 淋巴"
                                    },
                                    {
                                        "type": "h1",
                                        "text": "直肠肛管的淋巴引流亦是以齿状线为界，分上、下两组。",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "神经"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "以齿状线为界，齿状线以上由交感神经和副交感神经支配。齿状线以下的肛管及其周围结构主要由阴部神经的分支支配。"
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "了解。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第三十三章",
                                "text": "肛裂",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "肛裂"
                                                    },
                                                    {
                                                        "text": "1. 诊断2. 治疗"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "肛裂是齿状线下肛管皮肤层裂伤后形成的小溃疡。方向与肛管纵轴平行，长约0.7 cm，呈梭形或椭圆形，常引起肛周剧痛。多见于青中年人，绝大多数肛裂位于肛管的后正中线上。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 临床表现",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "肛瘘病人有典型的临床表现，即疼痛、便秘、出血。疼痛多剧烈，有典型的周期性：排便时疼痛——便后数分钟缓解（间歇期）——随后肛门括约肌收缩痉挛，再次剧痛。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "出血多为粪便表面或便纸上见到少量血迹或滴鲜血。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 典型体征",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "肛门检查时发现的肛裂“三联征”（肛裂、前哨痣、乳头肥大）。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "治疗急性或初发的肛裂可用坐浴和润便的方法治疗；慢性肛裂可用坐浴、润便加以扩肛的方法；经久不愈、保守治疗无效、且症状较重者可采用手术治疗。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 非手术治疗：原则是解除括约肌痉挛，止痛，帮助排便，中断恶性循环，促使局部愈合。具体措施如下：",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）排便后用1 : 5000高锰酸钾温水坐浴，保持局部清洁。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）纠正便秘，保持大便通畅。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）局麻后扩肛解除括约肌痉挛，扩大创面，促进裂口愈合。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 手术疗法：肛裂切除术、肛管内括约肌切断术。"
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 肛裂三联征（肛裂、前哨痣、乳头肥大）"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 疼痛特点（排便时疼痛——间歇期——肛门括约肌挛缩痛）。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第三十四章",
                                "text": "直肠肛管周围脓肿",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "直肠肛管周围脓肿"
                                                    },
                                                    {
                                                        "text": "1. 诊断2. 治疗"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "直肠肛管周围脓肿：是指直肠肛管周围软组织内或其周围间隙发生的急性化脓性感染，并形成脓肿。脓肿破溃或切开引流后常形成肛瘘。脓肿是肛管直肠周围炎症的急性期表现，而肛瘘则为其慢性期表现。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、诊断",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肛周脓肿"
                                                            },
                                                            {
                                                                "text": "最常见"
                                                            },
                                                            {
                                                                "text": "肛周持续性跳动性疼痛，行动不便，坐卧不安，全身感染性症状不明显。病变处明显红肿，有硬结和压痛，可有波动感，穿刺时抽出脓液。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "坐骨肛管间隙脓肿"
                                                            },
                                                            {
                                                                "text": "较常见"
                                                            },
                                                            {
                                                                "text": "患侧出现持续性胀痛，逐渐加重，可有排尿困难和里急后重。全身感染症状明显，如乏力、发热、寒战等。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "骨盆直肠间隙脓肿"
                                                            },
                                                            {
                                                                "text": "较少见"
                                                            },
                                                            {
                                                                "text": "由于此间隙位置较深，空间较大，引起的全身症状较重而局部症状不明显。早期就有全身中毒症状，如发热、寒战、全身疲倦不适。直肠指诊可在直肠壁上触及肿块隆起，有压痛和波动感。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "其他"
                                                            },
                                                            {
                                                                "text": "肛门括约肌间隙脓肿、直肠后间隙脓肿、高位肌间脓肿、直肠壁内脓肿，直肠指诊可触及痛性包块。",
                                                                "colSpan": 2
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 非手术治疗：①抗生素治疗：选用对革兰阴性杆菌有效的抗生素；②温水坐浴；③局部理疗；④口服缓泻剂或石蜡油以减轻排便时疼痛。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 手术治疗：脓肿切开引流是治疗直肠肛管周围脓肿的主要方法，一旦诊断明确，:即应切开引流。"
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "了解。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第三十五章",
                                "text": "肛瘘",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "肛瘘"
                                                    },
                                                    {
                                                        "text": "1. 诊断2. 治疗"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "肛瘘是指肛门周围的肉芽肿性管道，由内口、瘘管、外口三部分组成。内口常位于直肠下部或肛管，多为一个；外口在肛周皮肤上，可为一个或多个，经久不愈或间歇性反复发作，多见于青壮年男性。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "肛瘘外口流出少量脓性、血性、粘液性分泌物为主要症状。当外口愈合，瘘管中有脓肿形成时，可感到明显疼痛，同时可伴有发热、寒战、乏力等全身感染症状，脓肿穿破或切开引流后，症状缓解。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "根据上述临床特点，诊断肛瘘不困难。确定内口位置对明确肛瘘诊断非常重要。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "肛瘘不能自愈，不治疗会反复发作直肠肛管周围脓肿，治疗方法主要有两种。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 堵塞法"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "0.5%甲硝哇、生理盐水冲洗痰管后，用生物蛋白胶自外口注入，治愈率较低，约为25%。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 手术治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "原则是将瘘管切开，形成敞开的创面，促使愈合。手术的关键是尽量减少肛门括约肌的损伤，防止肛门失禁，同时避免瘘的复发。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）瘘管切开术：是将瘘管全部切开开放，靠肉芽组织生长使伤口愈合的方法。适用于低位肛瘘。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）挂线疗法：是利用橡皮筋或有腐蚀作用的药线的机械性压迫作用，缓慢切开肛瘘的方法。适用于距肛门3～5cm内，有内外口低位或高位单纯性肛瘘，或作为复杂性肛瘘切开、切除的辅助治疗。它的最大优点是不会造成肛门失禁。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）肛瘘切除术：适用于低位单纯性肛瘘。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "了解。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第三十六章",
                                "text": "痔",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "痔"
                                                    },
                                                    {
                                                        "text": "1. 诊断2. 治疗"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "痔是最常见的肛肠疾病。任何年龄都可发病。内痔是肛垫的支持结构、静脉丛及动静脉吻合支发生病理性改变或移位。外痔是齿状线远侧皮下静脉丛的病理性扩张或血栓形成。内痔通过丰富的静脉丛吻合支和相应部位的外痔相互融合为混合痔。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 临床表现",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）内痔",
                                                        "text": "主要临床表现是出血和脱出。无痛性间歇性便后出鲜血是内痔的常见症状。内痔的好发部位为截石位3, 7, 11点。内痔的分度如下：",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "Ⅰ度"
                                                                            },
                                                                            {
                                                                                "text": "便时带血、滴血或喷射状出血，便后出血可自行停止，无痔脱出"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "Ⅱ度"
                                                                            },
                                                                            {
                                                                                "text": "常有便血，排便时有痔脱出，便后可自行还纳"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "Ⅲ度"
                                                                            },
                                                                            {
                                                                                "text": "偶有便血，排便或久站、咳嗽、劳累、负重时痔脱出，需用手还纳"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "Ⅳ度"
                                                                            },
                                                                            {
                                                                                "text": "偶有便血，痔脱出不能还纳或还纳后又脱出"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（2）外痔",
                                                        "text": "主要临床表现是肛门不适、潮湿不洁，有时有搔痒。如发生血栓形成及皮下血肿有剧痛，称之为血栓性外痔，最常见。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（3）混合痔",
                                                        "text": "表现为内痔和外痔的症状可同时存在。内痔发展到Ⅲ度以上时多形成混合痔。混合痔逐渐加重，呈环状脱出肛门外，脱出的痔块在肛周呈梅花状，称为环状痔。脱出痔块若被痉挛的括约肌嵌顿，以至水肿，瘀斑甚至坏死，临床上称为嵌顿性痔或绞窄性痔。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "主要靠肛门直肠检查。首先做肛门视诊，内痔除Ⅰ度外，其他三度都可在肛门视诊下见到。对有脱垂者，最好在蹲位排便后立即观察。直肠指诊虽对痔的诊断意义不大，但可了解直肠内有无其他病变，如直肠癌、直肠息肉等。肛门镜检查也有一定的作用。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "治疗应遵循三个原则：①无症状的痔无需治疗；②有症状的痔重在减轻或消除症状，而非根治；③以保守治疗为主。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "一般治疗"
                                                                    },
                                                                    {
                                                                        "text": "增加纤维素食物，改变不良的大便习惯，热水坐浴"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "注射疗法"
                                                                    },
                                                                    {
                                                                        "text": "注射硬化剂，治疗Ⅰ、Ⅱ度出血性内痔的效果较好"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胶圈套扎疗法"
                                                                    },
                                                                    {
                                                                        "text": "可用于治疗Ⅰ～Ⅲ度内痔"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "多普勒超声引导下痔动脉结扎术"
                                                                    },
                                                                    {
                                                                        "text": "适用于II～Ⅳ度的内痔"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "手术疗法"
                                                                    },
                                                                    {
                                                                        "text": "包括痔单纯切除术、吻合器痔固定术、血栓外痔剥离术等"
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
                                        "type": "h1",
                                        "text": "三、易混淆疾病鉴别",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "内痔"
                                                            },
                                                            {
                                                                "text": "无痛性间歇性便后鲜血，痔核脱出等"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "直肠脱垂"
                                                            },
                                                            {
                                                                "text": "易误诊为环状痔，但直肠脱垂黏膜呈环形，表面平滑，括约肌松弛，而环状痔黏膜呈梅花瓣状，括约肌不松弛"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "直肠息肉"
                                                            },
                                                            {
                                                                "text": "息肉为圆形、实质性、有蒂、可活动，多见于儿童"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肛窦炎"
                                                            },
                                                            {
                                                                "text": "里急后重，粪便中可带有少量黏液和血"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肛裂"
                                                            },
                                                            {
                                                                "text": "疼痛（肛裂疼痛周期）、便秘、出血（鲜血）"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "内痔临床表现（无痛性间歇性便后出鲜血）及分度。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第三十七章",
                                "text": "直肠癌",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "直肠癌"
                                                    },
                                                    {
                                                        "text": "1. 临床表现2. 诊断3. 手术方法与适应证"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "直肠癌是乙状结肠直肠交界处至齿状线之间的癌，是消化道常见的恶性肿瘤。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、临床表现",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "直肠癌早期无明显症状，癌肿破溃形成溃疡或感染时才出现症状。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "直肠刺激症状"
                                                                    },
                                                                    {
                                                                        "text": "便意频繁，排便习惯改变；便前肛门有下坠感、里急后重、排便不尽感，晚期有下腹痛。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "肠腔狭窄症状"
                                                                    },
                                                                    {
                                                                        "text": "癌肿侵犯致肠管狭窄，初时大便变形，变细，当造成肠管部分梗阻后，有腹痛、腹胀、肠鸣音亢进等不全性肠梗阻表现"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "癌肿破溃感染症状"
                                                                    },
                                                                    {
                                                                        "text": "大便表面带血及粘液，甚至有脓血便。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "全身表现"
                                                                    },
                                                                    {
                                                                        "text": "晚期出现肝转移时可有腹水、肝大、黄疸、贫血、消瘦、水肿等。"
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
                                        "type": "h1",
                                        "text": "二、诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "直肠癌根据病史、体检、影像学和内镜检查不难作出临床诊断。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "直肠癌的各种辅助检查及意义：",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "大便潜血检查"
                                                                            },
                                                                            {
                                                                                "text": "结、直肠癌大规模普查、初筛检查",
                                                                                "colSpan": 3
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "直肠指诊"
                                                                            },
                                                                            {
                                                                                "text": "诊断直肠癌最重要的方法，凡遇病人有便血、大便习惯改变、大便变形症状，均应行直肠指诊",
                                                                                "colSpan": 3
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "内镜检查",
                                                                                "rowSpan": 2
                                                                            },
                                                                            {
                                                                                "text": "直肠镜、乙状结肠镜"
                                                                            },
                                                                            {
                                                                                "text": "门诊常规检查，操作方便，不需特殊准备"
                                                                            },
                                                                            {
                                                                                "text": "内镜检查不仅可在直视下肉眼作出诊断，而且可取组织进行病理检查",
                                                                                "rowSpan": 2
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "纤维结肠镜"
                                                                            },
                                                                            {
                                                                                "text": "明确直肠癌诊断"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "影像学检查",
                                                                                "rowSpan": 2
                                                                            },
                                                                            {
                                                                                "text": "钡剂灌肠是结肠癌重要检查方法，用以排除多发癌和息肉病",
                                                                                "colSpan": 3
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "腔内B超、CT、MRI、PET-CT用于观察直肠癌是否转移和进行术前分期",
                                                                                "colSpan": 3
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "肿瘤标志物"
                                                                            },
                                                                            {
                                                                                "text": "CEA是目前公认的在大肠癌诊断和术后监测有意义的肿瘤标记物",
                                                                                "colSpan": 3
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
                                        "type": "h1",
                                        "text": "三、手术方法与适应证：",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "手术切除是直肠癌的主要治疗方法。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "局部切除术",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "适用于早期瘤体小、局限于黏膜或黏膜下层、分化程度高的直肠癌。手术方式主要有：①经肛局部切除术；②骶后径路局部切除术。",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "腹会阴联合直肠癌根治术（Miles手术）",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "原则上适用于腹膜返折以下的直肠癌。切除范围包括乙状结肠远端、全部直肠、肠系膜下动脉及其区域淋巴结、全直肠系膜、肛提肌、坐骨直肠窝内脂肪、肛管及肛门周围约3～5 cm的皮肤、皮下组织及全部肛门括约肌，于左下腹",
                                                                                "content": [
                                                                                    {
                                                                                        "type": "common",
                                                                                        "text": "行永久性乙状结肠单腔造口。",
                                                                                        "content": [
                                                                                            {
                                                                                                "type": "common",
                                                                                                "text": "经腹直肠癌切除术（直肠低位前切除术、Dixon手术）",
                                                                                                "content": [
                                                                                                    {
                                                                                                        "type": "common",
                                                                                                        "text": "是目前应用最多的直肠癌根治术，适用于距齿状线5 cm以上的直肠癌，亦有更近距离的直肠癌行Dixon手术的报道。但原则上是以根治性切除为前提，要求远端切缘距癌肿下缘2 cm以上。乙状结肠与直肠行端端吻合。",
                                                                                                        "content": [
                                                                                                            {
                                                                                                                "type": "common",
                                                                                                                "text": "经腹直肠癌切除、近端造口、远端封闭手术（Hartmann手术）",
                                                                                                                "content": [
                                                                                                                    {
                                                                                                                        "type": "common",
                                                                                                                        "text": "适用于因全身一般情况很差，不能耐受Miles手术或急性梗阻不宜行Dixon手术的直肠癌病人。"
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
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1.直肠癌的临床表现及诊断。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2.Miles手术、Dixon手术的适应证。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第三十八章",
                                "text": "消化道出血",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "消化道大出血"
                                                    },
                                                    {
                                                        "text": "1. 病因2. 临床表现3. 诊断与鉴别诊断4. 治疗"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "上消化道出血",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "    屈氏韧带以近的消化道出血。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "上消化道疾病及全身性疾病均可引起上消化道出血。临床上最常见的病因是消化性溃疡、食管胃底静脉曲张破裂、急性糜烂出血性胃炎和胃癌。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "1.上消化道疾病",
                                                                        "rowSpan": 2
                                                                    },
                                                                    {
                                                                        "text": "食管疾病"
                                                                    },
                                                                    {
                                                                        "text": "食管炎（反流性食管炎、食管憩室炎），食管癌，食管损伤（物理损伤、食管贲门黏膜撕裂综合征又称Mallory-Weiss综合征等）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胃十二指肠疾病"
                                                                    },
                                                                    {
                                                                        "text": "消化性溃疡、急性糜烂出血性胃炎，胃癌，胃血管异常，其他肿瘤等"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "2.门静脉高压引起的食管胃底静脉曲张破裂或门脉高压性胃病",
                                                                        "colSpan": 3
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "3.上消化道邻近器官或组织的疾病",
                                                                        "rowSpan": 4
                                                                    },
                                                                    {
                                                                        "text": "胆道出血"
                                                                    },
                                                                    {
                                                                        "text": "胆管或胆囊结石，胆道蛔虫病，胆囊或胆管癌"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "胰腺疾病累及十二指肠"
                                                                    },
                                                                    {
                                                                        "text": "胰腺癌，急性胰腺炎并发脓肿溃破"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "主动脉瘤破入食管、胃或十二指肠",
                                                                        "colSpan": 2
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "纵隔肿瘤或脓肿破入食管",
                                                                        "colSpan": 2
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "4.全身性疾病",
                                                                        "rowSpan": 5
                                                                    },
                                                                    {
                                                                        "text": "血管性疾病"
                                                                    },
                                                                    {
                                                                        "text": "过敏性紫癜，遗传性出血性毛细血管扩张等"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "血液病"
                                                                    },
                                                                    {
                                                                        "text": "血友病，血小板减少性紫癜，白血病，弥散性血管内凝血及其他凝血机制障碍"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "尿毒症",
                                                                        "colSpan": 2
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "结缔组织病"
                                                                    },
                                                                    {
                                                                        "text": "结节性多动脉炎，系统性红斑性狼疮或其他血管炎"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "急性感染"
                                                                    },
                                                                    {
                                                                        "text": "流行性出血热，钩端螺旋体病等"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "应激相关胃黏膜损伤",
                                                                        "colSpan": 2
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
                                        "type": "h1",
                                        "text": "二、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "呕血与黑粪"
                                                            },
                                                            {
                                                                "text": "是上消化道出血的特征性表现。上消化道大量出血之后，均有黑粪。出血部位在幽门以上者常伴有呕血。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "失血性周围循环衰竭"
                                                            },
                                                            {
                                                                "text": "一般表现为头昏、心慌、乏力，突然起立发生晕厥、肢体冷感、心率加快、血压偏低等。严重者呈休克状态。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "贫血和血象变化"
                                                            },
                                                            {
                                                                "text": "急性大量出血后均有失血性贫血；上消化道大量出血2～5小时，白细胞计数轻至中度升高，血止后2～3天才恢复正常。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "发热"
                                                            },
                                                            {
                                                                "text": "多数患者在24小时内出现低热，持续3～5天后降至正常。可能与周围循环衰竭，导致体温调节中枢的功能障碍等因素有关。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "氮质血症"
                                                            },
                                                            {
                                                                "text": "大量血液蛋白质的消化产物在肠道被吸收，血中尿素氮浓度可暂时增高，称为肠源性氮质血症。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）上消化道出血诊断的确立",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "根据呕血、黑粪和失血性周围循环衰竭的临床表现，呕吐物或黑粪隐血试验呈强阳性，血红蛋白浓度、红细胞计数及血细胞比容下降的实验室证据，可作出上消化道出血的诊断， ",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "判断上消化道还是下消化道出血：",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "呕血提示上消化道出血，黑粪大多来自上消化道出血，而血便大多来自下消化道出血。但是，上消化道短时间内大量出血亦可表现为暗红色甚至鲜红色血便，此时如不伴呕血，常难与下消化道出血鉴别，应在病情稳定后即作急诊胃镜检查。"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）出血严重程度的估计和周围循环状态的判断",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "据研究，成人每日消化道出血＞5～10ml粪便隐血试验出现阳性，每日出血量50～100ml可出现黑粪。胃内储积血量在250～300ml可引起呕血。一次出血量不超过400ml时，因轻度血容量减少可由组织液及脾脏贮血所补充，一般不引起全身症状。出血量超过400～500ml，可出现全身症状，如头昏、心慌、乏力等。短时间内出血量超过1000ml，可出现周围循环衰竭表现。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3）出血是否停止的判断",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "由于肠道内积血需经数日（一般约3日）才能排尽，故不能以黑粪作为继续出血的指标。临床上出现下列情况应考虑继续出血或再出血：",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "1）反复呕血，或黑粪次数增多、粪质稀薄，伴有肠鸣音亢进；",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "2）周围循环衰竭的表现经充分补液输血而未见明显改善，或虽暂时好转而又恶化；",
                                                                                "content": [
                                                                                    {
                                                                                        "type": "common",
                                                                                        "text": "3）血红蛋白浓度、红细胞计数与血细胞比容继续下降，网织红细胞计数持续增高；",
                                                                                        "content": [
                                                                                            {
                                                                                                "type": "common",
                                                                                                "text": "4）补液与尿量足够的情况下，血尿素氮持续或再次增高。"
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
                                                        "type": "h3",
                                                        "text": "（4）出血的病因",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "过去病史、症状与体征可为出血的病因诊断提供重要线索，但确诊出血的原因与部位需靠器械检查。",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "1）临床与实验室检查提供的线索 ",
                                                                        "content": [
                                                                            {
                                                                                "type": "table",
                                                                                "content": [
                                                                                    {
                                                                                        "content": [
                                                                                            {
                                                                                                "text": "病史"
                                                                                            },
                                                                                            {
                                                                                                "text": "上消化道出血病因"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "content": [
                                                                                            {
                                                                                                "text": "慢性、周期性、节律性上腹痛"
                                                                                            },
                                                                                            {
                                                                                                "text": "消化性溃疡"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "content": [
                                                                                            {
                                                                                                "text": "有服用非甾体抗炎药等损伤胃黏膜的药物或应激状态者"
                                                                                            },
                                                                                            {
                                                                                                "text": "急性糜烂出血性胃炎"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "content": [
                                                                                            {
                                                                                                "text": "有病毒性肝炎、血吸虫病或酗酒病史，并有肝病与门静脉高压的临床表现者"
                                                                                            },
                                                                                            {
                                                                                                "text": "食管胃底静脉曲张破裂"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "content": [
                                                                                            {
                                                                                                "text": "中年以上的患者近期出现上腹痛，伴有厌食、消瘦者"
                                                                                            },
                                                                                            {
                                                                                                "text": "胃癌可能"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "type": "common",
                                                                                        "text": "2）辅助检查：胃镜检查、X线钡餐检查、选择性腹腔动脉造影、放射性核素扫描、胶囊内镜及小肠镜检查等。"
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
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "需要鉴别的疾病见病因部分。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "上消化道大量出血病情急、变化快，严重者可危及生命，抗休克、迅速补充血容量治疗应放在一切医疗措施的首位。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 一般急救措施",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "患者应卧位休息，保持呼吸道通畅，避免呕血时血液吸入引起窒息，必要时吸氧。活动性出血期间禁食。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 积极补充血容量",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "立即查血型和配血，尽快建立有效的静脉输液通道，尽快补充血容量。在配血过程中，可先输平衡液或葡萄糖盐水。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 止血措施",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）食管、胃底静脉曲张破裂大出血",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "药物止血"
                                                                            },
                                                                            {
                                                                                "text": "血管加压素及其拟似物（三甘氨酰赖氨酸加压素，又名特列加压素）：有冠心病、高血压的患者忌用。生长抑素：副作用少，是治疗食管胃底静脉曲张出血的最常用药物。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "气囊压迫止血"
                                                                            },
                                                                            {
                                                                                "text": "三腔二囊管，目前已不推荐气囊压迫作为首选止血措施，其应用宜限于药物不能控制出血时作为暂时止血用，以赢得时间去准备其他更有效的治疗措施。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "内镜治疗"
                                                                            },
                                                                            {
                                                                                "text": "内镜直视下注射硬化剂或组织粘合剂至曲张的静脉，或用皮圈套扎曲张静脉，是目前治疗食管胃底静脉曲张破裂出血的重要手段。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "外科手术或经颈静脉肝内门体静脉分流术"
                                                                            },
                                                                            {
                                                                                "text": "急诊外科手术并发症多、死亡率高，因此应尽量避免。但在大量出血上述方法治疗无效时唯有进行外科手术。"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）非曲张静脉上消化道大出血 除食管胃底静脉曲张破裂出血之外的其他病因引起的上消化道大出血，习惯上又称为非曲张静脉上消化道大出血，其中以消化性溃疡所致出血最为常见。主要止血措施如下",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "抑制胃酸分泌的药物"
                                                                            },
                                                                            {
                                                                                "text": "H2受体拮抗剂或质子泵抑制剂，后者在提高及维持胃内pH值的作用优于前者"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "内镜治疗"
                                                                            },
                                                                            {
                                                                                "text": "热探头、高频电灼、激光、微波、注射疗法或上止血夹等"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "手术治疗"
                                                                            },
                                                                            {
                                                                                "text": "内科积极治疗仍大量出血不止危及患者生命者"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "介入治疗"
                                                                            },
                                                                            {
                                                                                "text": "既无法进行内镜治疗，又不能耐受手术，可考虑在选择性肠系膜动脉造影找到出血灶的同时进行血管栓塞治疗"
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
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 上消化道出血最常见病因：消化性溃疡。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 药物治疗原则"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h3",
                                                "text": "（1）非曲张静脉上消化道出血 ：PPI（奥美拉唑等）"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h3",
                                                "text": "（2）食管胃底静脉曲张破裂出血首选药物：生长抑素。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第三十九章",
                                "text": "急性化脓性腹膜炎",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "急性化脓性腹膜炎"
                                                    },
                                                    {
                                                        "text": "1. 腹膜的解剖与生理2. 原发性和继发性腹膜炎病因及常见致病菌3. 病理生理4. 临床表现5. 诊断6. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、腹膜的解剖与生理",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "腹膜分为相互连续的壁腹膜和脏腹膜两部分。壁腹膜贴附于腹壁、横隔脏面和盆壁的内面；脏腹膜覆盖于内脏表面，成为它们的浆膜层腹膜腔是壁腹膜和脏腹膜之间的潜在间隙，腹膜腔分为大、小腹腔两部分，即腹腔和网膜囊，经由网膜孔（又称Winslow孔）相通。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "壁腹膜主要受体神经（肋间神经和腰神经的分支）的支配，对各种刺激敏感，痛觉定位准确。腹前壁腹膜在炎症时，可引起局部疼痛、压痛和反射性的腹肌紧张，是诊断腹膜炎的主要临床依据。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、原发性和继发性腹膜炎病因及常见致病菌",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": ""
                                                            },
                                                            {
                                                                "text": "病因"
                                                            },
                                                            {
                                                                "text": "常见致病菌"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "原发性腹膜炎"
                                                            },
                                                            {
                                                                "text": "①血行播散②上行性感染③直接扩散④透壁性感染"
                                                            },
                                                            {
                                                                "text": "多为溶血性链球菌、肺炎双球菌或大肠杆菌"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "继发性腹膜炎"
                                                            },
                                                            {
                                                                "text": "腹腔内空腔脏器穿孔、外伤引起的腹壁或内脏破裂"
                                                            },
                                                            {
                                                                "text": "多为大肠杆菌"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、病理生理",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "胃肠内容物和细菌进入腹腔后，机体立即发生反应，腹膜充血、水肿。接着产生大量清晰的浆液性渗出液，以稀释腹腔内的毒素，并出现大量的巨噬细胞、中性粒细胞，加以坏死组织、细菌和凝固的纤维蛋白，使渗出液变混浊而成为脓液。以大肠杆菌为主的脓液呈黄绿色，常与其他致病菌混合感染而变得稠厚，并有粪便的特殊臭味。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹痛"
                                                            },
                                                            {
                                                                "text": "最主要的临床表现，疼痛先从原发病变部位开始，随炎症扩散而延及全腹。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "恶心、呕吐"
                                                            },
                                                            {
                                                                "text": "腹膜受到刺激，可引起反射性恶心、呕吐。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "体温、脉搏"
                                                            },
                                                            {
                                                                "text": "其变化与炎症的轻重有关。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "感染中毒症状"
                                                            },
                                                            {
                                                                "text": "病人可出现高热、脉速、呼吸浅快、大汗、口干。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹部体征"
                                                            },
                                                            {
                                                                "text": "腹部压痛、腹肌紧张和反跳痛是腹膜炎的标志性体征。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "诊断根据病史及典型体征，白细胞计数及分类，腹部X线检查，超声或CT检查结果等，综合分析，腹膜炎的诊断一般是比较容易的。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "六、治疗",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "非手术治疗",
                                                                "rowSpan": 6
                                                            },
                                                            {
                                                                "text": "体位"
                                                            },
                                                            {
                                                                "text": "一般取半卧位，以促使腹腔内渗出液流向盆腔，减少吸收和减轻中毒症。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "禁食、胃肠减压"
                                                            },
                                                            {
                                                                "text": "胃肠道穿孔的病人必须禁食、胃肠减压。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "纠正水、电解质紊乱",
                                                                "colSpan": 2
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "抗生素"
                                                            },
                                                            {
                                                                "text": "继发性腹膜炎大多为混合感染。经验性治疗可选择第三代头孢菌素。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "补充热量和营养支持"
                                                            },
                                                            {
                                                                "text": ""
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "镇静、止痛、吸氧"
                                                            },
                                                            {
                                                                "text": "诊断不清或需进行观察的病人，暂不用止痛剂，以免掩盖病情。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "手术治疗"
                                                            },
                                                            {
                                                                "text": "手术适应证"
                                                            },
                                                            {
                                                                "text": "①经上述非手术治疗6～8小时后（一般不超过12小时），腹膜炎症状及体征不缓解反而加重者。②腹腔内原发病严重，如胃肠道穿孔或胆囊坏疽、绞窄性肠梗阻、腹腔内脏器损伤破裂、胃肠道手术后短期内吻合口漏所致的腹膜炎。③腹腔内炎症较重，有大量积液，出现严重的肠麻痹或中毒症状，尤其是有休克表现者。④腹膜炎病因不明确，且无局限趋势者。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 继发性腹膜炎常见致病菌：大肠杆菌。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 腹膜刺激征典型表现：腹部压痛、腹肌紧张和反跳痛。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第四十章",
                                "text": "腹腔脓肿",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "腹腔脓肿"
                                                    },
                                                    {
                                                        "text": "1. 膈下脓肿的诊断和治疗2. 盆腔脓肿的诊断和治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、膈下脓肿的诊断和治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "急性腹膜炎或腹腔内脏器的炎性病变治疗过程中，或腹部手术数日后出现发热、腹痛者，均应想到本病，并作进一步检查。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "X线透视可见患侧膈肌升高，随呼吸活动受限或消失，肋隔角模糊、积液。X线片显示胸膜反应、胸腔积液、肺下叶部分不张等，膈下可见占位阴影。左隔下脓肿，胃底可受压移位。约有10%～25%的脓肿腔内含有气体，可有液气平面。",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "超声或CT检查对隔下脓肿的诊断及鉴别诊断帮助较大。特别是在超声指引下穿刺，不仅可帮助诊断，还可同时抽脓、冲洗脓腔、并注入有效的抗生素进行治疗。需要提出的是，穿刺阴性者不能排除存在脓肿的可能。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "既往，隔下脓肿主要采用手术治疗。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "近年来，采用经皮穿刺置管引流术，取得了较好的治疗效果。同时要加强支持治疗，包括补液、输血、营养支持和抗生素的应用。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、盆腔脓肿的诊断和治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "急性腹膜炎治疗过程中，如阑尾穿孔或结直肠手术后，出现体温升高、典型的直肠或膀胱刺激症状，里急后重、大便频而量少、有粘液便、尿频、排尿困难等，应想到可能有本病。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "腹部检查多无阳性发现。直肠指检可发现在直肠前壁可触及向直肠腔内膨起、有触痛、有时有波动感的肿物。已婚女病人可进行阴道检查，以协助诊断。",
                                                                "content": [
                                                                    {
                                                                        "type": "common",
                                                                        "text": "如是盆腔炎性包块或脓肿，还可经后穹隆穿刺抽脓，有助于诊断和治疗。",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "下腹部超声及经直肠或阴道超声检查均有助于明确诊断。必要时可作CT检查，进一步帮助明确诊断。    "
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
                                                "type": "h2",
                                                "text": "2. 治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "盆腔脓肿较小或尚未形成时，可以采用非手术治疗。应用抗生素，辅以热水坐浴、温热盐水灌肠及物理透热等疗法。有些病人经过上述治疗，脓液可自行完全吸收。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "脓肿较大者须手术治疗。在骶管或硬膜外麻醉下，取截石位，用肛门镜显露直肠前壁，清洁消毒后，在波动处用长针穿刺，抽出脓液后循穿刺针作一小切口，再用血管钳插入扩大切口，排出脓液，然后放橡皮管引流3～4天。已婚女病人可经后穹隆穿刺后切开引流。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "腹腔脓肿病因及诊断。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第四十一章",
                                "text": "结核性腹膜炎",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "结核性腹膜炎"
                                                    },
                                                    {
                                                        "text": "1. 病因和发病机制2. 病理3. 临床表现4. 辅助检查5. 诊断与鉴别诊断6. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、病因和发病机制",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "本病由结核分枝杆菌感染腹膜引起，多继发于肺结核或体内其他部位结核病。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "结核分枝杆菌感染腹膜的途径以腹腔内的结核病灶直接蔓延为主，肠系膜淋巴结结核、输卵管结核、肠结核等为常见的原发病灶。少数病例由血行播散引起，常可发现活动性肺结核（原发感染或粟粒性肺结核）、关节、骨、睾丸结核，并可伴结核性多浆膜炎、结核性脑膜炎等。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、病理",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "根据本病的病理解剖特点，可分为渗出、粘连、干酪三型，以前两型为多见。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "渗出型"
                                                                    },
                                                                    {
                                                                        "text": "腹膜充血、水肿，表面覆有纤维蛋白渗出物，有许多黄白色或灰白色细小结节，可融合成较大的结节或斑块。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "粘连型"
                                                                    },
                                                                    {
                                                                        "text": "有大量纤维组织增生，腹膜、肠系膜明显增厚。肠袢相互粘连，并和其他脏器紧密缠结在一起，肠管常因受到压迫与束缚而发生肠梗阻。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "干酪型"
                                                                    },
                                                                    {
                                                                        "text": "以干酪样坏死病变为主，肠管、大网膜、肠系膜或腹腔内其他脏器之间相互粘连。本型多由渗出型或粘连型演变而来，是本病的重型，并发症常见。"
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
                                        "type": "h1",
                                        "text": "三、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "全身症状"
                                                            },
                                                            {
                                                                "text": "结核毒血症常见，主要是低热与盗汗；后期有营养不良，表现为消瘦、水肿、贫血、舌炎、口角炎等。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹痛"
                                                            },
                                                            {
                                                                "text": "后期可出现持续性隐痛或钝痛"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹部触诊"
                                                            },
                                                            {
                                                                "text": "腹壁柔韧感（揉面感）——特征性表现"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹水"
                                                            },
                                                            {
                                                                "text": "以少量至中量多见"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹部肿块"
                                                            },
                                                            {
                                                                "text": "多见于粘连型或干酪型，常位于脐周"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "其他"
                                                            },
                                                            {
                                                                "text": "腹泻，有时腹泻与便秘交替出现。并发症以肠梗阻为常见"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、辅助检查",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "血象"
                                                            },
                                                            {
                                                                "text": "病程较长而有活动性病变的患者有轻度至中度贫血，白细胞计数多正常。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "结核菌素（PPD）试验"
                                                            },
                                                            {
                                                                "text": "呈强阳性有助本病诊断"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹水检查"
                                                            },
                                                            {
                                                                "text": "对鉴别腹水性质有重要价值。本病腹水为草黄色渗出液"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹部B型超声检查"
                                                            },
                                                            {
                                                                "text": "少量腹水需靠B型超声检查发现，并可提示穿刺抽腹水的准确位置"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹部X线检查"
                                                            },
                                                            {
                                                                "text": "有时可见到钙化影，提示钙化的肠系膜淋巴结结核"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹腔镜检查"
                                                            },
                                                            {
                                                                "text": "对诊断有困难者具确诊价值"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 诊断",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "有以下情况应考虑本病："
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（1） 中青年患者，有结核病史，伴有其他器官结核病证据；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）长期发热原因不明，伴有腹痛、腹胀、腹水、腹壁柔韧感或腹部包块；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（3） 腹水为渗出液性质，以淋巴细胞为主，普通细菌培养阴性；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（4） X线胃肠钡餐检查发现肠粘连等征象；"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（5） PPD试验呈强阳性。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "典型病例可作出临床诊断，予抗结核治疗（2周以上）有效可确诊。不典型病例，主要是有游离腹水病例，行腹腔镜检查并作活检，符合结核改变可确诊。有广泛腹膜粘连者腹腔镜检查属禁忌，需结合B超、CT等检查排除腹腔肿瘤，有手术指征者剖腹探查。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "以腹水为主要表现者"
                                                                    },
                                                                    {
                                                                        "text": "腹腔恶性肿瘤；②肝硬化腹水；③其他疾病引起的腹水，如结缔组织病、Meigs综合征、Budd-Chiari综合征、缩窄性心包炎等。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "以腹部包块为主要表现者"
                                                                    },
                                                                    {
                                                                        "text": "应与腹部肿瘤及克罗恩（Crohn）病等鉴别。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "以发热为主要表现者"
                                                                    },
                                                                    {
                                                                        "text": "时以发热为主要症状而腹部症状体征不明显，需与引起长期发热的其他疾病鉴别。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "以急性腹痛为主要表现者"
                                                                    },
                                                                    {
                                                                        "text": "可因干酪样坏死灶溃破而引起急性腹膜炎，或因肠梗阻而发生急性腹痛，此时应与常见外科急腹症鉴别。"
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
                                        "type": "h1",
                                        "text": "六、治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 抗结核化学药物治疗"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 如有大量腹水，可适当放腹水以减轻症状"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 手术治疗"
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 结核性腹膜炎的临床表现和诊断。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 腹部柔韧感——结核性腹膜炎的特异性体征。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第四十二章",
                                "text": "腹股沟区解剖",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "腹股沟区解剖"
                                                    },
                                                    {
                                                        "text": "1. 腹股沟管结构2. Hesselbach 三角组成3. 股管结构"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、腹股沟管结构",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "腹股沟管解剖腹股沟管位于腹前壁、腹股沟韧带内上方，大体相当于腹内斜肌、腹横肌弓状下缘与腹股沟韧带之间的空隙。成年人腹股沟管的长度为4～5 cm。腹股沟管的内口即深环，外口即浅环。女性腹股沟管内有子宫圆韧带通过，男性则有精索通过。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "腹股沟管的周围结构",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "前壁"
                                                                            },
                                                                            {
                                                                                "text": "后壁"
                                                                            },
                                                                            {
                                                                                "text": "上壁"
                                                                            },
                                                                            {
                                                                                "text": "下壁"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "皮肤、皮下组织和腹外斜肌键膜，外侧1/3部分尚有腹内斜肌覆盖"
                                                                            },
                                                                            {
                                                                                "text": "腹横筋膜和腹膜，内侧1/3尚有腹股沟镰"
                                                                            },
                                                                            {
                                                                                "text": "腹内斜肌、腹横肌的弓状下缘"
                                                                            },
                                                                            {
                                                                                "text": "腹股沟韧带和腔隙韧带"
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
                                        "type": "h1",
                                        "text": "二、Hesselbach 三角组成",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "    直疝三角（Hesselbach三角，海氏三角）的外侧边是腹壁下动脉，内侧边为腹直肌外侧缘，底边为腹股沟韧带。此处腹壁缺乏完整的腹肌覆盖，且腹横筋膜又比周围部分薄，故易发生疝。腹股沟直疝即在此由后向前突出，故称直疝三角。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、股管结构",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "    股管是一个狭长的漏斗形间隙，长约1～1.5 cm，内含脂肪、疏松结缔组织和淋巴结。股管有上下两口。上口称股环，直径约1. 5 cm，有股环隔膜覆盖；其前缘为腹股沟韧带，后缘为耻骨梳韧带，内缘为腔隙韧带，外缘为股静脉。"
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "了解。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第四十三章",
                                "text": "腹股沟疝",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "腹股沟疝"
                                                    },
                                                    {
                                                        "text": "1. 发病机制及临床类型2. 诊断与鉴别诊断3. 手术治疗4. 嵌顿性和绞窄性疝的治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、发病机制及临床类型",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 发病机制腹股沟斜疝有先天性和后天性之分。",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）先天性解剖异常：如鞘突不闭锁或闭锁不完全，就成为先天性斜疝的疝囊。右侧睾丸下降比左侧略晚，鞘突闭锁也较迟，故右侧腹股沟病较多。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）后天性腹壁薄弱或缺损：腹内斜肌弓状下缘发育不全或位置偏高者，易发生腹股沟疝（特别是直疝）。"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 临床分型",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "易复性疝"
                                                                    },
                                                                    {
                                                                        "text": "疝内容物很容易回纳入腹腔的疝。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "难复性疝"
                                                                    },
                                                                    {
                                                                        "text": "疝内容物不能回纳或不能完全回纳入腹腔内，但并不引起严重症状者。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "滑动性疝"
                                                                    },
                                                                    {
                                                                        "text": "也属于难复性疝，是少数病程较长的疝，因内容物不断进入疝囊时产生的下坠力量将囊颈上方的腹膜逐渐推向疝囊，以致盲肠、乙状结肠或膀胱随之下移成为疝囊壁的一部分，称为滑动性疝。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "嵌顿性疝"
                                                                    },
                                                                    {
                                                                        "text": "疝囊颈较小而腹内压突然增高时，疝内容物可强行扩张囊颈而进入疝囊，随后因囊颈的弹性回缩，将内容物卡住，使其不能回纳，称为嵌顿性疝。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "绞窄性疝"
                                                                    },
                                                                    {
                                                                        "text": "肠管嵌顿如不及时解除，肠壁及其系膜受压情况不断加重可使动脉血流减少，最后导致完全阻断，即为绞窄性疝。典型特征为：血液循环发生障碍。"
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
                                        "type": "h1",
                                        "text": "二、诊断与鉴别诊断",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 临床表现",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "腹股沟斜疝的基本临床表现是腹股沟区有一突出肿块。",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "腹股沟直疝常见于年老体弱者，主要临床表现是病人直立时，在腹股沟内侧端、耻骨结节上外方出现一半球形肿块，不伴有疼痛，平卧后疝块多能自行消失。直疝很少进入阴囊，极少发生嵌顿。",
                                                                "content": [
                                                                    {
                                                                        "type": "table",
                                                                        "content": [
                                                                            {
                                                                                "content": [
                                                                                    {
                                                                                        "text": "类型"
                                                                                    },
                                                                                    {
                                                                                        "text": "临床表现"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "content": [
                                                                                    {
                                                                                        "text": "易复性斜疝"
                                                                                    },
                                                                                    {
                                                                                        "text": "腹股沟区有肿块，偶有胀痛，肿块常在站立、行走、咳嗽时出现，多呈梨形，可降至阴囊或大阴唇。平卧休息或用手将肿块向腹腔推送，肿块可还纳消失。"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "content": [
                                                                                    {
                                                                                        "text": "难复性斜疝"
                                                                                    },
                                                                                    {
                                                                                        "text": "胀痛稍重，疝块不能完全还纳。"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "content": [
                                                                                    {
                                                                                        "text": "嵌顿性疝"
                                                                                    },
                                                                                    {
                                                                                        "text": "疝块突然增大，伴有明显疼痛，平卧或用手推送不能使疝块还纳。"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "content": [
                                                                                    {
                                                                                        "text": "绞窄性疝"
                                                                                    },
                                                                                    {
                                                                                        "text": "临床症状多较严重，严重者可发生脓毒症。"
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
                                                "type": "h2",
                                                "text": "2. 鉴别诊断",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）斜疝、直疝和股疝的鉴别",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": ""
                                                                            },
                                                                            {
                                                                                "text": "斜疝"
                                                                            },
                                                                            {
                                                                                "text": "直疝"
                                                                            },
                                                                            {
                                                                                "text": "股疝"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "发病年龄"
                                                                            },
                                                                            {
                                                                                "text": "儿童及青壮年"
                                                                            },
                                                                            {
                                                                                "text": "老年"
                                                                            },
                                                                            {
                                                                                "text": "40岁以上妇女"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "突出途径"
                                                                            },
                                                                            {
                                                                                "text": "经腹股沟管突出，可进阴囊"
                                                                            },
                                                                            {
                                                                                "text": "由直疝三角突出，不进阴囊"
                                                                            },
                                                                            {
                                                                                "text": "经股管向卵圆窝突出"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "疝块外形"
                                                                            },
                                                                            {
                                                                                "text": "椭圆形、梨形，上部蒂柄状"
                                                                            },
                                                                            {
                                                                                "text": "半球形，基底部较宽"
                                                                            },
                                                                            {
                                                                                "text": "半球形"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "回纳疝块后压住深环"
                                                                            },
                                                                            {
                                                                                "text": "不再突出"
                                                                            },
                                                                            {
                                                                                "text": "仍可突出"
                                                                            },
                                                                            {
                                                                                "text": "仍可突出"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "精索位于疝囊"
                                                                            },
                                                                            {
                                                                                "text": "后方"
                                                                            },
                                                                            {
                                                                                "text": "前外方"
                                                                            },
                                                                            {
                                                                                "text": "——"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "疝囊颈位于腹壁下动脉"
                                                                            },
                                                                            {
                                                                                "text": "外侧"
                                                                            },
                                                                            {
                                                                                "text": "内侧"
                                                                            },
                                                                            {
                                                                                "text": "——"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "嵌顿机会"
                                                                            },
                                                                            {
                                                                                "text": "较多"
                                                                            },
                                                                            {
                                                                                "text": "最不易嵌顿"
                                                                            },
                                                                            {
                                                                                "text": "最易嵌顿"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "common",
                                                                        "text": "记忆：①首先要记住三者的发病年龄，",
                                                                        "content": [
                                                                            {
                                                                                "type": "common",
                                                                                "text": "可用联想记忆：斜疝想到爱哭爱闹的",
                                                                                "content": [
                                                                                    {
                                                                                        "type": "common",
                                                                                        "text": "光屁股的小屁孩，疝到阴囊里去了；股",
                                                                                        "content": [
                                                                                            {
                                                                                                "type": "common",
                                                                                                "text": "疝，一个股字，想到大腿或屁股（股，本为大腿的意思），遂联想到妇女。",
                                                                                                "content": [
                                                                                                    {
                                                                                                        "type": "common",
                                                                                                        "text": "②如右图所示，示意了腹股沟斜疝、直疝与腹壁下动脉、精索（在腹股沟韧带附近）的关系，大家做题时可画出此简图，帮助分析解剖关系。（阴影区示直疝三角）"
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
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）与其他常见疾病鉴别诊断 ",
                                                        "content": [
                                                            {
                                                                "type": "table",
                                                                "content": [
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "睾丸鞘膜积液"
                                                                            },
                                                                            {
                                                                                "text": "鞘膜积液多为透光（阳性），而疝块则不能透光。腹股沟斜疝时，可在肿块后方扪及实质感的睾丸；鞘膜积液时，睾丸在积液中间，故肿块各方均呈囊性而不能们及实质感的睾丸。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "交通性鞘膜积液"
                                                                            },
                                                                            {
                                                                                "text": "于每日起床后或站立活动时肿块缓慢地出现并增大。平卧或睡觉后肿块逐渐缩小，挤压肿块，其体积也可逐渐缩小。透光试验为阳性。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "精索鞘膜积液"
                                                                            },
                                                                            {
                                                                                "text": "积液肿块较小，在腹股沟管内，牵拉同侧睾丸可见肿块移动。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "隐睾"
                                                                            },
                                                                            {
                                                                                "text": "隐睾肿块较小，挤压时可出现特有的胀痛感觉。如患侧阴囊内睾丸缺如，则诊断更为明确。"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "content": [
                                                                            {
                                                                                "text": "急性肠梗阻"
                                                                            },
                                                                            {
                                                                                "text": "肠管被嵌顿的疝可伴发急性肠梗阻，但不应仅满足于肠梗阻的诊断而忽略疝的存在。"
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
                                        "type": "h1",
                                        "text": "三、手术治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "腹股沟疝最有效的治疗方法是手术修补，包括疝囊高位结扎术、无张力疝修补术和经腹腔镜疝修补术。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "传统疝修补术",
                                                                        "rowSpan": 6
                                                                    },
                                                                    {
                                                                        "text": "疝囊高位结扎术"
                                                                    },
                                                                    {
                                                                        "text": "婴幼儿腹外疝、绞窄性斜疝"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "加强或修补腹股沟管前壁"
                                                                    },
                                                                    {
                                                                        "text": "Ferguson法（最常用）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "加强或修补腹股沟管后壁",
                                                                        "rowSpan": 4
                                                                    },
                                                                    {
                                                                        "text": "Bassini 法"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Halsted 法"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "McVay法（股疝最常用方法）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Shouldice法"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "无张力疝修补术"
                                                                    },
                                                                    {
                                                                        "text": "术后疼痛轻、恢复快、复发率低，多用于复杂疝和复发疝",
                                                                        "colSpan": 2
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "经腹腔镜疝修补术"
                                                                    },
                                                                    {
                                                                        "text": "创伤小、术后疼痛轻、恢复高、无局部牵扯感，但技术设备要求高，目前临床应用较少",
                                                                        "colSpan": 2
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "1. 传统的疝修补术",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "手术的基本原则是疝囊高位结扎、加强或修补腹股沟管管壁。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（1）疝囊高位结扎术",
                                                        "content": [
                                                            {
                                                                "type": "common",
                                                                "text": "婴幼儿的腹肌在发育中可逐渐强壮而使腹壁加强，单纯疝囊高位结扎常能获得满意的疗效，不需施行修补术。绞窄性斜疝因肠坏死而局部有严重感染，通常也采取单纯疝囊高位结扎、避免施行修补术，因感染常使修补失败。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "text": "（2）加强或修补腹股沟管管壁（以Ferguson法最常用）"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 无张力疝修补术。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 经腹腔镜疝修补术。",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Ferguson法"
                                                                    },
                                                                    {
                                                                        "text": "在精索前方将腹内斜肌下缘和联合腱缝至腹股沟韧带上，目的是消灭腹内斜肌弓状下缘与腹股沟韧带之间的空隙。适用于腹横筋膜无显著缺损、腹股沟管后壁尚健全的病例。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Bassini法"
                                                                    },
                                                                    {
                                                                        "text": "在精索后方把腹内斜肌下缘和联合腱缝至腹股沟韧带上，置精索于腹内斜肌与腹外斜肌腱膜之间。临床应用最广泛。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Halsted法"
                                                                    },
                                                                    {
                                                                        "text": "与Bassini法很相似，但把腹外斜肌腱膜也在精索后方缝合，从而把精索移至腹壁皮下层与腹外斜肌腱膜之间。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "McVay法"
                                                                    },
                                                                    {
                                                                        "text": "在精索后方把腹内斜：肌下缘和联合腱缝至耻骨梳韧带上。适用于后壁薄弱严重病例，还可用于股疝修补。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "Shouldice法"
                                                                    },
                                                                    {
                                                                        "text": "既加强了内环，又修补了腹股沟管薄弱的后壁，其术后复发率低于其他方法。适用于较大的成人腹股沟斜疝和直疝。"
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
                                        "type": "h1",
                                        "text": "四、嵌顿性和绞窄性疝的治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 嵌顿疝的治疗",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "治疗方法"
                                                                    },
                                                                    {
                                                                        "text": "适应证"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "手法复位"
                                                                    },
                                                                    {
                                                                        "text": "①嵌顿时间在3～4小时内，局部压痛不明显，也无腹部压痛或腹肌紧张等腹膜刺激征者；②年老体弱或伴有其他较严重疾病而估计肠袢尚未较窄坏死者。"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "紧急手术治疗"
                                                                    },
                                                                    {
                                                                        "text": "除了上述情况外，嵌顿性疝原则上需要紧急手术治疗，以防止疝内容物坏死并解除伴发的肠梗阻。"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 绞窄性疝的治疗",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "绞窄性疝的内容物已经坏死，应该手术切除肠管并进行一期吻合。病人情况不允许肠切除吻合时，可将坏死或活力可以的肠管外置于腹外，并在其近侧端切一小口，插入一肛管，以期解除梗阻；7～14日后，全身情况好转，再施行肠切除吻合术。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 腹股沟斜疝、腹股沟直疝的诊断与鉴别诊断"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 手术治疗及适应证"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第四十四章",
                                "text": "股疝",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "股疝"
                                                    },
                                                    {
                                                        "text": "1. 诊断2. 治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、诊断",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "多见于40岁以上妇女。股疝疝块往往不大，常在腹股沟韧带下方卵圆窝处表现为一半球形的突起。在腹外疝中，股疝发生嵌顿最多见。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "股疝需与下列疾病相鉴别：腹股沟斜疝、脂肪瘤、肿大的淋巴结、大隐静脉曲张结节样膨大、髂腰部结核性脓肿脊柱或骶髂关节结核所致寒性脓肿。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "股疝容易嵌顿，一旦嵌顿又可迅速发展为绞窄性。因此，股疝诊断确定后，应及时手术治疗。对于嵌顿性或绞窄性股疝，更应紧急手术。",
                                                "content": [
                                                    {
                                                        "type": "common",
                                                        "text": "最常用的手术是McVay修补法。"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 股疝发生嵌顿最多见。"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2. 股疝最常用的手术是McVay修补法。"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第四十五章",
                                "text": "腹部闭合性损伤",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "腹部闭合性损伤"
                                                    },
                                                    {
                                                        "text": "1. 临床表现2. 辅助检查3. 诊断要点4. 急症手术探查的指征5. 非手术治疗"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "common",
                                                "text": "腹部损伤按是否穿透腹壁、腹腔是否与外界相通可分为开放性和闭合性两大类，无论开放或闭合，都可导致腹部内脏损伤。常见受损内脏在开放性损伤中最常见的是肝脏，在闭合性损伤中最常见的是脾脏"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、临床表现",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "单纯腹壁损伤"
                                                            },
                                                            {
                                                                "text": "症状和体征较轻，受伤部位疼痛，局限性腹壁肿胀、压痛，或有时可见皮下瘀斑。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "内脏"
                                                            },
                                                            {
                                                                "text": "腹痛或无明显临床表现；严重者腹腔内出血和腹膜炎。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "肝损伤"
                                                            },
                                                            {
                                                                "text": "腹腔内（或腹膜后）出血，明显的腹痛和腹膜刺激征,右肩部放射痛。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "脾损伤"
                                                            },
                                                            {
                                                                "text": "腹腔内（或腹膜后）出血，腹痛和腹膜刺激征,左侧肩部放射痛。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "胃肠道、胆道、膀胱"
                                                            },
                                                            {
                                                                "text": "主要临床表现是弥漫性腹膜炎。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、辅助检查",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "诊断性腹腔穿刺术和腹腔灌洗术"
                                                            },
                                                            {
                                                                "text": "阳性率可达90%以上。对于判断腹腔内脏有无损伤和哪一类脏器损伤有很大帮助。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "腹部立位平片（X线）"
                                                            },
                                                            {
                                                                "text": "空腔脏器损伤首选。可表现为隔下新月形阴影。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "B超检查"
                                                            },
                                                            {
                                                                "text": "主要用于诊断实质性脏器（肝、脾、胰、肾）的损伤。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "CT检查"
                                                            },
                                                            {
                                                                "text": "对实质脏器损伤及其范围程度有重要的诊断价值，CT影像比B超更为精确。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "其他检查"
                                                            },
                                                            {
                                                                "text": "选择性血管造影、MRI检查、无气腹腔镜检查。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "三、诊断要点",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "有无内脏损伤"
                                                            },
                                                            {
                                                                "text": "如发现下列情况之一者，应考虑有腹内脏器损伤：①早期出现休克征象者（尤其是出血性休克）；②有持续性甚至进行性腹部剧痛伴恶心、呕吐等消化道症状者；③有明显腹膜刺激征者；④有气腹表现者；⑤腹部出现移动性浊音者；⑥有便血、呕血或尿血者；⑦直肠指检发现前壁有压痛或波动感，或指套染血者。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "什么脏器受到损伤"
                                                            },
                                                            {
                                                                "text": "应先确定是哪一类脏器受损，然后考虑具体脏器①有恶心、呕吐、便血、气腹者多为胃肠道损伤；②有排尿困难、血尿、外阴或会阴部牵涉痛者，提示泌尿系脏器损伤；③有隔面腹膜刺激表现同侧肩部牵涉痛者，提示上腹脏器损伤，其中尤以肝和脾的破裂为多见；④有下位肋骨骨折者，提示有肝或脾破裂的可能；⑤有骨盆骨折者，提示有直肠、膀胱、尿道损伤的可能。"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "是否有多发性损伤"
                                                            },
                                                            {
                                                                "text": "①腹内某一脏器有多处破裂；②腹内有一个以上脏器受到损伤；③除腹部损伤外，尚有腹部以外的合并损伤；④腹部以外损伤累及腹内脏器。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "四、急症手术探查的指征",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 全身情况有恶化趋势，出现口渴、烦躁、脉率增快或体温及白细胞计数上升；"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 腹痛和腹膜刺激征有进行性加重或范围扩大；"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "3. 肠蠕动音逐渐减弱、消失或出现明显腹胀；"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "4. 膈下游离气体，肝浊音界缩小或消失，或者出现移动性浊音；"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "5. 积极救治休克而情况不见好转或继续恶化者。"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "6. 消化道出血者；"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "7. 腹腔穿刺抽出气体、不凝血、胆汁、胃肠内容物等；"
                                            },
                                            {
                                                "type": "h2",
                                                "text": "8. 直肠指诊有明显触痛。"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "五、非手术治疗",
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "包括心肺复苏、解除气道梗阻、控制明显的外出血、处理开放性气胸或张力性气胸、尽快恢复循环血容量、控制休克和进展迅速的颅脑外伤、镇静剂或止痛药。"
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 常见受损内脏在开放性损伤中最常见的是肝脏，在闭合性损伤中最常见的是脾脏"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "2.临床表现"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "实质性脏器损伤→腹腔内（腹膜后）出血"
                                            }
                                        ]
                                    },
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "空腔脏器破裂→弥漫性腹膜炎"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title": "第四十六章",
                                "text": "常见腹部脏器损伤",
                                "content": [
                                    {
                                        "type": "table",
                                        "content": [
                                            {
                                                "content": [
                                                    {
                                                        "text": "考纲要求",
                                                        "colSpan": 2
                                                    }
                                                ]
                                            },
                                            {
                                                "content": [
                                                    {
                                                        "text": "常见腹部脏器损伤"
                                                    },
                                                    {
                                                        "text": "1. 脾、肝、胰损伤的临床特点与治疗2. 小肠、结肠、直肠损伤的临床特点与治疗"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "一、脾、肝、胰损伤的临床特点与治疗",
                                        "content": [
                                            {
                                                "type": "h2",
                                                "text": "1. 肝、脾损伤的临床特点和治疗",
                                                "content": [
                                                    {
                                                        "type": "table",
                                                        "content": [
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": ""
                                                                    },
                                                                    {
                                                                        "text": "肝"
                                                                    },
                                                                    {
                                                                        "text": "脾"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "发病率"
                                                                    },
                                                                    {
                                                                        "text": "在各种腹部损伤中约占15%～20%在开放性损伤中占首位"
                                                                    },
                                                                    {
                                                                        "text": "在腹部闭合性损伤中占首位，占20%～40%"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "病理"
                                                                    },
                                                                    {
                                                                        "text": "中央型破裂、被膜下破裂、真性破裂"
                                                                    },
                                                                    {
                                                                        "text": "中央型破裂、被膜下破裂、真性破裂"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "临床表现"
                                                                    },
                                                                    {
                                                                        "text": "腹痛和腹膜刺激征常较脾破裂伤者更为明显，黑便或呕血"
                                                                    },
                                                                    {
                                                                        "text": "腹腔内出血"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "其他表现"
                                                                    },
                                                                    {
                                                                        "text": "右侧肋骨骨折"
                                                                    },
                                                                    {
                                                                        "text": "左侧肋骨骨折"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "处理"
                                                                    },
                                                                    {
                                                                        "text": "彻底清创，确切止血，清除胆汁，建立通畅的引流；手术治疗为主。如裂口内有不易控制的动脉性出血，可考虑行肝动脉结扎。对于大块肝组织破裂，特别是粉碎性肝破裂应施行清创性肝切除术。"
                                                                    },
                                                                    {
                                                                        "text": "非手术治疗（一般情况好，损伤较小）手术治疗（休克、损伤重）"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "content": [
                                                                    {
                                                                        "text": "并发症"
                                                                    },
                                                                    {
                                                                        "text": "中央型容易发展为继发性肝脓肿"
                                                                    },
                                                                    {
                                                                        "text": "婴幼儿容易发生脾切除后凶险性感染"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "type": "common",
                                                                "text": "记忆：脾合开肝——痞子汇合开始干仗。因此闭合性损伤中脾损伤多见，开放性损伤中肝损伤多见。"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "h2",
                                                "text": "2. 胰损伤的临床特点与治疗",
                                                "content": [
                                                    {
                                                        "type": "h3",
                                                        "title": "（1）临床特点",
                                                        "text": "胰腺破损或断裂后，胰液可积聚于网膜囊内而表现为上腹明显压痛和肌紧张，还可因膈肌受刺激而出现肩部疼痛。外渗的胰液经网膜孔或破裂的小网膜进入腹腔后，可很快出现弥漫性腹膜炎，部分病例渗液被局限在网膜囊内，直至形成胰腺假性囊肿才被发现。胰腺损伤所引起的内出血数量一般不大，血淀粉酶和腹腔穿刺液的淀粉酶升高，有一定诊断参考价值。"
                                                    },
                                                    {
                                                        "type": "h3",
                                                        "title": "（2）治疗",
                                                        "text": "处理高度怀疑或诊断为胰腺损伤者，应立即手术治疗，同时使用烟卷引流和双套管负压吸引，烟卷引流可在数日后拔除，胶管引流则应维持10天以上，如发现胰瘘，应保证引流通畅，一般多可在4～6周内自愈，亦有拖延数月之久者。禁食并给予全胃肠外营养治疗。"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "h1",
                                        "text": "二、小肠、结肠、直肠损伤的临床特点与治疗",
                                        "content": [
                                            {
                                                "type": "table",
                                                "content": [
                                                    {
                                                        "content": [
                                                            {
                                                                "text": ""
                                                            },
                                                            {
                                                                "text": "小肠"
                                                            },
                                                            {
                                                                "text": "结肠"
                                                            },
                                                            {
                                                                "text": "直肠"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "发病率"
                                                            },
                                                            {
                                                                "text": "受伤机会较多"
                                                            },
                                                            {
                                                                "text": "较小肠低"
                                                            },
                                                            {
                                                                "text": "最低"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "临床表现"
                                                            },
                                                            {
                                                                "text": "明显的腹膜炎"
                                                            },
                                                            {
                                                                "text": "腹膜炎出现较晚但较严重"
                                                            },
                                                            {
                                                                "text": "上端损伤表现为腹膜炎；下端损伤表现为直肠周围炎"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "content": [
                                                            {
                                                                "text": "治疗方式"
                                                            },
                                                            {
                                                                "text": "立即手术，以简单修补为主"
                                                            },
                                                            {
                                                                "text": "先采用肠造口术或肠外置术处理，待3～4周后病人情况好转时，再行关闭屡口"
                                                            },
                                                            {
                                                                "text": "上端：端端吻合，同时乙状结肠双筒造口术下端：乙状结肠造口术，并充分引流直肠周围间隙"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "keyPoint": [
                                    {
                                        "content": [
                                            {
                                                "type": "common",
                                                "text": "肝破裂（开放性损伤首位）、脾破裂（闭合性损伤首位）的临床表现和诊断。"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .imed-reader {
        padding: 1rem;
    }

    .imed-title {
        font-size: 1rem;
        text-align: center;
        margin: 0.5rem 0;
    }

    .imed-chapter {
        margin: 0.5rem 0;
        font-size: .9rem;
        text-align: center;
    }

    .imed-content {
        font-size: .8rem;
    }
</style>
<style>
    body {
        overflow: scroll !important;
    }
</style>
