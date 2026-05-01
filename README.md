# HOI-MLLM

Official repository for **Towards Open-World Human-Object Interaction Reasoning with Multimodal Large Language Models**, accepted as an **ICASSP 2026 Oral Presentation**.

**Project page:** https://jasminethurder.github.io/HOI-MLLM/  
**Paper:** [`docs/assets/icassp-wzy.pdf`](docs/assets/icassp-wzy.pdf)  
**Poster:** [`docs/assets/hoi-mllm-poster.pdf`](docs/assets/hoi-mllm-poster.pdf)  
**HOI F1 benchmark:** [`docs/assets/hoi_f1_horizontal.pdf`](docs/assets/hoi_f1_horizontal.pdf)

## Overview

HOI-MLLM formulates human-object interaction detection as structured multimodal reasoning. Instead of relying only on closed-set interaction classifiers, the model generates parseable HOI predictions together with instance-level reasoning chains, making the output more interpretable and better aligned with open-world interaction understanding.

## Highlights

- **Open-world HOI reasoning:** predicts interactions with multimodal large language models rather than only fixed interaction classifiers.
- **Structured chain-of-thought supervision:** decomposes HOI recognition into human localization, object grounding, interaction reasoning, and final structured prediction.
- **Balanced supervised fine-tuning:** improves rare and diverse interaction coverage.
- **GRPO optimization:** aligns reasoning and final predictions with task-specific rewards.
- **Strong empirical results:** achieves competitive or state-of-the-art performance on V-COCO and HICO-DET evaluation settings.

## Repository Status

The project page, paper PDF, and poster are included under [`docs/`](docs/). Code, checkpoints, data preparation scripts, and evaluation instructions will be released here.

## Citation

```bibtex
@inproceedings{wu2026hoimllm,
  title={Towards Open-World Human-Object Interaction Reasoning with Multimodal Large Language Models},
  author={Wu, Eastman Z. Y. and Li, Yali and Wang, Shengjin},
  booktitle={Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  year={2026}
}
```

## Acknowledgement

This project builds on the Qwen-VL fine-tuning ecosystem. We thank the authors of [Qwen-VL-Series-Finetune](https://github.com/2U1/Qwen-VL-Series-Finetune/tree/master/src) for their open-source work.
