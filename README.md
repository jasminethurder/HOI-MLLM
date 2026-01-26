# HOI-MLLM

**HOI-MLLM** is a reasoning-based framework for **open-world Human–Object Interaction (HOI) detection**, built upon **multimodal large language models (MLLMs)** with structured **chain-of-thought (CoT)** supervision.

Unlike conventional DETR-style HOI detectors that rely on predefined interaction categories, HOI-MLLM formulates HOI detection as **structured multimodal reasoning**, enabling fine-grained, interpretable, and open-vocabulary interaction understanding.

## Installation

```bash
git clone https://github.com/jasminethurder/HOI-MLLM.git
cd HOI-MLLM
pip install -r requirements.txt
```

---

## Benchmarks

HOI-MLLM is evaluated on:

- **V-COCO**
- **HICO-DET**

---

## Repository Structure

```
HOI-MLLM/
├── data/
│   ├── hicodet/
│   └── vcoco/
├── annos/
├── training_scripts/
│   ├── sft/
│   └── grpo/
├── evaluation/
└── README.md
```
---

## Training

### HICO-DET Benckmark
### V-COCO Benckmark

## Paper

**Towards Open-World Human-Object Interaction Reasoning with Multimodal Large Language Models**  
Eastman Z. Y. Wu, Yali Li, Shengjin Wang  

---

## Citation

```
```

---

## Acknowledgement
Our implementation is built upon [Qwen-VL-Series-Finetune](https://github.com/2U1/Qwen-VL-Series-Finetune/tree/master/src). We are grateful to the authors for their excellent work and for making their code publicly available.
