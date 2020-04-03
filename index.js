import { TranslationMessages } from 'ra-core';

const hkfoulMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: '篩選加料',
            add: '加多件',
            back: '返轉頭',
            bulk_actions: '對著%{smart_count}件搞嘢',
            cancel: '咪搞',
            clear_input_value: '洗走啲料',
            clone: '抄多份',
            confirm: '就咁確定',
            create: '新開',
            delete: '剷走',
            edit: '修改',
            export: '換格式輸出',
            list: '列出',
            refresh: 'F5',
            remove_filter: '拎走呢個篩',
            remove: '拎走',
            save: '儲存',
            search: '查找',
            show: '攤開黎睇',
            sort: '排序',
            undo: '當無嘢發生過',
            expand: '爆開',
            close: '摺埋',
            open_menu: '掀開選單',
            close_menu: '衾埋',
        },
        boolean: {
            true: '堅',
            false: '流',
            null: '',
        },
        page: {
            create: '整多件 %{name}',
            dashboard: '壁報板',
            edit: '%{name} #%{id}',
            error: '奶撚咗嘢',
            list: '%{name} 排開',
            loading: '撈緊',
            not_found: '無料到',
            show: '%{name} #%{id}',
            empty: '仲未見有 %{name}',
            invite: '你又想搞埋一份？',

        },
        input: {
            file: {
                upload_several:
                    '將你啲文件拖埋黎，成抽咁拖都得。一係㩒呢道慢慢揀',
                upload_single: '掟份文件拖埋黎',
            },
            image: {
                upload_several:
                    '將你啲相呀圖呀拖埋黎，成抽咁拖都得。一係㩒呢道慢慢揀相',
                upload_single:
                    '掟將相呀圖呀拖埋黎，一係㩒呢道慢慢揀相',
            },
            references: {
                all_missing: '搵唔到相關資料喎',
                many_missing:
                    '有堆相關資料唔撚見左呀',
                single_missing:
                    '有筆相關資料唔撚見左呀',
            },
            password: {
                toggle_visibla: '衾埋個密碼啦',
                toggle_hidden: '掀開個密碼啦',
            }
        },
        message: {
            about: '乜料？',
            are_you_sure: '你係咪認真架？',
            bulk_delete_content: '你真係想剷走 %{name} |||| 你真係想剷走 %{smart_count} 件嘢？',
            bulk_delete_title: '剷走 %{name} |||| 剷撚晒呢 %{smart_count} 件嘢',
            delete_content: '你真係想剷走呢件嘢？',
            delete_title:'剷走第 #%{id} 號 %{name}',
            details: '詳情',
            error: '呢鑊又奶嘢啦！搞唔撚掂你剛先啲嘢',
            invalid_form: '玩嘢呀？填錯表呀仆街',
            loading: '撈緊，等下啦',
            no: '唔係',
            not_found: '哥仔你係鳩撞？一係你唔好彩，家吓撞牆，冇反應',
            yes: '認真',
            unsaved_changes: '喂，你仲有嘢未存好喎！係咪唔使要先？',
        },
        navigation: {
            no_results: '無料到',
            no_more_results:
                '邊鬼道有第 %{page} 頁呢？返轉頭啦！',
            page_out_of_boundaries: '邊鬼道有第 %{page} 頁呢？返轉頭啦！',
            page_out_from_end: '掘到底啦！',
            page_out_from_begin: '前面冇料到啦！',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            page_rows_per_page: '每頁件數:',
            next: '下一頁',
            prev: '上一頁',
        },
        auth: {
            auth_check_error: '登入先再講啦',
            user_menu: '個人檔案',
            username: '用戶名',
            password: '密碼',
            sign_in: '登入',
            sign_in_error: '驗證唔到，唔該再試多轉',
            logout: '走人',
        },
        notification: {
            updated: '啲嘢已經更新左 |||| %{smart_count} 件嘢更新左',
            created: '件嘢整好左',
            deleted: '件嘢剷走左囉 |||| %{smart_count} 件嘢剷走左囉',
            bad_item: '呢件嘢臭嘅',
            item_doesnt_exist: '都冇呢件，白撞呀？',
            http_error: '啊！網站出事喎',
            data_provider_error:'爆料果邊有問題，係識嘢仲可以去 console 查找.',
            i18n_error: '翻譯炒左粉',
            canceled: '彈弓手，當無左件事',
            logged_out: '你呢期已經收左貔，一係再登入關',
        },
        validation: {
            required: '填啦契弟',
            minLength: '少過 %{min} 隻字唔算數',
            maxLength: '多過 %{max} 隻字唔算數',
            minValue: '唔可以少過 %{min}',
            maxValue: '唔可以大過 %{max}',
            number: '淨係食數字',
            email: '電郵地址呀！',
            oneOf: '淨係俾你用 %{options} 其中一件',
            regex: '有指定格式㗎死蠢 (火星文): %{pattern}',
        },
    },
};

